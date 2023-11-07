<script setup lang="ts">
import { Breadcrumb } from "@/types";

const pageTitle = "Приветствую на Hazadus.ru!";

const breadcrumbs: Breadcrumb[] = [
  {
    title: pageTitle,
    url: null,
  },
];
</script>

<template>
  <Title> {{ pageTitle }} | Hazadus.ru </Title>

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
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Открыть сайт
        </a>
      </div>
    </div>

    <div class="text-base text-right">
      <NuxtLink
        to="/projects/"
        class="italic hover:underline"
      >
        Смотреть все проекты...
      </NuxtLink>
    </div>
  </section>

  <section class="mt-8">
    <h2 class="text-3xl font-bold">Недавние посты</h2>

    <PostList :limit="3" />

    <div class="text-base text-right mb-8">
      <NuxtLink
        href="/blog/"
        class="italic hover:underline"
      >
        Смотреть все посты...
      </NuxtLink>
    </div>
  </section>
</template>
