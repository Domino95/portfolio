import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
let animationFinished = false
export const animations = () => {
    if (!animationFinished) {
        const titles = document.querySelectorAll(".titlewrapper")
        titles.forEach(titles => {
            gsap.fromTo(titles,
                { y: 120, autoAlpha: 0 },
                {
                    y: 0, autoAlpha: 1, duration: 1, delay: 0.5, ease: "easeInOut",
                    scrollTrigger: {
                        trigger: titles,
                        start: "top 120%",
                        end: "top 80%",
                        scrub: 1
                    }
                })
        })
        const projects = document.querySelectorAll(".projectwrapper")
        projects.forEach(projects => {
            gsap.fromTo(projects,
                { y: 120, autoAlpha: 0 },
                {
                    y: 0, autoAlpha: 1, duration: 1, delay: 0.5, ease: "easeInOut",
                    scrollTrigger: {
                        trigger: projects,
                    }
                })
        })
        const contactForm = document.querySelector(".contactForm")
        gsap.fromTo(contactForm,
            { y: 120, autoAlpha: 0 },
            {
                y: 0, autoAlpha: 1, duration: 1, delay: 0.5, ease: "easeInOut",
                scrollTrigger: {
                    trigger: contactForm,
                    start: "top 120% ",

                }
            })
        const technologiesList = document.querySelectorAll(".iconContainter")
        technologiesList.forEach((item, index) => {
            if (index % 2 === 0) {
                gsap.fromTo(item, { y: 100, autoAlpha: 0 }, {
                    y: 0, autoAlpha: 1, duration: 1, ease: "easeInOut", scrollTrigger: {
                        trigger: item,
                        start: "top: 90%",
                    }
                })
            } else {
                gsap.fromTo(item, { y: -100, autoAlpha: 0 }, {
                    y: 0, autoAlpha: 1, duration: 1, ease: "easeInOut", scrollTrigger: {
                        trigger: item,
                        start: "bottom 90%",
                    }
                })
            }
        })
    }
    animationFinished = true
}