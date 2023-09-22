<template>
  <footer class="p-4 sm:p-6 bg-gray-800 lg:py-10">
    <div class="mx-auto max-w-screen-xl">
      <div class="md:flex md:justify-between lg:pr-10">
        <div class="mb-6 md:mb-0">
          <a
            href="/"
            class="flex items-center"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-300">
              hazadus.ru
            </span>
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">Разработки</h2>
            <ul class="text-gray-400">
              <li class="mb-4">
                <a
                  href="/projects/"
                  class="hover:underline"
                >
                  Проекты
                </a>
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
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">Мои сайты</h2>
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
              <li class="mb-4">
                <a
                  href="http://messenger.hazadus.ru"
                  class="hover:underline"
                >
                  Messenger
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
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">Посты</h2>
            <ul class="text-gray-400">
              <li class="mb-4">
                <a
                  href="/blog/"
                  class="hover:underline"
                >
                  Все посты
                </a>
              </li>
              <li>
                <a
                  href="/blog/tags/"
                  class="hover:underline"
                >
                  Тэги
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">Автор</h2>
            <ul class="text-gray-400">
              <li class="mb-4">
                <a
                  href="/about/"
                  class="hover:underline"
                >
                  О себе
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="/about/#contacts"
                  class="hover:underline"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="/about/"
                  class="hover:underline"
                >
                  Инвентарь
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />

      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2022 - 2023 hazadus &middot; <a href="/dash/">🚀</a>
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
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
            href="https://github.com/hazadus"
            class="text-gray-500 hover:text-gray-400"
          >
            <Icon
              name="octicon:mark-github-16"
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
