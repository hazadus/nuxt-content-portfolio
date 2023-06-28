<script setup lang="ts">
import { useFormatDate } from "@/utils";
import { Breadcrumb } from "@/types";

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () =>
  queryContent()
    .where({ _path: path })
    .findOne()
);

const breadcrumbs: Breadcrumb[] = [
  {
    title: "All blog posts",
    url: "/blog/",
  },
  {
    title: data.value?.title ? data.value.title : "Blog post",
    url: null,
  },
];

useSeoMeta({
  title: data.value?.title + " | Blog | Hazadus.ru",
  ogTitle: data.value?.title + " | Blog | Hazadus.ru",
  description: data.value?.description,
  ogDescription: data.value?.description,
  ogImage: 'https://hazadus.ru/images/' + data.value?.cover,
});
</script>

<template>
  <template v-if="data">
    <Title>
      {{ data.title }} | Blog | Hazadus.ru
    </Title>

    <Breadcrumbs :breadcrumbs="breadcrumbs" />

    <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-4xl" />

    <div class="my-8 mx-auto max-w-4xl">
      Published: {{ useFormatDate(data.date) }}
    </div>
    <div class="my-8 mx-auto max-w-4xl">
      <Tag :title="tag" v-for="tag in data.tags" :key="`tag-${tag}`" />
    </div>
  </template>
</template>