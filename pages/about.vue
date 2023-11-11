<script setup lang="ts">
import { Breadcrumb } from "@/types";

const pageTitle = "О себе";

const viewCount = await getViewCount("about");

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

  <section class="bg-white">
    <div class="grid max-w-screen-xl mt-8 px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
      <div class="mr-auto lg:col-span-9">
        <h1 class="text-4xl font-bold mb-2">Привет, меня зовут Александр! 👋</h1>

        <p class="mt-4">
          В свободное время я занимаюсь разработкой full stack web-приложений. Моя цель – делать это
          профессионально.
        </p>

        <p class="mt-4">
          На этом сайте можно ознакомиться с моими
          <NuxtLink
            to="/projects/"
            class="underline"
            >проектами</NuxtLink
          >
          и
          <a
            href="/repos/"
            class="underline"
            >другими наработками</a
          >.
        </p>

        <p class="mt-4">
          Технологии, в которых я совершенствуюсь сейчас:
          <Icon name="logos:python" /> Python, asyncio,
          <Icon name="simple-icons:aiohttp" />
          aiohttp, <Icon name="logos:postgresql" /> PostgreSQL, <Icon name="logos:django-icon" /> Django,
          Celery, <Icon name="logos:redis" /> Redis, <Icon name="logos:nginx" /> Nginx,
          <Icon name="logos:docker-icon" /> Docker, <Icon name="logos:docker-icon" /> Git, CI/CD.
        </p>

        <p class="mt-4">
          Кроме того, в своих проектах работаю с: <Icon name="logos:typescript-icon" /> TypeScript,
          <Icon name="logos:nuxt-icon" /> Nuxt, <Icon name="logos:vue" /> Vue,
          <Icon name="logos:nextjs-icon" /> Next.js, <Icon name="logos:react" /> React,
          <Icon name="logos:docker-icon" /> Tailwind, Chakra UI, <Icon name="logos:mongodb-icon" /> MongoDB,
          Mongoose, <Icon name="logos:prisma" /> Prisma, <Icon name="logos:apollostack" /> Apollo
          Client/Server, <Icon name="logos:nodejs-icon-alt" /> Node, и др.
        </p>

        <p class="mt-4">Неторопливо изучаю в своё удовольствие: <Icon name="logos:rust" /> Rust.</p>

        <p class="mt-4">
          Люблю хорошую литературу о разработке:
          <a
            href="http://library.hazadus.ru/lists/3/details/"
            class="underline"
            >читаю</a
          >
          /
          <a
            href="http://library.hazadus.ru/lists/5/details/"
            class="underline"
            >хочу прочитать</a
          >
          /
          <a
            href="http://library.hazadus.ru/lists/2/details/"
            class="underline"
            >недавно прочитал</a
          >.
        </p>

        <p class="mt-4">
          Коллекционирую
          <a
            href="https://www.discogs.com/user/hazadus"
            class="underline"
            >винил</a
          >, люблю
          <a
            href="https://steamcommunity.com/id/hazadus/"
            class="underline"
            >игры</a
          >.
        </p>
      </div>

      <div class="hidden lg:mt-0 lg:col-span-3 lg:flex">
        <img
          src="/images/amgold_profile_pic.jpg"
          alt="Boards screenshot"
          class="rounded-full w-60 h-60 mb-3 mx-auto"
        />
      </div>
    </div>
  </section>

  <section>
    <div class="px-4 max-w-screen-xl">
      <h2
        class="text-2xl mt-8 mb-4 font-semibold"
        id="contacts"
      >
        Связаться со мной
      </h2>

      <p class="mb-8">
        Буду рад получить сообщение от вас в
        <a
          class="underline"
          href="http://messenger.hazadus.ru"
          >своём мессенджере</a
        >
        (вход с аккаунтом Google), ищите меня там под ником <b>hazadus</b>. Или, воспользуйтесь любым из более
        традиционных способов, по ссылкам ниже.
      </p>

      <div class="grid max-w-screen-xl lg:px-4 mx-auto gap-2 lg:gap-8 grid-cols-2 lg:grid-cols-12">
        <div class="flex flex-col lg:col-span-2 rounded-lg shadow-md px-4 py-8">
          <Icon
            name="bi:telegram"
            size="60px"
            class="mx-auto mb-2"
          />
          <a
            class="mx-auto"
            href="https://t.me/Hazadus"
            >Telegram</a
          >
        </div>
        <div class="flex flex-col lg:col-span-2 rounded-lg shadow-md px-4 py-8">
          <Icon
            name="material-symbols:alternate-email"
            size="60px"
            class="mx-auto mb-2"
          />
          <a
            class="mx-auto"
            href="mailto:hazadus7@gmail.com"
            >Email</a
          >
        </div>
        <div class="flex flex-col lg:col-span-2 rounded-lg shadow-md px-4 py-8">
          <Icon
            name="octicon:mark-github-16"
            size="60px"
            class="mx-auto mb-2"
          />
          <a
            class="mx-auto"
            href="https://github.com/hazadus/"
            >GitHub</a
          >
        </div>
        <div class="flex flex-col lg:col-span-2 rounded-lg shadow-md px-4 py-8">
          <Icon
            name="mdi:mastodon"
            size="60px"
            class="mx-auto mb-2"
          />
          <a
            class="mx-auto"
            href="https://fosstodon.org/@hazadus"
            >Mastodon</a
          >
        </div>
        <div class="flex flex-col lg:col-span-2 rounded-lg shadow-md px-4 py-8">
          <Icon
            name="jam:stackoverflow-circle"
            size="60px"
            class="mx-auto mb-2"
          />
          <a
            class="mx-auto"
            href="https://stackoverflow.com/users/20197519/hazadus"
            >StackOverflow</a
          >
        </div>
        <div class="flex flex-col lg:col-span-2 rounded-lg shadow-md px-4 py-8">
          <Icon
            name="entypo-social:linkedin-with-circle"
            size="60px"
            class="mx-auto mb-2"
          />
          <a
            class="mx-auto"
            href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%B3%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-b10273291"
            >LinkedIn</a
          >
        </div>
      </div>
    </div>

    <p class="mt-8 mb-8 text-gray-300">Просмотров странички: {{ viewCount }}</p>
  </section>

  <!-- 
  <section>
    <div class="px-4 max-w-screen-xl">
      <h2
        class="text-2xl mt-8 mb-4 font-semibold"
        id="contacts"
      >
        Инвентарь
      </h2>

      <p>Инфа о моём "инструментарии".</p>
    </div>
  </section> 
--></template>
