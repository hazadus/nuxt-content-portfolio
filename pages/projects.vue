<script setup lang="ts">
const pageTitle = "Проекты";

const breadcrumbs = [
  {
    title: pageTitle,
    url: null,
  },
];

// Repos I don't want to show in the list:
const excludedRepos = [
  "hazadus",
  "stats-hazadus-ru",
  "TestGame1",
  "test",
  "pySnake",
  "pySryfallDemo",
  "pySkillboxMessenger",
  "aiogram-bot-demo",
];

// Stuff I want to always show on the top of the page:
const pinnedRepos = [
  "nuxt-content-portfolio",
  "drf-nuxt-library",
  "drf-vue-eshop",
  "rust-webserver",
  "rust-newsletter",
  "drf-nuxt-bookmarks",
  "journal",
  "nuxt-trello-board",
  "next-bredit",
];

const { data, error } = await fetchAllRepositoriesInfo();

// All repos excluding thos in `excludedRepos` list
const gitHubRepos = computed(() => {
  if (data.value) {
    // @ts-ignore
    return data.value.viewer.repositories.nodes.filter((repo) => !excludedRepos.includes(repo.name));
  } else {
    return [];
  }
});

// Only "pinned" repos list
const gitHubPinnedRepos = computed(() => {
  // @ts-ignore
  return gitHubRepos.value.filter((repo) => pinnedRepos.includes(repo.name));
});

// All other repos list
const gitHubMiscRepos = computed(() => {
  // @ts-ignore
  return gitHubRepos.value.filter((repo) => !pinnedRepos.includes(repo.name));
});
</script>

<template>
  <Title> {{ pageTitle }} | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Мои личные проекты</h1>
  <p class="text-base text-gray-900 p-2 italic">
    Репозитороии автора на GitHub, в порядке последних коммитов: сверху то, над чем сейчас идёт активная
    работа, либо просто относительно недавно обновлено. Актуальные данные подкачиваются через GitHub API. Цвет
    рамки карточки проекта соответствует цвету языка на GitHub.
  </p>

  <AlertBox
    v-if="error"
    alertType="warning"
    class="mt-4"
  >
    Произошла ошибка! Пожалуйста, обновите страницу. {{ error }}
  </AlertBox>

  <h2
    class="text-3xl font-semi-bold mt-4 mb-4"
    id="favorites"
  >
    Самое любимое
  </h2>
  <GitHubRepoCardList
    v-if="gitHubPinnedRepos.length"
    :repositories="gitHubPinnedRepos"
  />

  <h2
    class="text-3xl font-semi-bold mt-8 mb-4"
    id="misc"
  >
    Остальные репозитории
  </h2>
  <GitHubRepoCardList
    v-if="gitHubMiscRepos.length"
    :repositories="gitHubMiscRepos"
  />
</template>
