<template>
  <article class="card">
    <img v-if="imageSrc" class="img" :src="imageSrc" :alt="title" />
    <h3 class="title">{{ title }}</h3>
    <p v-if="subtitle" class="sub">{{ subtitle }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  imageSrc?: string;
  subtitle?: string;
}>();
</script>

<style scoped>
.card {
  background: var(--c-surface);
  border: 1px solid color-mix(in oklab, var(--c-text) 10%, transparent);
  border-radius: var(--radius);
  overflow: hidden;
}

.img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.title {
  margin: 12px 14px 6px;
  font-size: 18px;
}

.sub {
  margin: 0 14px 14px;
  opacity: 0.75;
}
</style>
