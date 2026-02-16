import type { TenantId } from "./types";

export type TenantIndex = {
    defaultTenantId: TenantId;
    domains: Record<string, TenantId>;
};

function normalizeHost(host: string): string {
    return host.split(":")[0].trim().toLowerCase();
}

export function resolveTenantId(opts: {
    host?: string | null;
    headerTenant?: string | null;
    index: TenantIndex;
}): TenantId {
    const byHeader = opts.headerTenant?.trim();
    if (byHeader) return byHeader;

    const host = opts.host ? normalizeHost(opts.host) : "";
    if (host && opts.index.domains[host]) return opts.index.domains[host];

    return opts.index.defaultTenantId;
}
