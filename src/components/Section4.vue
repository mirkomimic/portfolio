<template>
  <section id="section_4" class="h-screen">
    <v-row class="h-100">
      <v-col 
        class="d-flex align-center justify-center pa-0"
        cols="4"
        order="2"
      >
        <div class="sqlImageNew mr-10"></div>
      </v-col>
      <v-col
        class="d-flex justify-center align-center pa-0"
      >
        <div 
          class="card justify-center pa-4"
          style="border: 1px solid white; border-radius: 15px; width: 800px;"
        >
          <h4 class="text-h4 mb-3">My Work with MySQL</h4>
          <h5 class="text-h5 text-start mb-3">Why MySQL?</h5>
          <p class="text-h6">MySQL is a reliable and widely-used relational database management system that offers high performance, scalability, and ease of use. Its robust feature set and strong community support make it an excellent choice for managing application data.</p>

          <p class="my-3 text-h6">In my projects, I leverage MySQL to:</p>

          <ul class="ms-4 text-h6">
            <li>Data Modeling</li>
            <li>Query Optimization</li>
            <li>Database Security</li>
            <li>Backup and Recovery</li>
            <li>Integration with Applications</li>
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