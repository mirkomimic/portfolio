import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import Observer from 'gsap/Observer';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin) 

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section')

  const scroll = () => {
    sections.forEach((e, index) => {
      
      Observer.create({
        target: e,
        type: "wheel",
        onUp: () => {
          gsap.to(window, {
            duration: .5,
            scrollTo: `#section_${index}`
          });
        },
        onDown: () => {
          if ((sections.length - 1) == index) return false

          gsap.to(window, {
            duration: .5,
            scrollTo: `#section_${index + 2}`
          });
        },
      });

    })
  }
  scroll()

})