<template>
  <section id="section_2" class="h-screen">
    <v-row class="h-100">
      <v-col 
        class="d-flex align-center justify-center pa-0 mx-auto"
        cols="4"
      >
        <div class="vueImageNew mt-15 mt-lg-0"></div>
      </v-col>
      <v-col
        class="d-flex justify-center align-center pa-0"
      >
        <div 
          class="card justify-center pa-4 mr-10"
          style="border: 1px solid white; border-radius: 15px; width: 800px;"
        >
          <h4 class="text-h5 text-lg-h4 mb-3 roboto-mono">My Work with Vue.js</h4>
          <h5 class="text-h5 text-start mb-3 roboto-mono">Why Vue.js?</h5>
          <p class="text-lg-h5 roboto-mono">Vue.js is a versatile and progressive JavaScript framework that I use to build interactive and dynamic user interfaces. Its ease of integration, comprehensive documentation, and flexibility make it an ideal choice for both small and large-scale applications.</p>

          <p class="text-lg-h5 my-3 roboto-mono">In my projects, I leverage Vue.js to:</p>

          <ul class="text-lg-h5 ms-4 roboto-mono">
            <li>Create Responsive Interfaces</li>
            <li>Component-Based Architecture</li>
            <li>State Management</li>
            <li>Integration with Backend</li>
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
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger) 


onMounted(() => {
  Splitting({ target: '#section_2 .card p', by: 'lines' });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section_2',
      start: 'center center',
      end: 'center center',
      // markers: true,
    }
  })

  tl.from('#section_2 .card p span', {
    opacity: 0,
    stagger: .01,
  }).from('#section_2 .card li', {
    opacity: 0,
    stagger: .1,
  }, '-=.5')
})
</script>



<style scoped>
</style>