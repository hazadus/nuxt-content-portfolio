<script setup lang="ts">
import { Breadcrumb } from "@/types";

async function fetchApi() {
  const endPoint = `https://fosstodon.org/api/v1/accounts/109570713393752841/statuses`;

  // Reference: https://nuxt.com/docs/api/utils/dollarfetch
  return await $fetch<[]>(endPoint, {
    method: "GET",
  });
}

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Микроблог",
    url: null,
  },
];

const toots = ref([]);

onMounted(async () => {
  toots.value = await fetchApi();
});
</script>

<template>
  <Title> Микроблог | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8 mb-8">Микроблог</h1>

  <pre v-if="toots.length">
    {{ toots }}
  </pre>
</template>
