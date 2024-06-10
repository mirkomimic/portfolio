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
      markers: true,
      onEnter: () => {
        const vueImageState = Flip.getState(vueImage)
        vueImageNew.appendChild(vueImage)
        Flip.from(vueImageState) 
        gsap.to(vueImage, {scale: 4})
      },
      onLeaveBack: () => {
        const vueImageState = Flip.getState(vueImage)
        vueImageOld.appendChild(vueImage)
        Flip.from(vueImageState)      
        gsap.to(vueImage, {scale: 1})
      }
    }
  })

});
