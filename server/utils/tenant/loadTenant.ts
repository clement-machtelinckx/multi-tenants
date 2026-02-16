import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { TenantConfig, TenantRuntime, TenantTheme } from "./types";

async function readJson<T>(absPath: string): Promise<T> {
    const raw = await readFile(absPath, "utf8");
    return JSON.parse(raw) as T;
}

export async function loadTenantRuntime(opts: {
    tenantsRootAbs: string;
    tenantId: string;
}): Promise<TenantRuntime> {
    const root = join(opts.tenantsRootAbs, opts.tenantId);

    const config = await readJson<TenantConfig>(join(root, "config.json"));
    const theme = await readJson<TenantTheme>(join(root, "theme.json"));

    return {
        tenantId: opts.tenantId,
        config,
        theme,
        features: config.features ?? {}
    };
}

export async function loadTenantIndex(tenantsRootAbs: string) {
    return readJson<{ defaultTenantId: string; domains: Record<string, string> }>(
        join(tenantsRootAbs, "index.json")
    );
}
