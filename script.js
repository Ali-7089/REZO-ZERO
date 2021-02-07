// var home = document.querySelector('#home');
// var line = document.querySelector('#line');

// home.addEventListener('click',function(){
//     line.style.width = '90px';
// })

// var sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);


// var dj = document.querySelector('#dj');
// dj.value = 0;

// var body = document.body,
//     html = document.documentElement;

// var height = Math.max( body.scrollHeight, body.offsetHeight,
//                     html.clientHeight,html.scrollHeight,html.offsetHeight );


//       dj.addEventListener('input',function(){
//           window.scrollTo(0, ((height/100)*dj.value)-789);
//           console.log(((height/100)*dj.value)-789);
//       })              


gsap.to(".image img" , {
    scrollTrigger:{
        trigger: "#back",
        start: "top centre",
        scrub: 1,
        duration: 2,
        // markers: true,
    },
    y: 225,
    ease: 'linear'
})

gsap.to("#lfirst img" , {
    scrollTrigger: {
        trigger : "#select",
        start:"top 40%",
        scrub: 2,
        // markers:true
    },
    y: 225,
    ease:'linear'
})

gsap.to("#lsecond img" , {
    scrollTrigger: {
        trigger : "#select",
        start:"top 40%",
        scrub: 2,
        // markers:true
    },
    y: 225,
    ease:'linear'
})

gsap.to("#lthird img" , {
    scrollTrigger: {
        trigger : "#select",
        start:"top 40%",
        scrub: 2,
        // markers:true
    },
    y: 225,
    ease:'linear'
})

gsap.to("#rfirst img" , {
    scrollTrigger: {
        trigger : "#select",
        start:"top 40%",
        scrub: 2,
        // markers:true
    },
    y: 225,
    ease:'linear'
})

gsap.to("#rsecond img" , {
    scrollTrigger: {
        trigger : "#select",
        start:"top 40%",
        scrub: 2,
        // markers:true
    },
    y: 225,
    ease:'linear'
})

gsap.to("#rthird img" , {
    scrollTrigger: {
        trigger : "#select",
        start:"top 40%",
        scrub: 2,
        // markers:true
    },
    y: 225,
    ease:'linear'
})