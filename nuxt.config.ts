// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },

  ssr: false,
  runtimeConfig: {
    public: {
      baseUrl: "",
    }
  },

  app: {
    head: {
      title: 'NEW TEMPLATE',
      script: [
        {
          src: "https://kit.fontawesome.com/43b81f9fb6.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  css: ["sweetalert2/src/sweetalert2.scss", "~/assets/scss/main.scss"],

  modules: ['@pinia/nuxt', "@nuxtjs/tailwindcss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-nesting': {}
    },
  },
})