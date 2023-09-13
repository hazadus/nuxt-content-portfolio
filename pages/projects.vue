<script setup lang="ts">
const pageTitle = "Проекты";

const breadcrumbs = [
  {
    title: pageTitle,
    url: null,
  },
];
</script>

<template>
  <Title> {{ pageTitle }} | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Личные проекты</h1>
  <p class="text-base text-gray-900 p-2 italic">Подробная информация о моих проектах.</p>
  <p>🚧 Under construction! 🚧</p>
</template>
