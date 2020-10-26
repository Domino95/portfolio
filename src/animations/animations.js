import gsap from "gsap"

let setall = false
export const setAll = () => {
    if (!setall) {
        const technologies = document.querySelectorAll(".iconContainter")
        const projectsTitle = document.querySelectorAll("#projectsTitle")
        const technologiesTitle = document.querySelectorAll("#technologies")
        const contact = document.querySelectorAll("#contact")
        gsap.set(technologies, { autoAlpha: 0 })
        gsap.set(projectsTitle, { autoAlpha: 0 })
        gsap.set(technologiesTitle, { autoAlpha: 0 })
        gsap.set(contact, { autoAlpha: 0 })
        setall = true
    }
}

let technologyDone = false
export const technologiesAnimation = () => {
    if (!technologyDone) {
        if (window.innerWidth < 1124) {
            const technologies = document.querySelectorAll(".iconContainter")
            const tl = gsap.timeline({ eases: "linear" });
            tl.fromTo(technologies[0], { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            tl.fromTo(technologies[1], { y: -120, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            tl.fromTo(technologies[2], { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            tl.fromTo(technologies[3], { y: -120, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            tl.fromTo(technologies[4], { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            tl.fromTo(technologies[5], { y: -120, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            tl.fromTo(technologies[6], { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            tl.fromTo(technologies[7], { y: -120, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            console.log("FDBJKBFDK")
            technologyDone = true
        }
        else {
            const technologies = document.querySelectorAll(".iconContainter")
            const tl = gsap.timeline({ eases: "power3in.Out" });
            tl.fromTo(technologies[0], { x: -120, autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
            tl.fromTo(technologies[1], { x: 120, autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
            tl.fromTo(technologies[2], { x: -120, autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
            tl.fromTo(technologies[3], { x: 120, autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
            tl.fromTo(technologies[4], { x: -120, autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
            tl.fromTo(technologies[5], { x: 120, autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
            tl.fromTo(technologies[6], { x: -120, autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
            tl.fromTo(technologies[7], { x: 120, autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
            technologyDone = true
        }
    }
}

let projectsTitle = false
export const projectsTitleAnimation = () => {
    if (!projectsTitle) {
        const item = document.querySelectorAll("#projectsTitle")
        gsap.fromTo(item, { x: -120, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1.5, ease: "back.out(3)", delay: 0.5 })
        projectsTitle = true
    }
}
let technologiesTitle = false
export const technologyTitleAnimation = () => {
    if (!technologiesTitle) {
        const item = document.querySelectorAll("#technologies")
        gsap.fromTo(item, { x: -120, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1.5, ease: "back.out(3)", delay: 0.5 })
        technologiesTitle = true
    }
}
let contactTitle = false
export const contactTitleAnimation = () => {
    if (!contactTitle) {
        const item = document.querySelectorAll("#contact")
        gsap.fromTo(item, { x: -120, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1.5, ease: "back.out(3)", delay: 0.5 })
        contactTitle = true
    }
}