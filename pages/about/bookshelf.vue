<script setup lang="ts">
import type { Breadcrumb } from "@/types";

const pageTitle = "Читаю";

useSeoMeta({
  description: "Книги, которые мне интересны.",
  ogTitle: pageTitle,
  ogDescription: "Книги, которые мне интересны.",
  ogUrl: "https://hazadus.ru/books/",
  ogImage: "/images/ogImage.jpg",
  twitterTitle: pageTitle,
  twitterDescription: "Книги, которые мне интересны.",
  twitterCard: "summary",
  twitterImage: "/images/ogImage.jpg",
});

const breadcrumbs: Breadcrumb[] = [
  {
    title: "О себе",
    url: "/about/",
  },
  {
    title: pageTitle,
    url: null,
  },
];

const books = await queryContent("/books").findOne();
</script>

<template>
  <Title> {{ pageTitle }} | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Книжная полка</h1>

  <p class="text-base text-gray-900 p-4">Техническая литература, которую я читаю или хочу прочитать.</p>
  <p class="mt-4">
    Люблю хорошую литературу о разработке:
    <a
      href="http://library.hazadus.ru/lists/3/details/"
      class="underline"
      >читаю</a
    >
    /
    <a
      href="http://library.hazadus.ru/lists/5/details/"
      class="underline"
      >хочу прочитать</a
    >
    /
    <a
      href="http://library.hazadus.ru/lists/2/details/"
      class="underline"
      >недавно прочитал</a
    >.
  </p>
  <pre>{{ books }}</pre>
</template>
