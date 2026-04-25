gsap.to("#box1", {
  x: 900,
  duration: 2,
  delay: 1,
});

gsap.from("#box2", {
  x: 900,
  duration: 2,
  delay: 1,
});

gsap.to("#box3", {
  x: 900,
  duration: 3,
  delay: 1.5,
  rotate: 360,
  backgroundColor: "green",
  borderRadius: "50%",
  scale: 0.5,
});

gsap.to(".box__1", {
  x: 900,
  duration: 1,
  delay: 1,
  rotate: 360,
  backgroundColor: "green",
  borderRadius: "50%",
  scale: 0.5,
  yoyo: true,
  repeat: -1,
});

// End Box Animation
/*
gsap.from("h2", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 1,
  stagger: 1,
});
*/
// End Text Animation
/*
var tl = gsap.timeline();

tl.to(".timeline-box-1", {
  x: 900,
  duration: 1.5,
  delay: 1,
  rotate: 360,
})
  tl.to(".timeline-box-2", {
    x: 1000,
    duration: 1.5,
    backgroundColor: "yellow ",
  })
  tl.to(".timeline-box-3", {
    x: 1100,
    duration: 1.5,
    backgroundColor: "green",
  });
*/

var tl=gsap.timeline();

tl.from(".header h2",{
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
})

tl.from(".header__nav a",{
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
})

tl.from(".title",{
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  scale: 0.5,
})
// End Timeline Animation