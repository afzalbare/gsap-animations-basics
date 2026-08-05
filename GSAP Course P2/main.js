// var tl = gsap.timeline();

var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");
var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 1,
});

tl.from("#full ul li", {
  x: 60,
  duration: 1,
  stagger: 0.25,
  opacity: 0,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

close.addEventListener("click", function () {
  tl.reverse();
});
