<script setup lang="ts">
import { useFormatDateTime } from "@/utils";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col p-8 border-4 my-0 rounded-lg hover:bg-gray-50"
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

    <div v-if="project.homepageUrl" class="mb-2">
      <Icon name="akar-icons:link-chain" class="mr-1" />
      <a :href="project.homepageUrl" class="hover:underline">{{ project.homepageUrl }}</a>
    </div>

    <div v-if="project.repositoryTopics.nodes.length">
      <span v-for="topic in project.repositoryTopics.nodes" :key="`topic-${topic.topic.name}`"
        class="inline-block text-sm bg-indigo-200 rounded px-2 mr-2 mb-2">
        {{ topic.topic.name }}
      </span>
    </div>

    <div class="text-gray-500 text-sm mt-0 grow-0">
      Обновлено: {{ useFormatDateTime(project.pushedAt) }}
    </div>
  </div>
</template>