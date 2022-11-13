$( document ).ready(function() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // gsap.registerPlugin(ScrollTrigger);

  let smoother = ScrollSmoother.create({
  smooth: 1,   // seconds it takes to "catch up" to native scroll position
  effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
});

document.querySelector("#processClick").addEventListener("click", e => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  // smoother.scrollTo("#process", true, "center center");
  
  // or you could animate the scrollTop:
  gsap.to(smoother, {
   scrollTop: smoother.offset("#process", "center center"),
   duration: 1
  });
});

  $('._rylic_port_slider').slick({
      autoplay:true,
      arrows: false,
      slidesToShow:4,
      adaptiveHeight: true
  });
  $('.slide_list').slick({
      autoplay:true,
      arrows: false,
      dots: true,
      slidesToShow:3,
      adaptiveHeight: true
  });
  $('._rylic_instagram_content_ul1').slick({
      // autoplay:true,
      // autoplaySpeed:.001,
      arrows: false,
      // dots: false,
      // slidesToShow:3,
      // slidesToScroll:1,
      // adaptiveHeight: true,
      pauseOnHover:false,
      speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
  });
  $('._rylic_instagram_content_ul2').slick({
      // autoplay:true,
      // autoplaySpeed:.001,
      arrows: false,
      // dots: false,
      // slidesToShow:3,
      // slidesToScroll:1,
      // adaptiveHeight: true,
      pauseOnHover:false,
      speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    rtl: true,
  });
  $('._rylic_instagram_content_ul3').slick({
      // autoplay:true,
      // autoplaySpeed:.001,
      arrows: false,
      // dots: false,
      // slidesToShow:3,
      // slidesToScroll:1,
      // adaptiveHeight: true,
      pauseOnHover:false,
      speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
  });
  
    // Preloader
    const header = new SplitType("#heading");

    
    const tl = gsap.timeline();
    
  // Array to Loop
  const array = [
    "Website",
    "Branding",
    "Landing Page",
    "UI/UX",
    "Graphic Design",
    "Animation",
    "SaaS",
    "Mobile App",
    "Logo Design",
    "Web App",
  ];
  var item = 1;
  
