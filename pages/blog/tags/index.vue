<script setup lang="ts">
import type { Breadcrumb, BlogPost } from "@/types";

useSeoMeta({
  description: "Все теги к постам.",
  ogTitle: "Все теги | Посты | Александр Голдовский",
  ogDescription: "Все теги к постам.",
  ogUrl: "https://hazadus.ru/blog/tags/",
  ogImage: "/images/ogImage.jpg",
  twitterTitle: "Все теги | Посты | Александр Голдовский",
  twitterDescription: "Все теги к постам.",
  twitterCard: "summary",
  twitterImage: "/images/ogImage.jpg",
});

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Посты",
    url: "/blog/",
  },
  {
    title: "Все теги",
    url: null,
  },
];

const { data: posts } = await useAsyncData("posts", () => {
  let query = queryContent<BlogPost>("/blog").sort({ date: -1 }).where({ published: true });

  return query.find();
});

const tags: string[] = [];

posts.value?.forEach((post) => {
  post.tags.forEach((tag) => {
    if (!tags.includes(tag)) tags.push(tag);
  });
});
</script>

<template>
  <Title> Все теги | Посты | Александр Голдовский </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8 mb-8">Все теги</h1>

  <section class="min-h-96">
    <Tag
      v-for="(tag, i) in tags"
      :key="`tag-id-${i}`"
      :title="tag"
    />
  </section>
</template>
