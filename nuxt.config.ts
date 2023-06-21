// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-icon",
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "nord",
      preload: ["python", "ts", "js", "css", "json", "bash", "vue", "vue-html", "html", "sql",],
    },
  }
})
