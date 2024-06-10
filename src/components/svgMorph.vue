<template>
  <section class="section2 h-screen gradient-1 overflow-hidden">
    <!-- <svg id="svg2"  fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0C0 0 44 75 87 112C99.6523 122.887 205.195 207.658 266 233C411.848 293.786 1040 779 1040 779H0V0Z" fill="#1a382da3" />
    </svg> -->

    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>


    <!-- <svg id="svg" ref="svg" width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M250 125C250 194.036 194.036 250 125 250C55.9644 250 0 194.036 0 125C0 55.9644 55.9644 0 125 0C194.036 0 250 55.9644 250 125Z" fill="#115c45"/>
    </svg> -->

    <svg id="svg" ref="svg" width="345" height="262" viewBox="0 0 345 262" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H345V262H0V0Z" fill="#43D99A"/>
    </svg>






  </section>
</template>

<script setup>
import anime from 'animejs';
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

const curvedSvgPath = 'M0 0C0 0 44 75 87 112C99.6523 122.887 205.195 207.658 266 233C411.848 293.786 1040 779 1040 779H0V0Z'
const svg = ref()

onMounted(() => {
  // gsap.to(test.value, { duration: 1, x: 100 });

  const timeline = anime.timeline({
    duration: 4000,
    autoplay: false,
  })

  timeline.add({
    targets: '#svg path',
    easing: 'linear',
    d: [{ value: curvedSvgPath }],
  }).add({
    targets: '#svg',
    opacity: 1,
    // scale: 1,
    width: '100%',
    height: '100%',
  }, '-=4000')
  // timeline.play()

  gsap.timeline({
    scrollTrigger: {
      start: 'top 30%',
      end: '+=100',
      trigger: '.section2',
      markers: true,
      once: true,
      onToggle: (self) => {
        console.log('ovde');
        if (self.isActive) timeline.play()
      },
    }
  })
  
})
</script>



<style scoped>
section {
  /* filter: url(#goo) blur(40px); */
}

#svg {
  opacity: 0;
  /* width: 100%;
  height: 100%; */
  /* scale: .5 */
  /* background-color: red; */
  /* background: linear-gradient(90deg, rgba(0,0,0,0) 56%, rgba(9,230,179,0.15) 100%); */
}

/* #svg2 {
  width: 100%;
  height: 100%;

} */

</style>