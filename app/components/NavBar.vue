<template>
  <header class="nav">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/tenant">Accueil tenant</NuxtLink>
  </header>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid #e5e5e5;
}
a {
  text-decoration: none;
  color: inherit;
  opacity: 0.85;
}
a.router-link-active {
  opacity: 1;
  font-weight: 700;
}
</style>
