<script setup lang="ts">
import type { Breadcrumb } from "@/types";
import { useTootStore } from "~/store/tootStore";

const pageTitle = "Добро пожаловать 👋!";

useSeoMeta({
  description: "Моя домашняя страница.",
  ogTitle: "Hazadus.ru",
  ogDescription: "Моя домашняя страница.",
  ogUrl: "https://hazadus.ru",
  ogImage: "/images/ogImage.jpg",
  twitterTitle: "Hazadus.ru",
  twitterDescription: "Моя домашняя страница.",
  twitterCard: "summary",
  twitterImage: "/images/ogImage.jpg",
});

const breadcrumbs: Breadcrumb[] = [
  {
    title: pageTitle,
    url: null,
  },
];

// Initialized in `app.vue`.
const tootStore = useTootStore();
</script>

<template>
  <Title> Дом-страница Александра Голдовского </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <section class="mt-8">
    <h2 class="text-3xl font-bold mb-2">Проекты в работе</h2>

    <!-- RSS Reader -->
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src="/images/rss-reader.png"
          alt="RSS Reader screenshot"
        />
      </div>
      <div class="pl-4 mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
          RSS Reader
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl">
          Сейчас в разработке – онлайн читалка RSS лент. Подписывайтесь на обновление материалов любимых
          сайтов по RSS, и будьте в курсе последних новостей! В ленте будут только интересные вам материалы,
          без навязанные алгоритмами рекламных постов.
        </p>

        <NuxtLink
          to="/blog/new-project-rss-reader"
          class="inline-flex items-center justify-center px-5 py-3 mr-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Подробнее
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </NuxtLink>

        <a
          href="http://rss.hazadus.ru/"
          class="inline-flex items-center justify-center px-5 py-3 mr-8 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Открыть сайт
        </a>
        <NuxtLink
          to="/projects/"
          class="inline-flex items-center justify-center px-5 py-3 mt-2 md:mt-0 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Все проекты
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="my-8">
    <h2 class="text-3xl font-bold">Недавние посты</h2>

    <PostList :limit="3" />

    <div class="text-base text-right">
      <NuxtLink
        href="/blog/"
        class="italic hover:underline"
      >
        Смотреть все посты...
      </NuxtLink>
    </div>
  </section>

  <section
    class="my-8"
    v-if="tootStore.toots.length"
  >
    <h2 class="text-3xl font-bold mb-8">Новое в микроблоге <Icon name="logos:mastodon-icon" /></h2>

    <div class="md:columns-2">
      <TootCard
        v-for="toot in tootStore.toots.slice(0, 5)"
        :key="toot.id"
        :toot="toot"
        class="break-inside-avoid-column"
      />
    </div>

    <div class="text-base text-right mt-8">
      <NuxtLink
        href="/microblog/"
        class="italic hover:underline"
      >
        Смотреть ленту...
      </NuxtLink>
    </div>
  </section>
</template>
