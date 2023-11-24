<script setup lang="ts">
import { Breadcrumb, MastoToot } from "@/types";

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Микроблог",
    url: null,
  },
];

const toots: Ref<MastoToot[]> = ref([]);

async function fetchAllToots() {
  const endPoint = `https://fosstodon.org/api/v1/accounts/109570713393752841/statuses`;

  // Reference: https://nuxt.com/docs/api/utils/dollarfetch
  return await $fetch<MastoToot[]>(endPoint, {
    method: "GET",
  });
}

onMounted(async () => {
  toots.value = await fetchAllToots();
});
</script>

<template>
  <Title> Микроблог | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Микроблог <Icon name="logos:mastodon-icon" /></h1>

  <p class="text-base text-gray-900 p-4">
    Ниже 20 последних статусов в Мастодоне... Ссылка на годную статью про Мастодон... Инвайт на подписку.
  </p>

  <section
    v-if="toots.length"
    class="mb-8"
  >
    <TootCard
      v-for="toot in toots"
      :toot="toot"
      :key="toot.id"
    />
  </section>
  <section
    v-else
    class="w-100 h-96 flex justify-center items-center"
  >
    <SpinnerIndicator />
  </section>
</template>
