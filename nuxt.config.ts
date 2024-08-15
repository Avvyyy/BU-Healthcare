// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-vuefire", "@pinia/nuxt"],
  ssr: true,
 vuefire: {
  // ensures that the auth module is enabled
  auth: {
    enabled: true,
    // sessionCookie: true,
  },
  config: {
    // Config from firebase project settings
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId:  process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  }
 }
})