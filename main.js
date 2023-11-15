
/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({
 origin: 'top',
 distance: '60px',
 duration:2500,
 delay: 400
 // reset: true, //Animation repeat
})


sr.reveal('#image',{delay : 600})
sr.reveal('.a',{interval: 100})
sr.reveal('#INTRO',{interval: 100})
sr.reveal('.styles__section',{interval: 100})
sr.reveal('.footer',{interval: 100})
sr.reveal('.discount__img-1',{origin: 'left'})
sr.reveal('.discount__img-2',{origin: 'right'})

