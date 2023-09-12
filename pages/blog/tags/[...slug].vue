<script setup lang="ts">
import { Breadcrumb } from "@/types";

const route = useRoute();
const slug = route.params.slug[0];

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Блог",
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
</script>

<template>
  <Title> Посты с меткой &laquo;{{ slug }}&raquo; | Блог | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Посты с меткой &laquo;{{ slug }}&raquo;</h1>

  <PostList :filterByTag="slug" />
</template>
