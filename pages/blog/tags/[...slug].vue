<script setup lang="ts">
import { Breadcrumb } from "@/types";

const route = useRoute();
const slug = route.params.slug[0]

const breadcrumbs: Breadcrumb[] = [
  {
    title: "All blog posts",
    url: "/blog/",
  },
  {
    title: `All posts tagged "${slug}"`,
    url: null,
  },
];
</script>

<template>
  <Title>
    Все посты с меткой &laquo;{{ slug }}&raquo; | Blog | Hazadus.ru
  </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-5xl font-bold mt-10">
    Все посты с меткой &laquo;{{ slug }}&raquo;
  </h1>

  <PostList :filterByTag="slug" />
</template>