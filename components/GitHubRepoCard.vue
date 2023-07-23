<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
});

// Map `nuxt-icon` icon names to repo primary language names
const languageIcons = new Map();
languageIcons.set("Vue", "logos:vue");
languageIcons.set("Python", "logos:python");
languageIcons.set("Rust", "logos:rust");
languageIcons.set("Go", "logos:go");
languageIcons.set("JavaScript", "logos:javascript");
languageIcons.set("TypeScript", "logos:typescript-icon");
languageIcons.set("C#", "logos:c-sharp");
languageIcons.set("HTML", "logos:html-5");

// Map `nuxt-icon` icon names to GitHub topics
const topicIcons = new Map();
topicIcons.set("vue", "logos:vue");
topicIcons.set("vue3", "logos:vue");
topicIcons.set("vueuse", "logos:vueuse");
topicIcons.set("nuxt", "logos:nuxt-icon");
topicIcons.set("nuxt3", "logos:nuxt-icon");
topicIcons.set("pinia", "logos:pinia");
topicIcons.set("python", "logos:python");
topicIcons.set("django", "logos:django-icon");
topicIcons.set("flask", "logos:flask");
topicIcons.set("rust", "logos:rust");
topicIcons.set("go", "logos:go");
topicIcons.set("redis", "logos:redis");
topicIcons.set("nginx", "logos:nginx");
topicIcons.set("gunicorn", "logos:gunicorn");
topicIcons.set("react", "logos:react");
topicIcons.set("postgres", "logos:postgresql");
topicIcons.set("mongodb", "logos:mongodb-icon");
topicIcons.set("css3", "logos:css-3");
topicIcons.set("html5", "logos:html-5");
topicIcons.set("javascript", "logos:javascript");
topicIcons.set("bulma", "logos:bulma");
topicIcons.set("tailwindcss", "logos:tailwindcss-icon");
topicIcons.set("bootstrap5", "logos:bootstrap");
topicIcons.set("typescript", "logos:typescript-icon");
topicIcons.set("docker", "logos:docker-icon");
topicIcons.set("graphql", "logos:graphql");
</script>

<template>
  <div class="flex flex-col p-8 border-4 my-0 rounded-lg hover:bg-gray-50"
    :style="project.primaryLanguage ? `border-color: ${project.primaryLanguage.color};` : ''">
    <div>
      <a :href="project.url">
        <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">
          <template v-if="project.primaryLanguage">
            <Icon v-if="languageIcons.has(project.primaryLanguage.name)"
              :name="languageIcons.get(project.primaryLanguage.name)" />
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

    <div v-if="project.homepageUrl" class="mb-3">
      <Icon name="akar-icons:link-chain" class="mr-1" />
      <a :href="project.homepageUrl" class="hover:underline">{{ project.homepageUrl }}</a>
    </div>

    <div v-if="project.repositoryTopics.nodes.length" class="mb-2">
      <span v-for="topic in project.repositoryTopics.nodes" :key="`topic-${topic.topic.name}`"
        class="inline-block text-sm bg-indigo-200 rounded px-2 mr-2 mb-2">
        <Icon v-if="topicIcons.has(topic.topic.name)" :name="topicIcons.get(topic.topic.name)" /> {{ topic.topic.name }}
      </span>
    </div>

    <div class="text-gray-500 text-sm mt-0 grow-0">
      Обновлено: {{ formatDateTime(project.pushedAt) }}
    </div>
  </div>
</template>