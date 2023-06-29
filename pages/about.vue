<script setup lang="ts">
import { Breadcrumb } from "@/types";

const pageTitle = "О сайте";

const breadcrumbs: Breadcrumb[] = [
  {
    title: pageTitle,
    url: null,
  },
];
</script>

<template>
  <Title>
    {{ pageTitle }} | Hazadus.ru
  </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <section>
    <h1 class="text-4xl font-bold mt-8">
      Об этом сайте
    </h1>
    <p class="text-base text-gray-900 p-2 italic">
      Как он работает и зачем нужен...
    </p>

    <p class="mt-4">
      Это персональный сайт юзера под ником <b>Hazadus</b>. Если вы меня знаете, то знаете – здесь я не планирую
      пиариться. Я не профи в веб-разработке, это моё хобби. Поэтому сайт создан лишь для двух целей: собрать в одном
      месте свои <a href="/projects/" class="underline">наработки</a> и <a href="/blog/" class="underline">заметки</a>, а
      также попробовать в действии интересный модуль <b>Nuxt Content</b>.
    </p>

    <h2 class="text-2xl mt-8">
      Связаться с автором
    </h2>
    <p class="mt-4">
      Пишите в
      <Icon name="logos:telegram" />&nbsp;<a href="https://t.me/Hazadus" class="underline">Телеграм</a>, или на
      <a href="mailto:hazadus7@gmail.com" class="underline">почту</a>.
    </p>

    <h2 class="text-2xl mt-8">
      Реализация сайта
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
      <div>
        <h3 class="text-xl mb-2">
          Бэкенд
        </h3>
        <ul>
          <li>
            <Icon name="logos:nuxt-icon" />&nbsp;
            <a href="https://nuxt.com" class="underline">Nuxt 3</a>
          </li>
          <li>
            <a href="https://content.nuxtjs.org/" class="underline">Nuxt Content</a>
          </li>
          <li>
            <Icon name="logos:apollostack" />&nbsp;
            <a href="https://apollo.nuxtjs.org/" class="underline">Nuxt Apollo</a>
          </li>
          <li>
            <a href="https://nitro.unjs.io/" class="underline">Nitro</a>
          </li>
          <li>
            <Icon name="logos:nginx" />&nbsp;
            <a href="https://nginx.org/" class="underline">Nginx</a>
          </li>
          <li>
            <Icon name="logos:docker-icon" />&nbsp;
            <a href="https://docker.com" class="underline">Docker</a>
          </li>
          <li>
            <Icon name="logos:letsencrypt" />&nbsp;
            <a href="https://letsencrypt.org/" class="underline">SSL сертификаты от Let's Encrypt</a>
          </li>
          <li>
            <Icon name="logos:ubuntu" />&nbsp;
            <a href="https://timeweb.cloud/vds-vps" class="underline">VDS Ubuntu 22.04 на Timeweb.cloud</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl mb-2">
          Фронтенд
        </h3>
        <ul>
          <li>
            <Icon name="logos:nuxt-icon" />&nbsp;
            <a href="https://nuxt.com" class="underline">Nuxt 3</a>
          </li>
          <li>
            <Icon name="logos:tailwindcss-icon" />&nbsp;
            <a href="https://tailwindcss.nuxtjs.org/" class="underline">Nuxt Tailwind CSS</a>
          </li>
          <li>
            <Icon name="logos:typescript-icon" />&nbsp;
            <a href="https://nuxt.com/docs/guide/concepts/typescript" class="underline">TypeScript</a>
          </li>
        </ul>
      </div>
    </div>

    <p class="mt-4 mb-8">
      Исходники сайта:
      <Icon name="logos:github-octocat" />
      <a href="https://github.com/hazadus/nuxt-content-portfolio" class="underline">hazadus/nuxt-content-portfolio</a>
    </p>
  </section>
</template>