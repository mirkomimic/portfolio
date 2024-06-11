<template>
  <section id="section_5" class="h-screen">
    <v-row class="h-100">
      <v-col 
        class="d-flex align-center justify-center pa-0"
        cols="4"
        order="2"
      >
        <div class="vuetifyImageNew mr-10"></div>
      </v-col>
      <v-col
        class="d-flex justify-center align-center pa-0"
      >
        <div 
          class="card justify-center pa-4"
          style="border: 1px solid white; border-radius: 15px; width: 800px;"
        >
          <h4 class="text-h4 mb-3">My Work with Vuetify</h4>
          <h5 class="text-h5 text-start mb-3">Why Vuetify?</h5>
          <p class="text-h6">Vuetify is a powerful and flexible Vue.js framework that follows the Material Design specification. It provides a wide range of pre-designed components and a responsive grid system, making it an excellent choice for building visually appealing and user-friendly interfaces.</p>

          <p class="my-3 text-h6">In my projects, I leverage Vuetify to:</p>

          <ul class="ms-4 text-h6">
            <li>Design Consistency</li>
            <li>Responsive Layouts</li>
            <li>Component Reusability</li>
            <li>Enhanced User Experience</li>
            <li>Rapid Prototyping</li>
          </ul>

          
        </div>
      </v-col>
    </v-row>

  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

onMounted(() => {


})
</script>



<style scoped>
</style>