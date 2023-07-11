<script setup lang="ts">
import { getAllRepositoriesInfo } from "@/useGitHubApi";
import { Breadcrumb } from "@/types";

const pageTitle = "Приветствую на Hazadus.ru!";

const breadcrumbs: Breadcrumb[] = [
  {
    title: pageTitle,
    url: null,
  },
];

const { data, error } = await getAllRepositoriesInfo();

// Return two repos with latest pushes.
const latestGitHubRepos = computed(() => {
  if (data.value) {
    // @ts-ignore
    return data.value.viewer.repositories.nodes.slice(0, 2);
  } else {
    return [];
  }
});
</script>

<template>
  <Title>
    {{ pageTitle }} | Hazadus.ru
  </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <section class="mt-8">
    <h2 class="text-3xl font-bold mb-8">
      Проекты в работе
    </h2>

    <Alert v-if="error" class="mt-4">
      Произошла ошибка! Пожалуйста, обновите страницу. {{ error }}
    </Alert>

    <GitHubRepoCardList v-if="latestGitHubRepos.length" :repositories="latestGitHubRepos" />

    <div class="text-base text-right">
      <a href="/projects/" class="italic hover:underline">Смотреть все проекты...</a>
    </div>
  </section>

  <section class="mt-8">
    <h2 class="text-3xl font-bold">
      Недавние заметки в блоге
    </h2>

    <PostList :limit="3" />

    <div class="text-base text-right mb-8">
      <a href="/blog/" class="italic hover:underline">Смотреть все посты...</a>
    </div>
  </section>
</template>