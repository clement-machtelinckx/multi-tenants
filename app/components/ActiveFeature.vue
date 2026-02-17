<template>
  <slot v-if="enabled" />
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>();
const tenant = useTenant();
const enabled = computed(() => tenant.value?.features?.[props.name] === true);
</script>
