<template>
  <section class="card">
    <h1>Accueil tenant</h1>

    <p>
      Tenant simulé via URL :
      <code>?t=a</code> ou <code>?t=b</code>
    </p>

    <div class="row">
      <NuxtLink class="btn" to="/tenant?t=a">Simuler tenant A</NuxtLink>
      <NuxtLink class="btn" to="/tenant?t=b">Simuler tenant B</NuxtLink>
    </div>

    <p class="muted">
      Tenant courant: <b>{{ tenantLabel }}</b>
    </p>

    <div class="box">
      <h3>Composant commun</h3>
      <p>
        Le style change via <b>CSS variables</b> (thème), pas via des classes tenant.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const tenantLabel = computed(() => (route.query.t === "b" ? "tenant-b" : "tenant-a"));
</script>

<style scoped>
.card {
  background: var(--c-surface);
  color: var(--c-text);
  border-radius: var(--radius);
  border: 1px solid color-mix(in oklab, var(--c-text) 10%, transparent);
  padding: 18px;
}

.row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 12px 0;
}

.btn {
  background: var(--c-primary);
  color: var(--c-on-primary);
  border-radius: 10px;
  padding: 10px 12px;
  text-decoration: none;
  font-weight: 700;
  border: 1px solid transparent;
}

.box {
  margin-top: 12px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid color-mix(in oklab, var(--c-text) 10%, transparent);
}

.muted { opacity: 0.75; }
</style>
