<script setup lang="ts">
import { Breadcrumb } from "@/types";

interface MastoTag {
  url: string;
  title: string;
}

interface MastoLinkCard {
  url: string;
  title: string;
  description: string;
  provider_name: string;
  image: string; // image URL
}

interface MastoAccount {
  display_name: string;
  url: string;
  avatar: string;
  followers_count: number;
  following_count: number;
  statuses_count: number;
}

interface MastoToot {
  id: string;
  created_at: Date;
  url: string;
  replies_count: number;
  reblogs_count: number;
  favourites_count: number;
  content: string; // contains HTML!
  reblog: MastoToot | null;
  account: MastoAccount;
  tags: MastoTag[];
  card: MastoLinkCard | null;
}

async function fetchApi() {
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
  toots.value = await fetchApi();
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
      <template v-if="toot.content">
        <div class="flex mb-2 w-100">
          <img
            :src="toot.account.avatar"
            class="w-12 rounded-md mr-2"
          />
          <div class="grow">
            <a
              :href="toot.account.url"
              class="font-semibold"
              >{{ toot.account.display_name }}</a
            >
          </div>
          <div>Time Ago</div>
        </div>

        <div
          v-html="toot.content"
          class="prose mb-2"
        ></div>

        <div
          v-if="toot.card"
          class="flex flex-col border border-gray-300 rounded-lg"
        >
          <img
            :src="toot.card.image"
            class="mb-2 rounded-tl-lg rounded-tr-lg"
          />
          <div
            v-if="toot.card.provider_name"
            class="mb-1 px-2 text-gray-400"
          >
            {{ toot.card.provider_name }}
          </div>
          <div class="text-xl font-semibold mb-2 px-2 underline">
            <a
              :href="toot.card.url"
              target="_blank"
              >{{ toot.card.title }}</a
            >
          </div>
          <div class="px-2 mb-2 text-sm text-gray-400">{{ toot.card.description }}</div>
        </div>
      </template>

      <template v-if="toot.reblog">
        <div class="mb-2 text-gray-400">
          <Icon
            name="mdi:tumblr-reblog"
            class="mr-1"
          />
          <a
            :href="toot.account.url"
            class="underline"
            >{{ toot.account.display_name }}</a
          >
          boosted:
        </div>
        <div class="mb-1">{{ toot.reblog.account.display_name }} wrote:</div>
        <div
          v-html="toot.reblog.content"
          class="prose"
        ></div>
      </template>
    </div>
  </section>
</template>
