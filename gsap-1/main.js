gsap.to("#box1",{
    x: 900,
    duration: 2, 
    delay: 1,  
})

gsap.from("#box2",{
    x: 900,
    duration: 2, 
    delay: 1,  
})

gsap.to("#box3",{
    x: 900,
    duration: 3, 
    delay: 1.5,  
    rotate: 360,
    backgroundColor: "green",
    borderRadius: "50%",
    scale: 0.5,
})

gsap.to(".box__1",{
    x: 900,
    duration: 1, 
    delay: 1,  
    rotate: 360,
    backgroundColor: "green",
    borderRadius: "50%",
    scale: 0.5,
    yoyo: true,
    repeat: -1,
})

// End Box Animation 

gsap.from("h2",{
    opacity:0,
    duration: 1,
    y:30,
    delay: 1,
    stagger:1,
})

