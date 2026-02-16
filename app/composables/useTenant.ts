import type { TenantRuntime } from "~/server/utils/tenant/types";

export function useTenantState() {
    return useState<TenantRuntime | null>("tenant", () => null);
}

export function useTenant() {
    const s = useTenantState();
    return computed(() => s.value);
}
