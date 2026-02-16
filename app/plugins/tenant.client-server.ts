import type { TenantRuntime } from "~/server/utils/tenant/types";

export default defineNuxtPlugin(() => {
    const tenantState = useTenantState();

    if (import.meta.server) {
        const event = useRequestEvent();
        const t = event?.context?.tenant as TenantRuntime | undefined;
        if (t) tenantState.value = t;
    }
});
