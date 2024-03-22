<script setup lang="ts">
const pageTitle = "Репо";

useSeoMeta({
  description: "Каталог моих репо на GitHub.",
  ogTitle: pageTitle,
  ogDescription: "Каталог моих репо на GitHub.",
  ogUrl: "https://hazadus.ru/repos/",
  ogImage: "/images/ogImage.jpg",
  twitterTitle: pageTitle,
  twitterDescription: "Каталог моих репо на GitHub.",
  twitterCard: "summary",
  twitterImage: "/images/ogImage.jpg",
});

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
  "rusty-llama",
  "flask-demo",
  "pyHzdsBigBrotherBot",
  "react-dig-ocean-tutorial",
  "react-to-do-list",
  "react-func-comp-tutorial",
  "react-farm-fcc",
  "fastapi-farm-fcc",
  "django-c3-pages",
  "django-c4-msgboard",
  "django-c5-blog",
  "django-website",
  "react-ts-todo-fcc",
  "django-eshop",
  "js-mp3-player",
];

// Stuff I want to always show on the top of the page:
const pinnedRepos = [
  "nuxt-content-portfolio",
  "drf-nuxt-library",
  "drf-nuxt-bookmarks",
  "journal",
  "nuxt-trello-board",
  "django-rss-reader",
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
  <Title> {{ pageTitle }} | Александр Голдовский </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Репозитории</h1>
  <p class="text-base text-gray-900 p-2">
    Тут собраны мои репо на GitHub, с указанием используемых технологий: &laquo;Проекты&raquo; – более крупные
    и завершенные приложения, &laquo;Всякая всячина&raquo; – небольшие разработки, учебные проекты и
    эксперименты. Многие приложения задеплоены, для них приведены ссылки на соответствующие сайты.
  </p>
  <p class="text-base text-gray-900 p-2">
    Репо идут в порядке последних коммитов: сверху то, над чем сейчас идёт активная работа, либо просто
    относительно недавно обновлено.
  </p>
  <p class="text-base text-gray-900 p-2">
    Актуальные данные подкачиваются через GitHub API. Цвет рамки карточки проекта соответствует цвету языка,
    используемому на GitHub.
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
    id="projects"
  >
    Проекты
  </h2>
  <GitHubRepoCardList
    v-if="gitHubPinnedRepos.length"
    :repositories="gitHubPinnedRepos"
  />

  <h2
    class="text-3xl font-semi-bold mt-16 mb-4"
    id="misc"
  >
    Всякая всячина
  </h2>
  <GitHubRepoCardList
    v-if="gitHubMiscRepos.length"
    :repositories="gitHubMiscRepos"
  />
</template>
