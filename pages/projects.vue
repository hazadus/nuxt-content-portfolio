<script setup>
const pageTitle = "Проекты";

const breadcrumbs = [
  {
    title: pageTitle,
    url: null,
  },
];

// Repos I don't want to show in the list:
const excludedRepos = [
  "hazadus", "stats-hazadus-ru", "TestGame1", "test", "pySnake", "pySryfallDemo",
  "pySkillboxMessenger", "aiogram-bot-demo",
];

// Stuff I want to always show on the top of the page:
const pinnedRepos = [
  "nuxt-content-portfolio", "drf-nuxt-library", "drf-vue-eshop", "rust-webserver", "rust-newsletter",
  "drf-nuxt-bookmarks", "journal", "object-snake", "js-color-lines",
];

const query = gql`
{
  viewer {
    repositories(first:50, privacy:PUBLIC, orderBy: {field:PUSHED_AT, direction:DESC})  {
      totalCount
      nodes {
        id
        name
        createdAt
        updatedAt
        pushedAt
        description
        primaryLanguage {
          name
          color
        }
        repositoryTopics(first:100) {
          nodes {
            topic {
              name
            }
          }
        }
        url
        homepageUrl
        forks {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}`;

const { data, error } = await useAsyncQuery(query);

// All repos excluding thos in `excludedRepos` list
const gitHubRepos = computed(() => {
  if (data.value) {
    return data.value.viewer.repositories.nodes.filter((repo) => !excludedRepos.includes(repo.name));
  } else {
    return [];
  }
});

// Only "pinned" repos list
const gitHubPinnedRepos = computed(() => {
  return gitHubRepos.value.filter((repo) => pinnedRepos.includes(repo.name));
});

// All other repos list
const gitHubMiscRepos = computed(() => {
  return gitHubRepos.value.filter((repo) => !pinnedRepos.includes(repo.name));
});
</script>

<template>
  <Title>
    {{ pageTitle }} | Hazadus.ru
  </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">
    Мои личные проекты
  </h1>
  <p class="text-base text-gray-900 p-2 italic">
    Репозитороии автора на GitHub, в порядке последних коммитов: сверху то, над чем сейчас идёт активная работа, либо
    просто относительно недавно обновлено. Актуальные данные подкачиваются через GitHub API.
    Цвет рамки карточки проекта соответствует цвету языка на GitHub.
  </p>

  <pre v-if="error">
    {{ error }}
  </pre>

  <h2 class="text-3xl font-semi-bold mt-4">
    Самое любимое
  </h2>
  <section v-if="gitHubPinnedRepos.length" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
    <GitHubRepoCard v-for="project in gitHubPinnedRepos" :key="`project-fav-${project.id}`" :project="project" />
  </section>

  <h2 class="text-3xl font-semi-bold mt-8">
    Остальные репозитории
  </h2>
  <section v-if="gitHubMiscRepos.length" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
    <GitHubRepoCard v-for="project in gitHubMiscRepos" :key="`project-misc-${project.id}`" :project="project" />
  </section>
</template>