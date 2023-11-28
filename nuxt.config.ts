// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-icon",
    "@nuxtjs/apollo",
    "@pinia/nuxt",
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
  },
  app: {
    head: {
      script: [
        {
          src: "https://stats.hazadus.ru/script.js",
          async: true,
          "data-website-id": "765ffad5-0ba1-4925-87e1-d181762834c9",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16x",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
      meta: [
        { name: "apple-mobile-web-app-title", content: "Hazadus.ru" },
        { name: "application-name", content: "Hazadus.ru" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
    },
  },
  nitro: {
    storage: {
      // Reference: https://nuxt.com/docs/guide/directory-structure/server#example-using-redis
      redis: {
        driver: "redis",
        /* redis connector options */
        host: "redis", // Redis host
        port: 6379, // Redis port
        db: 0, // Defaults to 0
      },
    },
  },
  build: {
    // References: https://github.com/nuxt/nuxt/discussions/21533
    // https://v2.nuxt.com/docs/configuration-glossary/configuration-build/#transpile
    transpile: ["tslib"],
  },
  routeRules: {
    // Reference: https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
    // swr 300 means: cache these routes for 300 sec. We don't want to query GitHub API too often.
    // "/": { swr: true },
    // NB: does not work as expected, commented out for time being.
    // Issue: https://github.com/unjs/nitro/issues/603
    //"/projects": { swr: 600 },
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "nord",
      preload: [
        "python",
        "ts",
        "js",
        "css",
        "json",
        "bash",
        "vue",
        "vue-html",
        "html",
        "sql",
      ],
    },
  },
  apollo: {
    clients: {
      default: {
        tokenName: "github-token",
        httpEndpoint: "https://api.github.com/graphql",
      },
    },
  },
});