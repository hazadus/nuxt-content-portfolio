<script setup lang="ts">
import { Breadcrumb } from "@/types";
import { useViewCount } from "@/api";

const pageTitle = "О сайте";

const viewCount = await useViewCount("about");

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

  <ParticlesAnimation />

  <section>
    <h1 class="text-4xl font-bold mt-8">
      Об этом сайте
    </h1>
    <p class="text-base text-gray-900 p-2 italic">
      Зачем он нужен и как работает...
    </p>

    <p class="mt-4">
      Это персональный сайт юзера под ником <b>Hazadus</b>. Если вы меня знаете, то знаете – здесь я не планирую
      пиариться. Я не профи в веб-разработке, это моё хобби. Поэтому сайт создан лишь для двух целей: собрать в одном
      месте свои <a href="/projects/" class="underline">наработки</a> и <a href="/blog/" class="underline">заметки</a>, а
      также попробовать в действии интересный модуль <b>Nuxt Content</b>.
    </p>

    <p class="mt-4">
      Кому нужен <i>ещё один блог</i>, спросите вы?.. Да, в первую очередь, себе &mdash; эти заметки позволяют
      систематизировать новые знания, и, при необходимости, быстро найти опробованное ранее решение. По мере появления
      нового опыта и знаний, интересно пересматривать свой код, и находить возможность его улучшить.
    </p>

    <h2 class="text-2xl mt-8 font-semibold">
      Связаться с автором
    </h2>
    <p class="mt-4">
      Пишите в
      <Icon name="logos:telegram" />&nbsp;<a href="https://t.me/Hazadus" class="underline">Телеграм</a>, или на
      <a href="mailto:hazadus7@gmail.com" class="underline">почту</a>.
    </p>
    <p class="mt-4">
      Мои профили:
      <Icon name="octicon:mark-github-16" />
      <a href="https://github.com/hazadus/" class="underline">GitHub</a> /
      <Icon name="ion:logo-stackoverflow" />
      <a href="https://stackoverflow.com/users/20197519/hazadus" class="underline">StackOverflow</a> /
      <a href="https://www.codewars.com/users/hazadus" class="underline">CodeWars</a>&nbsp;
      <img src="https://www.codewars.com/users/hazadus/badges/micro" class="inline-block" /> /
      <Icon name="bi:steam" />
      <a href="https://steamcommunity.com/id/hazadus/" class="underline">Steam</a> /
      <a href="https://myshows.me/hazadus" class="underline">MyShows</a> /
      <a href="https://www.livelib.ru/reader/hazadus" class="underline">LiveLib</a>.
    </p>
    <p class="mt-4">
      Интересы:
      <Icon name="logos:python" /> Python,
      <Icon name="logos:django-icon" /> Django,
      <Icon name="logos:postgresql" /> PostgreSQL,
      <Icon name="logos:typescript-icon" /> TypeScript,
      <Icon name="logos:nuxt-icon" /> Nuxt,
      <Icon name="logos:vue" /> Vue,
      <Icon name="logos:rust" /> Rust, CI/CD.
    </p>
    <p class="mt-4">
      Книги: <a href="http://library.hazadus.ru/lists/3/details/" class="underline">читаю</a> /
      <a href="http://library.hazadus.ru/lists/5/details/" class="underline">хочу прочитать</a> /
      <a href="http://library.hazadus.ru/lists/2/details/" class="underline">недавно прочитал</a>.
    </p>

    <h2 class="text-2xl mt-8 font-semibold">
      Реализация сайта
    </h2>
    <p class="mt-4">
      Для своего личного сайта я выбрал любимую на настоящий момент библиотеку фронтенда &mdash;
      <Icon name="logos:nuxt-icon" />&nbsp;<b>Nuxt</b>. Наверное, правильнее будет сказать, что это даже фулл-стек
      фреймворк, ведь все странички на сайте генерируются на бэкенде в реальном времени. Кроме того, интересно исследовать
      возможности модулей <b>Nuxt Content</b>, <b>Apollo</b>.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
      <div>
        <h3 class="text-xl mb-2">
          Бэкенд
        </h3>
        <ul>
          <li>
            <Icon name="logos:nuxt-icon" />&nbsp;
            <a href="https://nuxt.com" class="underline">Nuxt 3</a> /
            <a href="https://content.nuxtjs.org/" class="underline">Nuxt Content</a> /
            <a href="https://nitro.unjs.io/" class="underline">Nitro</a>
          </li>
          <li>
            <Icon name="logos:apollostack" />&nbsp;
            <a href="https://apollo.nuxtjs.org/" class="underline">Nuxt Apollo</a>
          </li>
          <li>
            <Icon name="logos:nginx" />&nbsp;
            <a href="https://nginx.org/" class="underline">Nginx</a>
          </li>
          <li>
            <Icon name="logos:redis" />&nbsp;
            <a href="https://nuxt.com/docs/guide/directory-structure/server#server-storage" class="underline">Redis</a>
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

    <p class="mt-4">
      Исходники сайта:
      <Icon name="logos:github-octocat" />
      <a href="https://github.com/hazadus/nuxt-content-portfolio" class="underline">hazadus/nuxt-content-portfolio</a>
    </p>
    <p class="mt-4 mb-8 text-gray-300">
      Просмотров странички: {{ viewCount }}
    </p>
  </section>
</template>