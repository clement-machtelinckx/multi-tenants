<template>
  <style>
    :root {
      {{ cssText }}
    }
  </style>
</template>

<script setup lang="ts">
const theme = computed(() => {
  // Step 2: pour l’instant on simule tenant via ?t=
  const route = useRoute();
  const t = route.query.t === "b" ? "b" : "a";

  if (t === "a") {
    return {
      "c-bg": "#0b1020",
      "c-surface": "#111a33",
      "c-text": "#e7ecff",
      "c-primary": "#7c5cff",
      "c-on-primary": "#0b1020"
    };
  }

  return {
    "c-bg": "#0c1410",
    "c-surface": "#132016",
    "c-text": "#ecfff2",
    "c-primary": "#2bd576",
    "c-on-primary": "#06210f"
  };
});

const cssText = computed(() => {
  return Object.entries(theme.value)
    .map(([k, v]) => `--${k}: ${v};`)
    .join("\n");
});
</script>
