<script setup lang="ts">
import { Breadcrumb } from "@/types";

const pageTitle = "Приветствую на Hazadus.ru!";

const breadcrumbs: Breadcrumb[] = [
  {
    title: pageTitle,
    url: null,
  },
];

const { data, error } = await fetchAllRepositoriesInfo();

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
  <Title> {{ pageTitle }} | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <section class="mt-8">
    <h2 class="text-3xl font-bold mb-8">Репо в работе</h2>

    <AlertBox
      v-if="error"
      alertType="warning"
      class="mt-4"
    >
      Произошла ошибка! Пожалуйста, обновите страницу. {{ error }}
    </AlertBox>

    <GitHubRepoCardList
      v-if="latestGitHubRepos.length"
      :repositories="latestGitHubRepos"
    />

    <div class="text-base text-right">
      <a
        href="/repos/"
        class="italic hover:underline"
      >
        Смотреть все репо...
      </a>
    </div>
  </section>

  <section class="mt-8">
    <h2 class="text-3xl font-bold">Недавние посты</h2>

    <PostList :limit="3" />

    <div class="text-base text-right mb-8">
      <a
        href="/blog/"
        class="italic hover:underline"
      >
        Смотреть все посты...
      </a>
    </div>
  </section>
</template>
