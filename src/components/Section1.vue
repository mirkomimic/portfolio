<template>
  <section id="section_1" class="h-screen">
    <v-row class="h-100" >
      <v-col 
        class="d-flex align-center justify-center pa-0"
        cols="4"
      >
        <div class="d-flex">
          <!-- <v-img src="images/programming4.png" width="400" class="image"></v-img> -->
          <v-img src="images/programming5.webp" width="400" class="image ms-5"></v-img>
        </div>
      </v-col>
      <v-col
        class="d-flex justify-center align-center pa-0"
      >
        <div 
          class="card d-flex flex-column justify-center align-center ga-4 pa-4 mr-10"
          style="border: 1px solid white; border-radius: 15px; width: 800px;"
        >
          <h1 class="roboto-mono text-h3">Welcome to My Portfolio</h1>

          <h3 class="caveat-font">Hi, I'm 
            <span class="caveat-font text-light-blue-darken-1">M</span>
            <span class="caveat-font text-light-blue-darken-1">i</span>
            <span class="caveat-font text-light-blue-darken-1">r</span>
            <span class="caveat-font text-light-blue-darken-1">k</span>
            <span class="caveat-font text-light-blue-darken-1">o</span>
            <span class="caveat-font text-light-blue-darken-1"> M</span>
            <span class="caveat-font text-light-blue-darken-1">i</span>
            <span class="caveat-font text-light-blue-darken-1">m</span>
            <span class="caveat-font text-light-blue-darken-1">i</span>
            <span class="caveat-font text-light-blue-darken-1">ċ</span>        
          </h3>

          <p class="roboto-mono text-h5">I'm an aspiring Full Stack Web Developer with a keen</p>
          <p class="roboto-mono text-h5">interest in building dynamic and responsive web</p>
          <p class="roboto-mono text-h5">applications. With growing expertise in Laravel,</p>
          <p class="roboto-mono text-h5"> Vue.js, MySQL, and Vuetify, I'm dedicated to learning</p>
          <p class="roboto-mono text-h5"> and applying the best practices in both front-end and</p>
          <p class="roboto-mono text-h5">back-end development.</p>

        </div>
      </v-col>
    </v-row>

    <div 
      class="skills glassy rounded mb-5 pa-3 d-flex ga-10 position-fixed left-0 right-0 bottom-0 mx-auto"
      style="width: 500px; height: 100px;"
    >
      <div class="vueWrapper" style="width: 70px; ">
        <v-img class="vue" src="skills/vue.png" width="70" height="70"></v-img>
      </div>
      <v-img class="laravel" src="skills/Laravel.png" width="70"></v-img>
      <v-img class="sql" src="skills/sql.png" width="70"></v-img>
      <v-img class="vuetify" src="skills/vuetify.svg" width="70"></v-img>
    </div>

  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

const image = ref()

onMounted(() => {

  const tl = gsap.timeline()

  tl.from('#section_1 .card h1', {
    // yPercent: -100,
    opacity: 0,
    duration: 3,
    rotateX: 45,
    ease: 'power1.out'
  }).from('#section_1 .card h3 span', {
    yPercent: -100,
    opacity: 0,
    duration: .5,
    ease: 'power1.out',
    stagger: .1,
    repeat: -1,
    repeatDelay: 2
  }, '<').from('#section_1 .card p', {
    x: -100,
    opacity: 0,
    ease: 'power1.out',
    stagger: .1,
  }, '<').from('.image', {
    duration: 2,
    scale: .7
  }, '<')

})


// transform-origin: center right;
</script>



<style scoped>
</style>