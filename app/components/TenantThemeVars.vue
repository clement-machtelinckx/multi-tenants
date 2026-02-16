<template>
  <span style="display:none" />
</template>

<script setup lang="ts">
const tenant = useTenant();

const vars = computed(() => tenant.value?.theme?.cssVars ?? {});
const tenantId = computed(() => tenant.value?.tenantId ?? "unknown");

function applyInlineVars(v: Record<string, string>) {
  if (!import.meta.client) return;
  const el = document.documentElement; // <html>
  el.setAttribute("data-tenant", tenantId.value);

  for (const [k, val] of Object.entries(v)) {
    el.style.setProperty(`--${k}`, val);
  }
}

onMounted(() => applyInlineVars(vars.value));
watch(vars, (v) => applyInlineVars(v), { deep: true });

// Bonus SSR: on met quand même l’attribut côté SSR (pratique debug + futur)
useHead(() => ({
  htmlAttrs: { "data-tenant": tenantId.value }
}));
</script>
