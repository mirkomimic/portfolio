<template>
  <MainLayout>
    <div class="gradient2">
      <NavBar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </div>
  </MainLayout>
</template>

<script setup>
import Section1 from '@/components/Section1.vue';
import Section2 from '@/components/Section2.vue';
import Section3 from '@/components/Section3.vue';
import Section4 from '@/components/Section4.vue';
import Section5 from '@/components/Section5.vue';
import Section6 from '@/components/Section6.vue';
import Section7 from '@/components/Section7.vue';
import MainLayout from './layouts/MainLayout.vue';
import NavBar from './components/NavBar.vue';

</script>

<style scoped>

</style>