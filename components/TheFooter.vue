<template>
  <footer class="p-4 sm:p-6 bg-gray-800 lg:py-10">
    <div class="mx-auto max-w-screen-xl">
      <div class="md:flex md:justify-between lg:pr-10">
        <div class="mb-12 md:mb-0">
          <NuxtLink
            to="/about/"
            class="flex items-center"
          >
            <span class="self-center mb-2 text-2xl font-semibold whitespace-nowrap text-gray-300">
              Александр Голдовский
            </span>
          </NuxtLink>
          <span class="italic text-gray-400 cursor-default"
            >Backend разработка на <Icon name="logos:python" /> Python, и не только.</span
          >
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase cursor-default">Разработки</h2>
            <ul class="text-gray-400">
              <li class="mb-4">
                <NuxtLink
                  to="/projects/"
                  class="hover:underline"
                >
                  Проекты
                </NuxtLink>
              </li>
              <li>
                <a
                  href="/repos/"
                  class="hover:underline"
                >
                  Репо
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase cursor-default">Мои сайты</h2>
            <ul class="text-gray-400">
              <li class="mb-4">
                <a
                  href="http://boards.hazadus.ru"
                  class="hover:underline"
                >
                  Трололо
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="http://rss.hazadus.ru"
                  class="hover:underline"
                >
                  RSS Reader</a
                >
                🏗️
              </li>
              <li class="mb-4">
                <a
                  href="http://bookmarks.hazadus.ru"
                  class="hover:underline"
                >
                  Bookmarks
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="http://library.hazadus.ru"
                  class="hover:underline"
                >
                  Library
                </a>
              </li>
              <li>
                <a
                  href="http://stats.hazadus.ru"
                  class="hover:underline"
                >
                  Stats
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase cursor-default">Посты</h2>
            <ul class="text-gray-400">
              <li class="mb-4">
                <NuxtLink
                  to="/blog/"
                  class="hover:underline"
                >
                  Все посты
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/blog/tags/"
                  class="hover:underline"
                >
                  Тэги
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase cursor-default">Автор</h2>
            <ul class="text-gray-400">
              <li class="mb-4">
                <NuxtLink
                  to="/about/"
                  class="hover:underline"
                >
                  О себе
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/about/#contacts"
                  class="hover:underline"
                >
                  Контакты
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/microblog/"
                  class="hover:underline"
                >
                  Микроблог
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink
                  to="/about/bookshelf/"
                  class="hover:underline"
                >
                  Читаю
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/about/inventory/"
                  class="hover:underline"
                >
                  Инвентарь
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />

      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2022 - 2024
          <NuxtLink
            to="/about/"
            class="hover:underline"
            >hazadus</NuxtLink
          >
          &middot; <a href="/dash/">🚀</a>
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://t.me/hazadus"
            class="text-gray-500 hover:text-gray-400"
          >
            <Icon
              name="bi:telegram"
              size="1.5rem"
            />
          </a>
          <a
            href="mailto:hazadus7@gmail.com"
            class="text-gray-500 hover:text-gray-400"
          >
            <Icon
              name="material-symbols:mail-rounded"
              size="1.5rem"
            />
          </a>
          <a
            href="https://github.com/hazadus"
            class="text-gray-500 hover:text-gray-400"
          >
            <Icon
              name="octicon:mark-github-16"
              size="1.5rem"
            />
          </a>
          <a
            href="https://fosstodon.org/@hazadus"
            rel="me"
            class="text-gray-500 hover:text-gray-400"
          >
            <Icon
              name="mdi:mastodon"
              size="1.5rem"
            />
          </a>
          <a
            href="https://hazadus.ru/rss.xml"
            class="text-gray-500 hover:text-gray-400"
          >
            <Icon
              name="material-symbols:rss-feed"
              size="1.5rem"
            />
          </a>
          <a
            href="https://stackoverflow.com/users/20197519/hazadus"
            class="text-gray-500 hover:text-gray-400"
          >
            <Icon
              name="ion:logo-stackoverflow"
              size="1.5rem"
            />
          </a>
          <a
            href="https://steamcommunity.com/id/hazadus/"
            class="text-gray-500 hover:text-gray-400"
          >
            <Icon
              name="bi:steam"
              size="1.5rem"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
