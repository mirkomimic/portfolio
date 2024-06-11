<template>
  <section id="section_3" class="h-screen">
    <v-row class="h-100">
      <v-col 
        class="d-flex align-center justify-center pa-0"
        cols="4"
      >
        <div class="laravelImageNew"></div>
      </v-col>
      <v-col
        class="d-flex justify-center align-center pa-0"
        style=""
      >
        <div 
          class="card justify-center pa-4 mr-10"
          style="border: 1px solid white; border-radius: 15px; width: 800px;"
        >
          <h4 class="text-h4 mb-3">My Work with Laravel</h4>
          <h5 class="text-h5 text-start mb-3">Why Laravel?</h5>
          <p class="text-h6">Laravel is a powerful PHP framework that provides an elegant syntax and robust tools for web application development. Its comprehensive features, scalability, and developer-friendly environment make it my go-to choice for backend development.</p>

          <p class="my-3 text-h6">In my projects, I leverage Laravel to:</p>

          <ul class="ms-4 text-h6">
            <li>Efficient Routing</li>
            <li>Database Management</li>
            <li>Authentication and Security</li>
            <li>API Development</li>
            <li>Task Scheduling and Queues</li>
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