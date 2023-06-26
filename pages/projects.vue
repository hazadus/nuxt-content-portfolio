<script setup>
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

  <h1 class="text-5xl font-bold mt-10">
    My personal projects
  </h1>
  <p class="text-base text-gray-900 p-2 italic">
    Stuff written by me.
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
      <p v-if="project.description" class="mb-2">
        {{ project.description }}
      </p>
      <p class="text-gray-500 text-sm">
        Last updated: {{ project.updatedAt }}
      </p>
    </div>
  </section>
</template>