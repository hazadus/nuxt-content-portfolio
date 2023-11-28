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
    <p class="text-base text-gray-900 p-4">
      Здесь я размещаю небольшие заметки о своих проектах, а также касающиеся различных узких вопросов
      разработки, в формате а-ля "today I learned". Темы выбираются из тех, что не освещены в большом
      количестве доступных туториалов и постов.
    </p>

    <PostList />
  </section>
</template>
