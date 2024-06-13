<template>
  <section id="section_6" class="h-screen position-relative">
    <v-row class="h-100">
      <v-col 
        class="d-flex align-center justify-center pa-0"
        cols="6"
      >
        <v-img class="vue" src="skills/vue.png" width="250" height="250"></v-img>
      </v-col>
      <v-col
        class="d-flex justify-center align-center pa-0"
        cols="6"
      >
        <v-img class="laravel" src="skills/Laravel.png" width="250" height="250"></v-img>
      </v-col>
      <v-col
        class="d-flex justify-center align-center pa-0"
        cols="6"
      >
        <v-img class="sql" src="skills/sql.png" width="250" height="250"></v-img>
      </v-col>
      <v-col
        class="d-flex justify-center align-center pa-0"
        cols="6"
      >
        <v-img class="vuetify" src="skills/vuetify.svg" width="250" height="250"></v-img>
      </v-col>
    </v-row>

    <div 
      class="card glassyWhite justify-center pa-4 position-absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto"
      style="
        border: 1px solid white; 
        border-radius: 15px; 
        width: 800px; 
        height: 550px;
      "
    >
      <h4 class="text-h4 mb-3">
        <v-icon icon="mdi-github"></v-icon>
        My Projects
      </h4>

      <ul class="ms-3">
        <li v-for="(link, index) in links" :key="index" class="text-h5">
          <a :href="link.link" class="text-decoration-none link roboto-mono" target="_blank">{{ link.name }}</a>
          <br>
          <p class="roboto-mono my-3">{{ link.desc }}</p>
        </li>
      </ul>

    </div>
  </section>



</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

const links = ref([
  {
    name: 'Vehicle Dealership',
    desc: 'Full-stack app with Laravel 10, Vue 3, InertiaJS, Vuetify 3',
    link: 'https://github.com/mirkomimic/vehicle_dealership_full_stack'
  },
  {
    name: 'World News Api & SPA App',
    desc: 'Laravel 10, NewsAPI, Vue 3, Pinia, PrimeVue',
    link: 'https://github.com/mirkomimic/world_news_api'
  },
  {
    name: 'Payments App',
    desc: 'Laravel 10, Vue 3, InertiaJS, Vuetify 3, Laravel Cashier',
    link: 'https://github.com/mirkomimic/payments-app-fullstack'
  },
  {
    name: 'Live Stock App',
    desc: 'Laravel 11, Inertia.js Vue 3, Typescript, Vuetify 3, AlphaVantageAPI',
    link: 'https://github.com/mirkomimic/live-stocks-app'
  },
])

onMounted(() => {
  const card = document.querySelector('#section_6 .card')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section_6',
      start: 'top+=50 center',
      end: 'center center',
      // markers: true,
      scrub: true,
    }
  })

  tl.from(card, {
    y: -150,
    rotateX: -50,
    rotateY: 5,
    opacity: 0,
  }).from(['#section_6 .vue', '#section_6 .laravel', '#section_6 .sql', '#section_6 .vuetify'], {
    y: -150,
    opacity: 0,
  }, '<')

})
</script>



<style scoped>
.link:hover {
  text-decoration: underline !important;
}
</style>