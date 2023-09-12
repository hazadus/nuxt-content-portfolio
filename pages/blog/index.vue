<script setup lang="ts">
import { Breadcrumb } from "@/types";

const pageTitle = "Блог";

const breadcrumbs: Breadcrumb[] = [
  {
    title: pageTitle,
    url: null,
  },
];
</script>

<template>
  <Title> {{ pageTitle }} | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <section>
    <h1 class="text-4xl font-bold mt-8">
      {{ pageTitle }}
    </h1>
    <p class="text-base text-gray-900 p-4 italic">
      В этом блоге публикуются короткие заметки, касающиеся различных узких вопросов разработки, в формате
      а-ля "today I learned". Темы выбираются из тех, что не освещены в большом количестве доступных
      туториалов и постов. Автор не претендует на какие-то глубокие познания и эксклюзивные факты, однако все
      представленные примеры - вполне рабочие, а также снабжены ссылками на более подробные материалы (в
      основном, конечно же, англоязычные).
    </p>

    <PostList />
  </section>
</template>
