var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  // console.log(dets.x, dets.y);
  gsap.to(cursor,{
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    ease: "power3.out"
  })
});

imageDiv.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 3,
  })
})

imageDiv.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1,
  })
})