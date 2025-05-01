

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


document.querySelectorAll(".elem").forEach(function(elem) {
    let rotate = 0;
    let diffrot = 0;
    const img = elem.querySelector("img");

    elem.addEventListener("mousemove", function(e) {
        const rect = elem.getBoundingClientRect();
        const diffY = e.clientY - rect.top;
        const diffX = e.clientX - rect.left;

        // Clamp the vertical position to stay within the .elem
        const clampedY = Math.max(0, Math.min(diffY, rect.height));

        diffrot = e.clientX - rotate;
        rotate = e.clientX;

        gsap.to(img, {
            opacity: 1,
            ease: "power3.out",
            top: clampedY,
            left: diffX,
            rotate: gsap.utils.clamp(-40, 40, diffrot * 0.8),
            duration: 0.3
        });
    });

    elem.addEventListener("mouseenter", function() {
        gsap.to(img, {
            scale: 1.2, // increase size slightly on hover
            opacity: 1,
            duration: 0.3
        });
    });

    elem.addEventListener("mouseleave", function() {
        gsap.to(img, {
            opacity: 0,
            scale: 1,
            rotate: 0,
            duration: 0.3
        });
    });
});



function firstpageanim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1,
        delay:-1,
        stagger:.2
    })
    tl.from("#herofooter",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut

        
    })
}

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`

    })
};

circleMouseFollower();
firstpageanim();

