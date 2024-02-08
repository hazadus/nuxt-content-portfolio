<script setup lang="ts">
import type { Breadcrumb } from "@/types";

const pageTitle = "О себе";

useSeoMeta({
  description: "Инфа обо мне и контакты для связи.",
  ogTitle: pageTitle,
  ogDescription: "Инфа обо мне и контакты для связи.",
  ogUrl: "https://hazadus.ru/about/",
  ogImage: "/images/amgold_profile_pic.jpg",
  twitterTitle: pageTitle,
  twitterDescription: "Инфа обо мне и контакты для связи.",
  twitterCard: "summary",
  twitterImage: "/images/amgold_profile_pic.jpg",
});

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
          В свободное время я занимаюсь разработкой web-приложений. Моя цель – делать это профессионально.
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
          >. Иногда я пишу небольшие
          <NuxtLink
            to="/blog/"
            class="underline"
            >посты</NuxtLink
          >.
        </p>

        <p class="mt-4">
          Мои основные навыки:
          <Icon name="logos:python" /> Python, <Icon name="logos:postgresql" /> PostgreSQL,
          <Icon name="logos:django-icon" /> Django, Celery, <Icon name="logos:redis" /> Redis,
          <Icon name="logos:nginx" /> Nginx, <Icon name="logos:docker-icon" /> Docker,
          <Icon name="logos:git-icon" /> Git.
        </p>

        <p class="mt-4">
          Также владею: <Icon name="logos:typescript-icon" /> TypeScript,
          <Icon name="logos:nuxt-icon" /> Nuxt, <Icon name="logos:docker-icon" /> Tailwind,
          <Icon name="logos:mongodb-icon" /> MongoDB, Mongoose, и др.
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
    <div class="grid max-w-screen-xl lg:px-4 mx-auto gap-2 lg:gap-8 grid-cols-3 md:grid-cols-12">
      <div class="flex flex-col col-span-3 md:col-span-6 xl:col-span-3 rounded-lg shadow-md px-4 py-8">
        <NuxtLink
          to="/about/bookshelf/"
          class="font-semibold mb-1 hover:underline"
          >Читаю</NuxtLink
        >
        <div class="mb-2 text-gray-500 text-sm">
          Техническая литература: что читаю, прочитал, планирую читать.
        </div>
      </div>
      <div class="flex flex-col col-span-3 md:col-span-6 xl:col-span-3 rounded-lg shadow-md px-4 py-8">
        <h3 class="font-semibold mb-1">Вишлист</h3>
        <div class="mb-2 text-gray-500 text-sm">Хочу освоить</div>
        <div>FastAPI <Icon name="logos:go" /> Go <Icon name="logos:rust" /> Rust</div>
      </div>
      <div class="flex flex-col col-span-3 md:col-span-6 xl:col-span-3 rounded-lg shadow-md px-4 py-8">
        <h3 class="font-semibold mb-1">Инвентарь</h3>
      </div>
      <div class="flex flex-col col-span-3 md:col-span-6 xl:col-span-3 rounded-lg shadow-md px-4 py-8">
        <h3 class="font-semibold mb-1">Блогролл</h3>
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

      <div class="grid max-w-screen-xl lg:px-4 mx-auto gap-2 lg:gap-8 grid-cols-2 lg:grid-cols-12">
        <div class="flex flex-col lg:col-span-2 rounded-lg shadow-md px-4 py-8">
          <Icon
            name="bi:telegram"
            size="60px"
            class="mx-auto mb-2"
          />
          <a
            class="mx-auto hover:underline"
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
            class="mx-auto hover:underline"
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
            class="mx-auto hover:underline"
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
            class="mx-auto hover:underline"
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
            class="mx-auto hover:underline"
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
            class="mx-auto hover:underline"
            href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%B3%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-b10273291"
            >LinkedIn</a
          >
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="px-4 max-w-screen-xl">
      <h2
        class="text-2xl mt-8 mb-4 font-semibold"
        id="tools"
      >
        Инвентарь
      </h2>

      <p class="mb-2">
        Периодически узнаю о разных интересных инструментах на сайтах разработчиков, поэтому здесь тоже
        перечислю любимые программы, которыми каждый день пользуюсь сам. Наверняка, вы найдёте тут что-то
        полезное для себя.
      </p>

      <div class="grid max-w-screen-xl lg:px-4 mx-auto gap-2 lg:gap-8 grid-cols-1 lg:grid-cols-12">
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
            <li>
              <a
                href="https://bookmarks.hazadus.ru"
                class="underline"
                >Bookmarks</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="mt-8 mb-8 text-gray-300">Просмотров странички: {{ viewCount }}</p>
  </section>
</template>
