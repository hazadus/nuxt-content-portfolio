<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

// Map `nuxt-icon` icon names to GitHub topics/language names
const topicIcons = new Map();
topicIcons.set("vue", "logos:vue");
topicIcons.set("vue3", "logos:vue");
topicIcons.set("vueuse", "logos:vueuse");
topicIcons.set("nuxt", "logos:nuxt-icon");
topicIcons.set("nuxt3", "logos:nuxt-icon");
topicIcons.set("nextjs13", "logos:nextjs-icon");
topicIcons.set("recoil", "logos:recoil-icon");
topicIcons.set("vercel-deployment", "logos:vercel-icon");
topicIcons.set("firebase", "logos:firebase");
topicIcons.set("node", "logos:nodejs-icon");
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
topicIcons.set("html", "logos:html-5");
topicIcons.set("html5", "logos:html-5");
topicIcons.set("css3", "logos:css-3");
topicIcons.set("javascript", "logos:javascript");
topicIcons.set("typescript", "logos:typescript-icon");
topicIcons.set("bulma", "logos:bulma");
topicIcons.set("tailwindcss", "logos:tailwindcss-icon");
topicIcons.set("bootstrap5", "logos:bootstrap");
topicIcons.set("docker", "logos:docker-icon");
topicIcons.set("graphql", "logos:graphql");
</script>

<template>
  <Icon
    v-if="topicIcons.has(title.toLowerCase())"
    :name="topicIcons.get(title.toLowerCase())"
  />
</template>
