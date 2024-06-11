import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip) 

document.addEventListener('DOMContentLoaded', () => {

  const vueImage = document.querySelector('.vue')
  const vueImageOld = document.querySelector('.vueWrapper')
  const vueImageNew = document.querySelector('.vueImageNew')

  gsap.to(vueImage, {
    scrollTrigger: {
      trigger: '#section_2',
      start: 'top+=50 center',
      end: 'center center',
      // markers: true,
      onEnter: () => {
        const vueImageState = Flip.getState(vueImage)
        vueImageNew.appendChild(vueImage)
        Flip.from(vueImageState) 
        gsap.to(vueImage, { scale: 4 })
      },
      onLeaveBack: () => {
        const vueImageState = Flip.getState(vueImage)
        vueImageOld.appendChild(vueImage)
        Flip.from(vueImageState)      
        gsap.to(vueImage, {scale: 1})
      }
    }
  })

  const laravelImage = document.querySelector('.laravel')
  const laravelImageOld = document.querySelector('.laravelWrapper')
  const laravelImageNew = document.querySelector('.laravelImageNew')

  gsap.to(laravelImage, {
    scrollTrigger: {
      trigger: '#section_3',
      start: 'top+=50 center',
      end: 'center center',
      // markers: true,
      onEnter: () => {
        const laravelImageState = Flip.getState(laravelImage)
        laravelImageNew.appendChild(laravelImage)
        Flip.from(laravelImageState) 
        gsap.to(laravelImage, {scale: 4})
      },
      onLeaveBack: () => {
        const laravelImageState = Flip.getState(laravelImage)
        laravelImageOld.appendChild(laravelImage)
        Flip.from(laravelImageState)      
        gsap.to(laravelImage, {scale: 1})
      }
    }
  })

  const sqlImage = document.querySelector('.sql')
  const sqlImageOld = document.querySelector('.sqlWrapper')
  const sqlImageNew = document.querySelector('.sqlImageNew')

  gsap.to(sqlImage, {
    scrollTrigger: {
      trigger: '#section_4',
      start: 'top+=50 center',
      end: 'center center',
      // markers: true,
      onEnter: () => {
        const sqlImageState = Flip.getState(sqlImage)
        sqlImageNew.appendChild(sqlImage)
        Flip.from(sqlImageState) 
        gsap.to(sqlImage, {scale: 4})
      },
      onLeaveBack: () => {
        const sqlImageState = Flip.getState(sqlImage)
        sqlImageOld.appendChild(sqlImage)
        Flip.from(sqlImageState)      
        gsap.to(sqlImage, {scale: 1})
      }
    }
  })

  const vuetifyImage = document.querySelector('.vuetify')
  const vuetifyImageOld = document.querySelector('.vuetifyWrapper')
  const vuetifyImageNew = document.querySelector('.vuetifyImageNew')

  gsap.to(vuetifyImage, {
    scrollTrigger: {
      trigger: '#section_5',
      start: 'top+=50 center',
      end: 'center center',
      // markers: true,
      onEnter: () => {
        const vuetifyImageState = Flip.getState(vuetifyImage)
        vuetifyImageNew.appendChild(vuetifyImage)
        Flip.from(vuetifyImageState) 
        gsap.to(vuetifyImage, { scale: 4 })
        gsap.to('.skills', { opacity: 0 })
        
      },
      onLeaveBack: () => {
        const vuetifyImageState = Flip.getState(vuetifyImage)
        vuetifyImageOld.appendChild(vuetifyImage)
        Flip.from(vuetifyImageState)      
        gsap.to(vuetifyImage, { scale: 1 })
        gsap.to('.skills', { opacity: 1 })
      }
    }
  })

});
