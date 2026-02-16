<template>
  <span style="display:none" />
</template>

<script setup lang="ts">
const tenant = useTenant();

const cssText = computed(() => {
  const vars = tenant.value?.theme?.cssVars ?? {};
  const lines = Object.entries(vars).map(([k, v]) => `--${k}: ${v};`);
  return `:root {\n${lines.join("\n")}\n}`;
});

useHead(() => ({
  style: [
    {
      key: "tenant-theme",
      children: cssText.value
    }
  ]
}));
</script>
