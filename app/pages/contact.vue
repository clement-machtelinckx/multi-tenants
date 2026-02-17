<template>
  <section class="card">
    <h1>Page Contact</h1>

    <ActiveFeature name="randomCard">
        <RandomCard title="Contact" subtitle="Nous contacter" imageSrc="/cat.jpg" />
    </ActiveFeature>


    <div v-if="contact" class="infos">
      <p><b>Email:</b> {{ contact.email }}</p>
      <p v-if="contact.phone"><b>Téléphone:</b> {{ contact.phone }}</p>

      <p v-if="fullAddress"><b>Adresse:</b> {{ fullAddress }}</p>

      <div v-if="contact.social" class="social">
        <a v-if="contact.social.twitter" :href="contact.social.twitter" target="_blank" rel="noreferrer">Twitter</a>
        <a v-if="contact.social.facebook" :href="contact.social.facebook" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </div>

    <p v-else class="muted">Pas d’infos contact pour ce tenant.</p>
  </section>
</template>

<script setup lang="ts">
const tenant = useTenant();

const contact = computed(() => tenant.value?.config?.contact);

const fullAddress = computed(() => {
  const c = contact.value;
  if (!c) return "";
  const parts = [c.address, c.addressCp, c.addressCity, c.addressCountry].filter(Boolean);
  return parts.join(", ");
});
</script>

<style scoped>
.card {
  background: var(--c-surface);
  border: 1px solid color-mix(in oklab, var(--c-text) 10%, transparent);
  border-radius: var(--radius);
  padding: 18px;
}
.infos p { margin: 6px 0; }
.social { display: flex; gap: 10px; margin-top: 10px; }
.social a { color: var(--c-primary); text-decoration: none; font-weight: 700; }
.muted { opacity: 0.75; }
</style>
