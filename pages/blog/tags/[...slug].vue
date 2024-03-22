<script setup lang="ts">
import type { Breadcrumb } from "@/types";

const route = useRoute();
const slug = route.params.slug[0];

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Посты",
    url: "/blog/",
  },
  {
    title: "Все теги",
    url: "/blog/tags/",
  },
  {
    title: `Посты с меткой "${slug}"`,
    url: null,
  },
];

const pageTitle = `Посты с меткой "${slug}" | Посты | Александр Голдовский`;
const pageDescription = `Все посты на сайте с меткой "${slug}".`;

useSeoMeta({
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: "https://hazadus.ru/blog/tags/" + slug,
  ogImage: "/images/ogImage.jpg",
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterCard: "summary",
  twitterImage: "/images/ogImage.jpg",
});
</script>

<template>
  <Title> Посты с меткой &laquo;{{ slug }}&raquo; | Посты | Александр Голдовский </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Посты с меткой &laquo;{{ slug }}&raquo;</h1>

  <PostList :filterByTag="slug" />
</template>
