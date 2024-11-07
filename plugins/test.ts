import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
    console.log("From test nuxt layer, log axios:", axios);
})