gsap.delayedCall(1, () => {

  let textTimeline = gsap.timeline({repeat:-1});
  array.forEach((obj, i) => {
    textTimeline.to("._preloader_txt", {
      duration: 0.2,
      ease:'power4.out',
      innerHTML: array[i],
      scale: .9,
    });
  });
  if($( document ).ready()){
    textTimeline.repeat(0);
    textTimeline.to("._preloader_txt", {
      duration: 0.1,
      ease:'Power3.out',
      innerHTML: "<img src='https://res.cloudinary.com/dmnwzu0xb/image/upload/v1668313555/rylic-assets/images/logo_x7z1v0.svg' class='_rylic_logo_link_img' alt=''>",
      // innerHTML: "X",
      scale: 1.5,
      delay: .8
    })
    textTimeline.to("._preloader_txt", {
      duration: 0.3,
      ease:'Power3.out',
      opacity:0,
      delay: 1.2
    })
    textTimeline.to("._preloader_txt", {
      display: "none"
    })
    .to("._preloader_wrap",{
      backgroundColor:'#040229',
      duration: .4,
      ease:'Power2.out',
    },2.4)
    .to("._preloader_wrap",{
      height: 0,
      duration: 1,
      ease:'Power4.out',
      delay:.5,
      y:-100
    })
    .to("._preloader_wrap",{
      display: "none"
    },">")
    .from('.word',{
      y:60,
      rotate: '5deg',
      ease:'Power4.out',
      transformOrigin:'left',
      duration: .5,
      stagger: .01,
    },"<")
    // tl.from('.word',{
    //   y:60,
    //   rotate: '5deg',
    //   ease:'Power4.out',
    //   transformOrigin:'left',
    //   duration: .5,
    //   stagger: .01,
    // })
    .from('._rylic_navbar_wrap',{
      y:-90,
      ease:'Power4.out',
      duration: .5,
    })
    .from('._rylic_header_txt_title2',{
      y:-1000,
      ease:'power3.out',
      duration: .2,
    })
    .from('._rylic_header_txt_p',{
      y:50,
      ease:'power3.out',
      duration: .5,
      opacity:0
    })
    .from('._rylic_header_cursor',{
      y:50,
      ease:'power3.out',
      duration: .5,
      opacity:0,
      stagger: .1
    })
    .to('._rylic_header_cursor2',{
      x:-324,
      y:-0,
      ease:'power3.out',
      duration: .5,
      zIndex:20
    })
    .to('._rylic_header_cursor2',{
      y:-20,
      ease:'power3.out',
      duration: .5,
    },">")
    .from('._rylic_header_txt_title2',{
      ease:'power3.out',
      duration: .5,
      rotation:'0'
    },"<")
    .to('._rylic_header_cursor2',{
      x:0,
      y:0,
      ease:'power3.out',
      duration: .5,
    })
    .from('._rylic_header_shape1',{
      x:-100,
      ease:'power3.out',
      duration: .5,
    },">")
    .from('._rylic_header_shape2',{
      x:100,
      ease:'power3.out',
      duration: .5,
    },"<")
    .from('._rylic_header_circular_txt_wrap',{
      ease:'power3.out',
      duration: .8,
      scale:0,
      y:20,
      rotate:-800
    },"<")
    .from('._rylic_header_shape_r_wrap',{
      ease:'power3.out',
      duration: .8,
      opacity:0,
      rotate:10,
      y:-20,
    },"<")
    .from('._arrow',{
      ease:'power3.out',
      duration: .8,
      opacity:0,
    },">")
  }
  else {
    textTimeline.repeat(-1);
  }
});




  

  // marque animation
  gsap.fromTo('._real_marque_content_ul',{
    x: -2860,
    duration:25,
    ease: "linear",
  },{
    x: 40,
    duration:25,
    ease: "linear",
    repeat: -1
  });
  
  gsap.fromTo('._rylic_trusted_content1',{
    x: -60,
    duration:35,
    ease: "linear",
  },{
    x: -2540,
    duration:35,
    ease: "linear",
    repeat: -1
  });
  gsap.fromTo('._rylic_trusted_content2',{
    x: -15,
    duration:35,
    ease: "linear",
  },{
    x: 2467,
    duration:35,
    ease: "linear",
    repeat: -1
  });
  // scroll
  
  gsap.to('._rylic_header_shape_img',{
    y:50,
    ease:"Power3.out",
    scrollTrigger:{
      trigger: '._rylic_header_shape1',
      scrub:1.4
    },
  })
  gsap.to('._rylic_header_shape_img2',{
    y:65,
    ease:"Power4.out",
    scrollTrigger:{
      trigger: '._rylic_header_shape2',
      scrub:1.2
    },
  })
  gsap.to('._rylic_header_shape_r_img',{
    rotate:-15,
    ease:"Power4.out",
    scrollTrigger:{
      trigger: '._rylic_header_shape_r_wrap',
      scrub:1
    },
  })
  gsap.from('._rylic_service_wrap',{
    y:60,
    ease:"Power3.out",
    opacity:0,
    scrollTrigger:{
      trigger: '._rylic_service_wrapper',
      start: `120px 650px`
    },
  })
  gsap.from('._rylic_service_content_top_img',{
    y:60,
    ease:"Power3.out",
    scrollTrigger:{
      trigger: '._rylic_service_content_wrap',
      scrub:1
    },
    delay:1.5
  })
  gsap.from('._rylic_service_shape',{
    y:75,
    x:20,
    ease:'Power3.out',
    scrollTrigger:{
      trigger: '._rylic_port_wrapper',
      scrub:1
    }
  })
  gsap.from('._rylic_port_shape',{
    y:50,
    x:-30,
    duration:.8,
    ease:'Power3.out',
    scrollTrigger:{
      trigger: '._rylic_port_wrapper',
      scrub:1
    }
  })
  gsap.from('._rylic_port_shape_ball',{
    y:-50,
    x:-30,
    duration:.5,
    opacity:.7,
    ease:'Power3.out',
    scrollTrigger:{
      trigger: '._rylic_port_wrapper',
      scrub:1
    }
  })
  gsap.from('._rylic_process_content_mid_li',{
    rotation:0,
    scale:.9,
    ease:"bounce.out",
    scrollTrigger:{
      trigger: '._rylic_process_content ',
      scrub:1,
      start: "top center"
    }
  })
  gsap.from('._rylic_project_card_image_wrap',{
    y:50,
    duration:.3,
    ease:"Power4.out",
    scrollTrigger:{
      trigger: '._rylic_project_card_image_wrap',
      scrub:1
      // start: "top center"
    },
    stagger:true
  })
  gsap.from('._real_marque_shape',{
    y:75,
    x:-55,
    rotation:-10,
    ease:'Power3.out',
    scrollTrigger:{
      trigger: '._real_marque_wrap',
      scrub:1
    },
  })
  gsap.from('._real_marque_content_wrap',{
    y:-90,
    rotation:5,
    ease:'Power3.out',
    duration:.2,
    opacity:0.8,
    scrollTrigger:{
      trigger: '._real_marque_wrap',
      scrub:1
    }
  })
  gsap.from('._rylic_testimonial_shape',{
    y:30,
    rotation:-15,
    ease:'Power3.out',
    scrollTrigger:{
      trigger: '._rylic_testimonial_wrapper',
      scrub:1
    }
  })
  
  // Skew on scroll
  let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 
  
  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -300);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {skew:0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
      }
    }
  });
  
  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

    
});

  // Alpine
  const date ={
    year: '',
    getDate(){
      const getDate = new Date;
      return getDate.getFullYear()
    }
  }