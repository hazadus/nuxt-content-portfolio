<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-col p-8 border-4 my-0 rounded-lg hover:bg-gray-50"
    :style="project.primaryLanguage ? `border-color: ${project.primaryLanguage.color};` : ''"
  >
    <div>
      <a :href="project.url">
        <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">
          <TechIcon :title="project.primaryLanguage.name" />
          {{ project.name }}
        </h2>
      </a>
    </div>

    <div class="flex grow">
      <p
        v-if="project.description"
        class="mb-8"
      >
        {{ project.description }}
      </p>
    </div>

    <div
      v-if="project.homepageUrl"
      class="mb-3"
    >
      <Icon
        name="akar-icons:link-chain"
        class="mr-1"
      />
      <a
        :href="project.homepageUrl"
        class="hover:underline"
        >{{ project.homepageUrl }}</a
      >
    </div>

    <div
      v-if="project.repositoryTopics.nodes.length"
      class="mb-2"
    >
      <TechTag
        v-for="topic in project.repositoryTopics.nodes"
        :key="`topic-${topic.topic.name}`"
        :title="topic.topic.name"
      />
    </div>

    <div class="text-gray-500 text-sm mt-0 grow-0">Обновлено: {{ formatDateTime(project.pushedAt) }}</div>
  </div>
</template>
