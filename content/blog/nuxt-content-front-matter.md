---
title: Использование Front-matter в Nuxt Content
description: Краткий пример того, как можно использовать метаданные в формате "Front matter" в Markdown-файлах в Nuxt Content.
published: true
date: 2022-06-26
cover: nuxt-content-front-matter.jpg
tags:
  - Nuxt
  - Nuxt Content
  - Front matter
---

# Использование Front matter в Nuxt Content

:::callout
Краткий пример того, как хранить и использовать метаданные в формате "Front matter" в Markdown-файлах в Nuxt Content.
:::

Для хранения метаданных в тексте Markdown удобно использовать специальный формат (или, как написано в документации Nuxt Content, _соглашение_) – **Front matter**. Фактически, это блок YAML, ограниченный строками `---`, и содержащий произвольный набор пар "ключ - значение". Например, конкретно для этого поста:

```yaml
---
title: Использование Front-matter в Nuxt Content
description: Краткий пример того, как можно использовать метаданные в формате "Front matter" в Markdown-файлах в Nuxt Content.
published: false
date: 2022-06-26
cover: nuxt-content-front-matter.jpg
tags:
  - Nuxt
  - Nuxt Content
  - Front-matter
---
```

Для блога, таким образом очень легко и удобно прописывать заголовок, описание поста, дату публикации, имя файла с изображением ("обложки"), и даже списка тегов.

Приведу пример компонента, который отображает перечень постов блога на основе прописанных при помощи **Front matter** метаданных ([также см. на GitHub](https://github.com/hazadus/nuxt-content-portfolio/blob/main/components/PostList.vue)):

```vue
<script setup lang="ts">
const props = defineProps({
  limit: {
    type: Number,
    default: 0,
    required: false,
  },
});

const { data: posts } = await useAsyncData("posts", () => {
  if (!props.limit) {
    return queryContent("/blog")
      .sort({ date: 1 })
      .where({ published: true })
      .find();
  } else {
    // сортируем по полю `date` по убыванию,
    // отбирая посты с полем `published: true`,
    // ограничевая количество пареметром `props.limit`:
    return queryContent("/blog")
      .sort({ date: 1 })
      .where({ published: true })
      .limit(props.limit)
      .find();
  }
});
</script>

<template>
  <section class="grid md:grid-cols-3 mt-8 mb-8 gap-10">
    <!--
      Все поля, прописанные в блоке метаданных Front matter, доступны в объекте `post`!
    -->
    <PostCard v-for="post in posts" :key="`post-${post._id}`" :post="post" />
  </section>
</template>
```

Пример компонента для отображения карточки отдельного поста ([также см. на GitHub](https://github.com/hazadus/nuxt-content-portfolio/blob/main/components/PostCard.vue)):

```vue
<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

defineProps({
  post: {
    type: Object as PropType<ParsedContent>,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-80">
    <a :href="post._path">
      <img
        :src="`/images/blog/${post.cover}`"
        :alt="post.title"
        class="w-full h-48 object-cover"
      />
    </a>

    <div class="p-6">
      <a :href="post._path" class="hover:underline">
        <h2 class="text-xl font-bold mb-2">
          {{ post.title }}
        </h2>
      </a>
      <p class="text-gray-700 mb-4">
        {{ post.description }}
      </p>
      <div>
        <Icon name="mdi:tag" class="mr-2" />
        <span
          v-for="tag in post.tags"
          :key="`tag-${tag}`"
          class="inline-block bg-indigo-200 rounded px-2 mr-2"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
```

## Дополнительные ресурсы

### Документация

- [Front matter | Markdown | Nuxt Content](https://content.nuxtjs.org/guide/writing/markdown#front-matter)
- [queryContent() | Composables | API | Nuxt Content](https://content.nuxtjs.org/api/composables/query-content)

### Видео

- YouTube: [Portfolio Build with Nuxt Content & GraphQL - Part 4](https://www.youtube.com/watch?v=GXgWQN_NJnA)
