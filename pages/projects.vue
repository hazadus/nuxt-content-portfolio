<script setup lang="ts">
const pageTitle = "Проекты";

const breadcrumbs = [
  {
    title: pageTitle,
    url: null,
  },
];
</script>

<template>
  <Title> {{ pageTitle }} | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Личные проекты</h1>
  <p class="text-base text-gray-900 p-2">
    Я обожаю делать веб-приложения, и обычно одновременно работаю над двумя-тремя, переключаясь и дорабатывая
    их по мере обретения новых знаний и появления вдохновения! Ниже я подробно расскажу о приложениях, которые
    запущены и благополучно работают.
  </p>

  <!-- Trololo -->
  <section class="bg-white">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Трололо
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          Удобный и современный инструмент для создания канбан-досок онлайн. Трололо поможет вам качественно
          спланировать выполнение любых задач, и с удовольсвием довести свои идеи до реализации.
        </p>
        <a
          href="/blog/nuxt-board-deploy"
          class="inline-flex items-center justify-center px-5 py-3 mr-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Подробнее
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="http://boards.hazadus.ru/"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Открыть сайт
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src="/images/blog/nuxt-board-deploy.png"
          alt="Boards screenshot"
        />
      </div>
    </div>
  </section>

  <!-- Bookmarks -->
  <section class="bg-white">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src="/images/bookmarks.png"
          alt="Bookmarks screenshot"
        />
      </div>
      <div class="pl-4 mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Bookmarks
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl">
          Приложение для систематизации закладок. Создавайте папки, добавляйте теги, помечайте закладки как
          избранные, прочитанные или архивные - ваши любимые ссылки всегда с вами, в любом браузере и
          устройстве!
        </p>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl italic">
          Подробный пост о проекте в процессе написания.
        </p>

        <!--
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 mr-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Подробнее
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        -->
        <a
          href="http://bookmarks.hazadus.ru/"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Открыть сайт
        </a>
      </div>
    </div>
  </section>

  <!-- Journal -->
  <section class="bg-white">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Журнал Дежурства
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          Система совместной работы над задачами для сменных работников. Внутренний инструмент, разработанный
          мной для оптимизации текущей работы.
        </p>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl italic">
          Подробный пост о проекте в процессе написания.
        </p>

        <!--
        <a
          href="/blog/nuxt-board-deploy"
          class="inline-flex items-center justify-center px-5 py-3 mr-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Подробнее
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        -->
        <a
          href="https://github.com/hazadus/journal"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Подробнее на GitHub
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src="/images/journal.png"
          alt="Boards screenshot"
        />
      </div>
    </div>
  </section>
</template>
