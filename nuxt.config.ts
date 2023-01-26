// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in',
    },
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      // title: 'Jesse Goodburne | Web Developer',
      // meta: [
      //   // <meta name="description" content="My amazing site">
      //   { name: 'description', content: 'My amazing site.' }
      // ]
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  runtimeConfig: {
    // values in .env will override values in this block
    // public values will be available browser-side
    public: {}
  }
})
