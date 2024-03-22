<script setup lang="ts">
import type { Breadcrumb } from "@/types";

const pageTitle = "Инвентарь";
const pageDescription = "Инструменты, которыми я пользуюсь.";

useSeoMeta({
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: "https://hazadus.ru/books/",
  ogImage: "/images/ogImage.jpg",
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterCard: "summary",
  twitterImage: "/images/ogImage.jpg",
});

const breadcrumbs: Breadcrumb[] = [
  {
    title: "О себе",
    url: "/about/",
  },
  {
    title: pageTitle,
    url: null,
  },
];
</script>

<template>
  <Title> {{ pageTitle }} | Александр Голдовский </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">{{ pageTitle }}</h1>

  <p class="text-base text-gray-900 p-4">
    Регулярно узнаю о разных интересных инструментах на сайтах разработчиков, поэтому здесь я хочу рассказать
    о любимых программах, которыми каждый день пользуюсь сам. Наверняка, вы найдёте тут что-то полезное для
    себя. Страничка пока в разработке, но уже скоро появятся скриншоты и все дела.
  </p>

  <div class="mb-16 grid max-w-screen-xl lg:px-4 mx-auto gap-2 lg:gap-8 grid-cols-1 lg:grid-cols-12">
    <div class="flex flex-col lg:col-span-4 rounded-lg shadow-md px-4 py-4">
      <h3 class="font-semibold mb-1">Dev Tools</h3>
      <div class="mb-2 text-gray-500 text-sm">Любимые инструменты для разработки софта</div>

      <ul class="list-disc list-inside">
        <li>
          <a
            href="https://www.jetbrains.com/ru-ru/pycharm/"
            class="underline"
            >PyCharm Pro</a
          >,
          <a
            href="https://code.visualstudio.com/"
            class="underline"
            >VS Code</a
          >
        </li>
        <li>
          <a
            href="https://app.warp.dev/referral/2K4PXZ"
            class="underline"
            >Warp</a
          >
        </li>
        <li>
          <a
            href="https://www.docker.com/products/docker-desktop/"
            class="underline"
            >Docker Desktop</a
          >
        </li>
        <li>
          <a
            href="https://github.com/jonas/tig"
            class="underline"
            >tig</a
          >,
          <a
            href="https://github.com/ogham/exa"
            class="underline"
            >exa</a
          >,
          <a
            href="https://github.com/tmux/tmux"
            class="underline"
            >tmux</a
          >
        </li>
        <li>
          <a
            href="https://www.sourcetreeapp.com/"
            class="underline"
            >Sourcetree</a
          >
        </li>
      </ul>
    </div>
    <div class="flex flex-col lg:col-span-4 rounded-lg shadow-md px-4 py-4">
      <h3 class="font-semibold mb-1">Mac Apps</h3>
      <div class="mb-2 text-gray-500 text-sm">Программы для мака, без которых не жизнь</div>

      <ul class="list-disc list-inside">
        <li>
          Браузеры: Safari, Firefox,
          <a
            href="https://arc.net/"
            class="underline"
            >Arc</a
          >
        </li>
        <li>
          База знаний:
          <a
            href="https://notion.so"
            class="underline"
            >Notion</a
          >,
          <a
            href="https://obsidian.md/"
            class="underline"
            >Obsidian</a
          >
        </li>
        <li>
          RSS:
          <a
            href="https://netnewswire.com/"
            class="underline"
            >NetNewsWire</a
          >
        </li>
        <li>
          Clipboard:
          <a
            href="https://maccy.app/"
            class="underline"
            >Maccy</a
          >
        </li>
        <li>
          Menu:
          <a
            href="https://bjango.com/mac/istatmenus/"
            class="underline"
            >iStat Menus</a
          >,
          <a
            href="https://www.macbartender.com/"
            class="underline"
            >Bartender</a
          >
        </li>
      </ul>
    </div>
    <div class="flex flex-col lg:col-span-4 rounded-lg shadow-md px-4 py-4">
      <h3 class="font-semibold mb-1">SaaS</h3>
      <div class="mb-2 text-gray-500 text-sm">Веб-приложения на (почти) каждый день</div>

      <ul class="list-disc list-inside">
        <li>
          <a
            href="https://omnivore.app"
            class="underline"
            >Omnivore</a
          >
        </li>
        <li>
          <a
            href="https://uptimerobot.com/"
            class="underline"
            >UptimeRobot</a
          >
        </li>
        <li>
          <a
            href="https://gist.github.com/hazadus"
            class="underline"
            >GitHub Gists</a
          >
        </li>
        <li>
          <a
            href="https://track.toggl.com/"
            class="underline"
            >Toggl Track</a
          >
        </li>
        <li>
          <a
            href="https://rss.hazadus.ru"
            class="underline"
            >RSS Reader</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
