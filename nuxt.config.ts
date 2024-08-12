// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-vuefire"],
 vuefire: {
  config: {
    // Config from firebase project settings
    apiKey: "AIzaSyD3zbPsXZVFp63mmANX01VGWPGrDLdejrs",
    authDomain: "bu-healthcare.firebaseapp.com",
    projectId: "bu-healthcare",
    storageBucket: "bu-healthcare.appspot.com",
    messagingSenderId: "714665042795",
    appId: "1:714665042795:web:00568c211687e0b8cee22e"
  }
 }
})