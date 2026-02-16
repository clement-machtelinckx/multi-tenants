export default defineNuxtRouteMiddleware((to) => {
    const q = to.query.tenant;
    if (!q) return;

    const tenantId = String(q);
    const cookie = useCookie<string>("x-tenant", { sameSite: "lax" });
    cookie.value = tenantId;

    // Nettoie l’URL (enlève ?tenant=...) pour éviter les reloads en boucle
    const nextQuery = { ...to.query };
    delete (nextQuery as any).tenant;

    return navigateTo({ path: to.path, query: nextQuery }, { replace: true });
});
