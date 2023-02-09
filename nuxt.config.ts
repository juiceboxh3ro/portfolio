// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in', },
    layoutTransition: { name: 'page', mode: 'out-in', },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Jesse Goodburne | Web Developer',
      meta: [
        { name: 'lang', content: 'en-US' },
        { name: 'description', content: 'Looking to build a new website, web app, or mobile app for your Maryland, Virginia, Washington DC business? We can create one for you using Squarespace, Wix, modern Javascript frameworks, Django, or Ruby on Rails.' },
        { name: 'og:site_name', content: 'Jesse Goodburne | Web Developer' },
        { name: 'og:title', content: 'Jesse Goodburne | Web Developer' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://jessegoodburne.com' },
        { name: 'og:description', content: 'Looking to build a new website, web app, or mobile app for your Maryland, Virginia, Washington DC business? We can create one for you using Squarespace, Wix, modern Javascript frameworks, Django, or Ruby on Rails.' },
        { name: 'google-site-verification', content: 'f0ee519f-c6fc-435a-94a8-60370672e442' }
      ]
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
