gsap.from("#page-1 #box-1", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
});

gsap.from("#page-2 #box-2", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page-2 #box-2",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});

gsap.from("#page-2 h2", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: "#page-2, h2",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});

gsap.from("#page-2 h3", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#page-2, h2",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});

// gsap.from("#page-3 #box-3", {});

gsap.from("#page-3 #box-3", {
  scale: 0,
  opacity: 0,
  rotate: 720,
  duration: 1,
  scrollTrigger: {
    trigger: "#page-3 #box-3",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: 2 ,
  },
});
