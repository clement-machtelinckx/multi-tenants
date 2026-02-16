import type { TenantRuntime } from "../server/utils/tenant/types";

declare module "h3" {
    interface H3EventContext {
        tenant?: TenantRuntime;
    }
}
export { };
