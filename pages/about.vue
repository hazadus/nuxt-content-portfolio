<script setup lang="ts">
import { Breadcrumb } from "@/types";

const pageTitle = "О сайте";

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

  <section>
    <h1 class="text-4xl font-bold mt-8">
      Об этом сайте
    </h1>
    <p class="text-base text-gray-900 p-2 italic">
      Как он работает и зачем нужен...
    </p>

    <p class="mt-4">
      Тут будет рассказано, на каких технологиях работает сайт и зачем он нужен.
    </p>
  </section>
</template>