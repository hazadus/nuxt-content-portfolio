<script setup lang="ts">
import type { Breadcrumb } from "@/types";

const pageTitle = "Посты";

useSeoMeta({
  description: "Все мои посты.",
  ogTitle: pageTitle,
  ogDescription: "Все мои посты.",
  ogUrl: "https://hazadus.ru/blog/",
  ogImage: "/images/ogImage.jpg",
  twitterTitle: pageTitle,
  twitterDescription: "Все мои посты.",
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

  <section>
    <h1 class="text-4xl font-bold mt-8">
      {{ pageTitle }}
    </h1>

    <PostList />
  </section>
</template>
