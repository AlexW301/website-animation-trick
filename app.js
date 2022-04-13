const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: '0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});
// "-=1" makes it so these two transitions start around the same time
tl.to('.intro', {y: "-100%", deration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1")