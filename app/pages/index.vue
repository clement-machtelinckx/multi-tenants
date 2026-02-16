<template>
  <section class="card">
    <h1>{{ brandName }}</h1>
    <p class="muted">tenantId: <b>{{ tenantId }}</b></p>

    <p class="muted">
      Le thème vient de <code>tenants/&lt;tenantId&gt;/theme.json</code> (runtime).
    </p>

    <div class="row">
      <a class="btn" href="/tenant">Aller page tenant</a>
    </div>
  </section>
</template>

<script setup lang="ts">
const tenant = useTenant();

const tenantId = computed(() => tenant.value?.tenantId ?? "unknown");
const brandName = computed(() => tenant.value?.config?.brand?.name ?? "Unknown");
</script>

<style scoped>
.card {
  background: var(--c-surface);
  border-radius: var(--radius);
  border: 1px solid color-mix(in oklab, var(--c-text) 10%, transparent);
  padding: 18px;
}
.row { margin-top: 12px; }
.btn {
  display: inline-block;
  background: var(--c-primary);
  color: var(--c-on-primary);
  border-radius: 10px;
  padding: 10px 12px;
  text-decoration: none;
  font-weight: 700;
}
.muted { opacity: 0.75; }
</style>
