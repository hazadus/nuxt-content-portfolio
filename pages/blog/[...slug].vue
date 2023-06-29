<script setup lang="ts">
import { useFormatDate } from "@/utils";
import { Breadcrumb } from "@/types";

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () =>
  queryContent()
    .where({ _path: path })
    .findOne()
);

const pageTitle = data.value?.title + " | Блог | Hazadus.ru";

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Блог",
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
  ogImage: 'https://hazadus.ru/images/blog/' + data.value?.cover,
});
</script>

<template>
  <template v-if="data">
    <Title>
      {{ pageTitle }}
    </Title>

    <Breadcrumbs :breadcrumbs="breadcrumbs" />

    <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-4xl" />

    <div class="my-8 mx-auto max-w-4xl">
      Опубликовано: {{ useFormatDate(data.date) }}
    </div>
    <div class="my-8 mx-auto max-w-4xl">
      <Tag :title="tag" v-for="tag in data.tags" :key="`tag-${tag}`" />
    </div>
  </template>
</template>