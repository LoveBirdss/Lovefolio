const { gsap } = window; // This assumes GSAP is available globally

gsap.registerPlugin(Observer) 
const slides = [...document.getElementsByClassName('slide')]
const radius = 200
const progress = {
    value: 0
}

const finalProgress = {
    value: 0
}

const setSlideDimensionsBasedOnRadius = () => {
    slides.forEach((slide) => {
        const size = radius* 2 / Math.sqrt(3)
        slide.style.height = `${size}px`
        slide.style.width = `${size}px`
        slide.style.margin = `${-size /2}px 0px 0px ${-size /2 }px`
    })
}

const positionSlides = () => {
    slides.forEach((slide,index) => {
        const angle = index/slides.length + progress.value
        const angleInDegrees = angle * 360
        const angleInRadians = angle * Math.PI*2
        const zDisplacement = Math.cos(angleInRadians) * radius
        const xDisplacement = Math.sin(angleInRadians) * radius
        slide.style.transform = `translate3d(${xDisplacement}px,0px,${zDisplacement}px) rotateY(${angleInDegrees}deg)`
    })
    if(progress.value !==finalProgress.value) {
        window.requestAnimationFrame(positionSlides)
    }
}

Observer.create({
    target: '.carousel',
    type: 'touch,pointer',
    onChange: (self) => {
        console.log(self.deltaX)
        finalProgress.value = self.deltaX*0.005
        gsap.to(progress, {
            duration: 4,
            ease:'expo.out',
            value: `+=${self.deltaX*0.01}`
        })
        positionSlides()
    }
})

setSlideDimensionsBasedOnRadius()
positionSlides()