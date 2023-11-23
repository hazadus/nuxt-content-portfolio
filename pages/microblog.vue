<script setup lang="ts">
import { Breadcrumb, MastoToot } from "@/types";
import TootContent from "~/components/TootContent.vue";

async function fetchAllToots() {
  const endPoint = `https://fosstodon.org/api/v1/accounts/109570713393752841/statuses`;

  // Reference: https://nuxt.com/docs/api/utils/dollarfetch
  return await $fetch<MastoToot[]>(endPoint, {
    method: "GET",
  });
}

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Микроблог",
    url: null,
  },
];

const toots: Ref<MastoToot[]> = ref([]);

onMounted(async () => {
  toots.value = await fetchAllToots();
});
</script>

<template>
  <Title> Микроблог | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Микроблог</h1>

  <p class="text-base text-gray-900 p-4">
    Ниже 20 последних статусов в Мастодоне... Ссылка на годную статью про Мастодон... Инвайт на подписку.
  </p>

  <section
    v-if="toots.length"
    class="max-w-[580px] mb-8"
  >
    <div
      v-for="toot in toots"
      :key="toot.id"
      class="mb-1 px-4 py-4 rounded-lg shadow-md"
    >
      <TootContent
        v-if="toot.content"
        :toot="toot"
      />

      <template v-if="toot.reblog">
        <div class="mb-4 text-gray-400">
          <Icon
            name="mdi:tumblr-reblog"
            class="mr-1"
          />
          <a
            :href="toot.account.url"
            class="underline"
            >{{ toot.account.display_name }}</a
          >
          продвинул:
        </div>

        <TootContent :toot="toot.reblog" />
      </template>
    </div>
  </section>
</template>
