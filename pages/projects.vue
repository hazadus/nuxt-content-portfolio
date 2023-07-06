<script setup>
import { useFormatDateTime } from "@/utils";

const pageTitle = "Проекты";

const breadcrumbs = [
  {
    title: pageTitle,
    url: null,
  },
];

// Repos I don't want to show in the list:
const excludedRepos = [
  "hazadus", "stats-hazadus-ru", "TestGame1", "test",
];

const query = gql`
{
  viewer {
    repositories(first:50, privacy:PUBLIC, orderBy: {field:UPDATED_AT, direction:DESC})  {
      totalCount
      nodes {
        id
        name
        createdAt
        updatedAt
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

const gitHubRepos = computed(() => {
  if (data.value) {
    return data.value.viewer.repositories.nodes.filter((repo) => !excludedRepos.includes(repo.name));
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

  <h1 class="text-4xl font-bold mt-8">
    Мои личные проекты
  </h1>
  <p class="text-base text-gray-900 p-2 italic">
    Репозитороии автора на GitHub, в порядке последних обновлений: сверху то, над чем сейчас идёт активная работа.
    Цвет карточки проекта соответствует цвету языка на GitHub.
  </p>

  <pre v-if="error">
    {{ error }}
  </pre>

  <section v-if="gitHubRepos.length" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
    <div v-for="project in gitHubRepos" :key="project.id"
      class="flex flex-col p-8 border-4 my-0 rounded-lg hover:bg-gray-50"
      :style="project.primaryLanguage ? `border-color: ${project.primaryLanguage.color};` : ''">
      <div>
        <a :href="project.url">
          <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">
            <template v-if="project.primaryLanguage">
              <Icon v-if="project.primaryLanguage.name == 'Vue'" name="logos:vue" />
              <Icon v-if="project.primaryLanguage.name == 'Python'" name="logos:python" />
              <Icon v-if="project.primaryLanguage.name == 'Rust'" name="logos:rust" />
              <Icon v-if="project.primaryLanguage.name == 'Go'" name="logos:go" />
              <Icon v-if="project.primaryLanguage.name == 'JavaScript'" name="logos:javascript" />
              <Icon v-if="project.primaryLanguage.name == 'HTML'" name="logos:html-5" />
              <Icon v-if="project.primaryLanguage.name == 'C#'" name="logos:c-sharp" />
              <Icon v-if="project.primaryLanguage.name == 'TypeScript'" name="logos:typescript-icon" />
            </template>
            {{ project.name }}
          </h2>
        </a>
      </div>

      <div class="flex grow">
        <p v-if="project.description" class="mb-8">
          {{ project.description }}
        </p>
      </div>

      <div v-if="project.repositoryTopics.nodes.length">
        <span v-for="topic in project.repositoryTopics.nodes" :key="`topic-${topic.topic.name}`"
          class="inline-block text-sm bg-indigo-200 rounded px-2 mr-2 mb-2">
          {{ topic.topic.name }}
        </span>
      </div>

      <div class="text-gray-500 text-sm mt-0 grow-0">
        Обновлено: {{ useFormatDateTime(project.updatedAt) }}
      </div>
    </div>
  </section>
</template>