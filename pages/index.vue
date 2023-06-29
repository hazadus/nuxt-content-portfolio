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
  <Title>
    {{ pageTitle }} | Hazadus.ru
  </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <section class="mt-8">
    <h2 class="text-3xl font-bold">
      Недавние заметки в блоге
    </h2>

    <PostList :limit="3" />
  </section>
</template>