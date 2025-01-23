// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // load scss file globally
  css: ['~/assets/scss/global.scss'],

  modules: ['nuxt-aos']
})