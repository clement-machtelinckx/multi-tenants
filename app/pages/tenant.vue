<template>
  <section class="card">
    <h1>Accueil tenant</h1>

    <p class="muted">
      Clique pour choisir un tenant (cookie <code>x-tenant</code>).
    </p>

    <div class="row">
      <NuxtLink class="btn" to="/?tenant=tenant-a">Tenant A</NuxtLink>
      <NuxtLink class="btn" to="/?tenant=tenant-b">Tenant B</NuxtLink>
      <NuxtLink class="btn" to="/?tenant=tenant-c">Tenant C</NuxtLink>
    </div>

    <p class="muted">Puis reviens sur Home: <NuxtLink to="/">/</NuxtLink></p>
  </section>
</template>

<style scoped>
.card {
  background: var(--c-surface);
  border-radius: var(--radius);
  border: 1px solid color-mix(in oklab, var(--c-text) 10%, transparent);
  padding: 18px;
}
.row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 12px;
}
.btn {
  background: var(--c-primary);
  color: var(--c-on-primary);
  border-radius: 10px;
  padding: 10px 12px;
  text-decoration: none;
  font-weight: 700;
}
.muted { opacity: 0.75; }
</style>
