<template>
  <section class="h-screen gradient-2 overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>

    <div 
      ref="g1"
      class="g1 top-0 left-0 position-absolute"
      style="background: radial-gradient(circle, rgba(9, 230, 178, 0.4) 0, rgba(9,230,179, 0) 50%) no-repeat; width: 600px; height: 600px; "
    ></div>

  </section>
</template>

<script setup>
import anime from 'animejs';
import { onMounted, ref } from 'vue';

// const g1 = ref()
// const g1 = document.querySelector('.g1')

onMounted(() => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function moveElement() {
    const container = document.querySelector('section');
    const element = document.querySelector('.g1');

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const elementWidth = element.clientWidth;
    const elementHeight = element.clientHeight;

    const randomX = getRandomInt(0, containerWidth - elementWidth);
    const randomY = getRandomInt(0, containerHeight - elementHeight);

    anime({
      targets: '.g1',
      translateX: randomX,
      translateY: randomY,
      easing: 'linear',
      duration: 2000,
      complete: function () {
        moveElement()
      } 
    });
  }

  moveElement();
})
</script>



<style scoped>
section {
  filter: url(#goo) blur(40px);
}

/* .gradient-1 {
  background: linear-gradient(90deg, rgba(0,0,0,0) 56%, rgba(9,230,179,0.15) 100%);
} */
</style>