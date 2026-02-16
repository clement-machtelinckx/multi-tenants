import { defineNitroPlugin } from "nitropack/runtime";
import { getHeader } from "h3";
import { resolve } from "node:path";
import type { TenantRuntime } from "../utils/tenant/types";
import { loadTenantIndex, loadTenantRuntime } from "../utils/tenant/loadTenant";
import { resolveTenantId } from "../utils/tenant/resolveTenant";

type CacheEntry = { expiresAt: number; value: TenantRuntime };
const cache = new Map<string, CacheEntry>();

function now() {
    return Date.now();
}

function tenantsRootAbs(): string {
    // prod: tu montes TENANTS_DIR (volume / dossier)
    // dev: fallback sur ./tenants à la racine du repo
    return process.env.TENANTS_DIR?.trim() || resolve(process.cwd(), "tenants");
}

export default defineNitroPlugin((nitroApp) => {
    const TTL_MS = 10_000;

    nitroApp.hooks.hook("request", async (event) => {
        const root = tenantsRootAbs();

        const host = getHeader(event, "host");
        const headerTenant = getHeader(event, "x-tenant");

        const index = await loadTenantIndex(root);
        const tenantId = resolveTenantId({ host, headerTenant, index });

        const hit = cache.get(tenantId);
        if (hit && hit.expiresAt > now()) {
            event.context.tenant = hit.value;
            return;
        }

        try {
            const tenant = await loadTenantRuntime({ tenantsRootAbs: root, tenantId });
            cache.set(tenantId, { value: tenant, expiresAt: now() + TTL_MS });
            event.context.tenant = tenant;

            // log utile
            console.info("[tenant] resolved", { host, headerTenant, tenantId, root, cache: "miss" });
        } catch (e) {
            // fallback sur default
            const fallbackId = index.defaultTenantId;
            console.warn("[tenant] load failed, fallback", { tenantId, fallbackId, error: String(e) });

            const fallback = await loadTenantRuntime({ tenantsRootAbs: root, tenantId: fallbackId });
            cache.set(fallbackId, { value: fallback, expiresAt: now() + TTL_MS });
            event.context.tenant = fallback;
        }
    });

    // invalidation manuelle (endpoint)
    (globalThis as any).__TENANT_CACHE__ = {
        clear() {
            cache.clear();
        }
    };
});
