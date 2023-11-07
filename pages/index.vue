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
    <h2 class="text-3xl font-bold mb-8">Проекты в работе</h2>

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
