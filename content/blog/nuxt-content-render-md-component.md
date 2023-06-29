---
title: Компонент для рендеринга Markdown с помощью Nuxt Content
description: Пример компонента Nuxt, который рендерит любую строку, содержащую разметку Markdown, в HTML при помощи модуля Nuxt Content.
published: true
date: 2023-05-03
cover: nuxt-content-render-md-component.jpg
tags:
  - Nuxt
  - Nuxt Content
  - Markdown
---

# Компонент для рендеринга Markdown с помощью Nuxt Content

:::callout
Пример компонента Nuxt, который рендерит любую строку, содержащую разметку Markdown, в HTML при помощи модуля Nuxt Content.
:::

Ниже приведён код компонента Nuxt, который рендерит любую строку, содержащую разметку Markdown, в HTML при помощи модуля **Nuxt Content**.

```vue
<script setup>
// components/MarkdownStringRenderer.vue
import markdownParser from "@nuxt/content/transformers/markdown";

const props = defineProps({
  markdownString: {
    type: String,
    required: true,
  },
});

const record = ref("");

watchEffect(async () => {
  await markdownParser
    .parse("custom.md", props.markdownString)
    .then((md) => (record.value = md));
});
</script>

<template>
  <div class="content">
    <ContentRendererMarkdown :value="record" v-if="record" />
  </div>
</template>
```

Пример использования этого компонента:

```vue
<MarkdownStringRenderer :markdownString="description" />
```

Содержимое компонента будет обновляться реактивно, при каждом изменении значения переменной `description`, что очень удобно, например, для создания превью вводимого текста с разметкой Markdown.

См. также [пример использования](https://github.com/hazadus/drf-nuxt-library/blob/main/frontend/components/MarkdownStringRenderer.vue) в одном из моих проектов.
