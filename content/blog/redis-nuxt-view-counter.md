---
title: Счетчик просмотров страниц в Nuxt 3 с использованием Redis
description: Пример использования Redis для создания простого счётчика просмотров страниц в Nuxt 3.
published: true
date: 2023-06-30
cover: redis-nuxt-view-counter.jpg
tags:
  - Nuxt
  - Nitro
  - Redis
---

# Счетчик просмотров страниц в Nuxt 3 с использованием Redis

:::callout
Пример использования Redis для создания простого счётчика просмотров страниц в Nuxt 3.
:::

В **Nuxt 3** "из коробки" есть поддержка работы с **Redis**, что не особенно афишируется в документации, но, тем не менее, прекрасно работает.

Ниже приведу пример, как я использовал эту возможность для создания простого счётчика просмотров страничек сайта в проекте на **Nuxt 3**.

Для начала, нам понадобится работающий инстанс **Redis**, поэтому добавим соответсвующие настройки в `docker-compose.yml` ([см. на GitHub](https://github.com/hazadus/nuxt-content-portfolio/blob/main/docker-compose.prod.yml)):

```yaml
version: "3.9"
services:
  redis:
    container_name: "hazadus-redis"
    image: redis:7.0.4
    volumes:
      # В директорию `./docker/redis` будет сбрасываться файл *.rdb с данными кэша Redis:
      - ./docker/redis:/data
  node:
    container_name: "hazadus-node"
    build: .
    command: node .output/server/index.mjs
    environment:
      - "NITRO_HOST=0.0.0.0"
      - "NITRO_PORT=3000"
      - "USE_REDIS=True"
# ...
```

Добавим параметры подключения к **Redis** в `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  // ...
  nitro: {
    storage: {
      redis: {
        driver: "redis",
        host: "redis", // В нашем случае, имя сервиса из docker-compose.yml
        port: 6379, // Порт стандартный
        db: 0,
      },
    },
  },
  // ...
});
```

Всё готово для работы с **Redis**. Создадим API endpoint непосредственно для подсчёта количества просмотров страниц ([см. на GitHub](https://github.com/hazadus/nuxt-content-portfolio/blob/main/server/api/viewCount.get.ts)):

```typescript
// файл `./server/api/viewCount.get.ts`
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const pageId: string = query.pageId as string;
  const redisKey: string = `viewCount:${pageId}`;
  let viewCount = 1;

  if (process.env.USE_REDIS) {
    const redis = useStorage("redis");
    const data = await redis.getItem(redisKey);

    if (data) viewCount = Number(data.toString()) + 1;
    await redis.setItem(redisKey, viewCount);

    return viewCount;
  } else {
    return 0;
  }
});
```

Я использовал переменную окружения `USE_REDIS` как флаг, чтобы не запускать **Redis** при работе в локальном режиме разработки. К сожалению, мне пока не понятно, как обработать ошибки соединения при отсутствии запущенного инстанса **Redis**, о чём я закинул [вопрос на StackOverflow](https://stackoverflow.com/q/76586293/20197519). В дальнейшем я планирую доработать эту часть кода и исключить переменную окружения `USE_REDIS`.

Для удобства работы со счётчиком просмотров, я создал отдельную функцию ([см. на GitHub](https://github.com/hazadus/nuxt-content-portfolio/blob/main/api.ts)):

```typescript
// файл `./api.ts`
export async function useViewCount(pageId: string) {
  const { data: viewCount } = await useFetch(`/api/viewCount?pageId=${pageId}`);
  return viewCount;
}
```

Таким образом, получить информацию о количестве просмотров странички, одновременно увеличив счётчик, можно следующим образом ([см. на GitHub](https://github.com/hazadus/nuxt-content-portfolio/blob/main/pages/blog/%5B...slug%5D.vue)):

```vue
<script setup lang="ts">
// пример - файл `./pages/blog/[...slug].vue
import { useViewCount } from "@/api";

const { path } = useRoute();
const viewCount = await useViewCount(path);
// ...
</script>
```

## Справочные материалы

- [Пример работы с Redis из документации Nuxt](https://nuxt.com/docs/guide/directory-structure/server#example-using-redis)
