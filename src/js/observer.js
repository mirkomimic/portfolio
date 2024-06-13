import { gsap } from 'gsap'
import Observer from 'gsap/Observer';
import Lenis from 'lenis';

class ObserverAnimation {

  sections = document.querySelectorAll('section')

  constructor() {
    this.createLenis()
    this.scrollToSection()
    this.render()
  }

  createLenis() {
    this.lenis = new Lenis({
      // lerp: .1,
      // duration: .1,
      easing(x) {
        // https://easings.net/en
        return Math.sin((x * Math.PI) / 2);
      }
    })
  }

  render(time) {
    this.lenis.raf(time)
    requestAnimationFrame(this.render.bind(this))
  }

  scrollToSection() {
    this.sections.forEach((e, index) => {
      Observer.create({
        target: e,
        type: "wheel,touch",
        onUp: () => {
          if (index == 0) return

          this.lenis.scrollTo(`#section_${index}`)

          // gsap.to(window, {
          //   duration: .5,
          //   scrollTo: `#section_${index}`
          // });
        },
        onDown: () => {
          if ((this.sections.length - 1) == index) return

          this.lenis.scrollTo(`#section_${index + 2}`)

          // gsap.to(window, {
          //   duration: .5,
          //   scrollTo: `#section_${index + 2}`
          // });
        },
      });
    })  
  }
}

new ObserverAnimation()

// document.addEventListener('DOMContentLoaded', () => {
//   const sections = document.querySelectorAll('section')

//   const scroll = () => {
//     sections.forEach((e, index) => {
      
//       Observer.create({
//         target: e,
//         type: "wheel",
//         onUp: () => {
//           if (index == 0) return

//           gsap.to(window, {
//             duration: .5,
//             scrollTo: `#section_${index}`
//           });
//         },
//         onDown: () => {
//           if ((sections.length - 1) == index) return

//           gsap.to(window, {
//             duration: .5,
//             scrollTo: `#section_${index + 2}`
//           });
//         },
//       });

//     })
//   }
//   scroll()

// })