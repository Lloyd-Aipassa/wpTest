// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {    
    // Static page generated on-demand, revalidates in background (ISG)   
    // '/blog/**': { swr: true },    
    // '/blog/**': { prerender: true },    

// Static page generated on-demand once (SSG - or at least mighty close)    
// '/blog/**': { static: true }, 

// Render these routes on the client (SPA)
// '/blog/**': { ssr: false },    
},
ssr: true,

})
