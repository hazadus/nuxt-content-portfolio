<script setup lang="ts">
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
});
</script>

<template>
  <template v-if="data">
    <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-4xl" />

    <div class="my-8 mx-auto max-w-4xl">
      <Tag :title="tag" v-for="tag in data.tags" :key="`tag-${tag}`" />
    </div>
  </template>
</template>