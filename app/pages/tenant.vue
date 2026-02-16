<template>
  <section class="card" :class="tenantClass">
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

    <div v-if="tenant === 'a'" class="box">
      <h3>Composant / style spécifique A</h3>
      <p>Fond violet, CTA différent.</p>
    </div>

    <div v-else class="box">
      <h3>Composant / style spécifique B</h3>
      <p>Fond vert, contenu différent.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();

const tenant = computed(() => (route.query.t === "b" ? "b" : "a"));

const tenantLabel = computed(() => (tenant.value === "a" ? "tenant-a" : "tenant-b"));

const tenantClass = computed(() => (tenant.value === "a" ? "tenant-a" : "tenant-b"));
</script>

<style scoped>
.card {
  background: var(--c-surface);
  color: var(--c-text);
  border-radius: var(--radius);
  border: 1px solid color-mix(in oklab, var(--c-text) 10%, transparent);
  padding: 18px;
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

</style>
