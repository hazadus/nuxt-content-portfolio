<script setup lang="ts">
import { Breadcrumb } from "@/types";

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({ _path: path }).findOne());

const viewCount = await getViewCount(path);
const pageTitle = data.value?.title + " | Посты | Hazadus.ru";

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Посты",
    url: "/blog/",
  },
  {
    title: data.value?.title as string,
    url: null,
  },
];

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: data.value?.description,
  ogDescription: data.value?.description,
  ogImage: "https://hazadus.ru/images/blog/" + data.value?.cover,
});
</script>

<template>
  <template v-if="data">
    <Title>
      {{ pageTitle }}
    </Title>

    <Breadcrumbs :breadcrumbs="breadcrumbs" />

    <ContentRenderer
      :value="data"
      class="prose my-10 mx-auto max-w-4xl"
    />

    <div class="pt-6 mx-auto max-w-4xl border-t">
      Автор:
      <NuxtLink
        to="/about/#contact"
        class="hover:underline"
      >
        Александр Голдовский
      </NuxtLink>
      &middot; Опубликовано: {{ formatDate(data.date) }} &middot; Просмотров:
      {{ viewCount }}
    </div>

    <div class="my-8 mx-auto max-w-4xl">
      <Tag
        v-for="tag in data.tags"
        :key="`tag-${tag}`"
        :title="tag"
      />
    </div>
  </template>
</template>
