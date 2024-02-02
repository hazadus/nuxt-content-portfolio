<script setup lang="ts">
import type { Breadcrumb } from "@/types";

const pageTitle = "Книги";

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
    title: pageTitle,
    url: null,
  },
];
</script>

<template>
  <Title> {{ pageTitle }} | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Книжная полка</h1>

  <p class="text-base text-gray-900 p-4">Книги, которые я читаю или хочу прочитать.</p>
</template>
