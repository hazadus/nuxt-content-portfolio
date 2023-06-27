<script setup>
import { useFormatDateTime } from "@/utils";

const breadcrumbs = [
  {
    title: "Projects",
    url: null,
  },
];

const query = gql`
{
  viewer {
    repositories(first:12, orderBy: {field:UPDATED_AT, direction:DESC})  {
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
</script>

<template>
  <Title>
    Projects | Hazadus.ru
  </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-5xl font-bold mt-10">
    My personal projects
  </h1>
  <p class="text-base text-gray-900 p-2 italic">
    Проекты автора на GitHub, в порядке последних обновлений: сверху то, над чем сейчас идёт активная работа.
  </p>

  <pre v-if="error">
      {{ error }}
    </pre>

  <section v-if="data" class="grid grid-cols-2 gap-4 mb-4">
    <div v-for="project in data.viewer.repositories.nodes" :key="project.id"
      class="p-8 border-4 my-0 rounded-lg hover:bg-gray-50">
      <a :href="project.url">
        <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">
          {{ project.name }}
        </h2>
      </a>
      <p v-if="project.description" class="mb-8">
        {{ project.description }}
      </p>

      <template v-if="project.primaryLanguage">
        <Icon name="streamline:programming-script-1-language-programming-code" class="mr-1" />
        <span :style="`background-color: ${project.primaryLanguage.color};`" class="rounded px-2 py-1 mr-2">
          {{ project.primaryLanguage.name }}
        </span>
      </template>

      <template v-if="project.repositoryTopics.nodes.length">
        <Icon name="mdi:tag" class="mr-1" />
        <span v-for="topic in project.repositoryTopics.nodes" :key="`topic-${topic.topic.name}`"
          class="inline-block bg-indigo-200 rounded px-2 mr-2 mb-1">
          {{ topic.topic.name }}
        </span>
      </template>

      <p class="text-gray-500 text-sm mt-4">
        Last updated: {{ useFormatDateTime(project.updatedAt) }}
      </p>
    </div>
  </section>
</template>