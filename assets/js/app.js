$(document).ready(function () {
  setInterval(() => {
    if ($('._rylic_cta_img').hasClass('_rylic_cta_img_anim')) {
      $('._rylic_cta_img').removeClass('_rylic_cta_img_anim')
    }
    else {
      $('._rylic_cta_img').addClass('_rylic_cta_img_anim')
    }
  }, 2000);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  function noScroll() {
    if ($('._preloader_wrap:visible').length == 0) {
      $("._body").toggleClass('_no_scroll');
    }
    else {
      $("._body").toggleClass('_no_scroll');
    }
  }

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
  document.querySelector("#processClick").addEventListener("click", e => {
    gsap.to(smoother, {
      scrollTop: smoother.offset("#process", "center center"),
      duration: 1
    });
  });
  document.querySelector("#serviceClick").addEventListener("click", e => {
    gsap.to(smoother, {
      scrollTop: smoother.offset("#service", "top top"),
      duration: 1
    });
  });
  document.querySelector("#projectClick").addEventListener("click", e => {
    gsap.to(smoother, {
      scrollTop: smoother.offset("#project", "top top"),
      duration: 1
    });
  });
  // Process section
  document.querySelector("#pros1").addEventListener("click", e => {
    gsap.to(smoother, {
      scrollTop: smoother.offset("#prosNum1", "top top"),
      duration: 1
    });
  });
  document.querySelector("#pros2").addEventListener("click", e => {
    gsap.to(smoother, {
      scrollTop: smoother.offset("#prosNum2", "top top"),
      duration: 1
    });
  });
  document.querySelector("#pros3").addEventListener("click", e => {
    gsap.to(smoother, {
      scrollTop: smoother.offset("#prosNum3", "top top"),
      duration: 1
    });
  });
  document.querySelector("#pros4").addEventListener("click", e => {
    gsap.to(smoother, {
      scrollTop: smoother.offset("#prosNum4", "top top"),
      duration: 1
    });
  });

  $("._navbar_menu_btn").click(() => {
    $("._navbar_menu_btn").toggleClass('_open');
    $("._mobile_menu_wrap").toggleClass('_mobile_menu_wrap_open');
    $("._body").toggleClass('_no_scroll');

  })

  $("._nav_service").click(() => {
    $("._navbar_menu_btn").toggleClass('_open');
    $("._mobile_menu_wrap").toggleClass('_mobile_menu_wrap_open');
    $("._body").toggleClass('_no_scroll');
    gsap.to(smoother, {
      scrollTop: smoother.offset("#service", "top top"),
      duration: 1
    });

  })

  $("._nav_project").click(() => {
    $("._navbar_menu_btn").toggleClass('_open');
    $("._mobile_menu_wrap").toggleClass('_mobile_menu_wrap_open');
    $("._body").toggleClass('_no_scroll');
    gsap.to(smoother, {
      scrollTop: smoother.offset("#project", "top top"),
      duration: 2.6,
    });
  })
  var elem = document.querySelector('._rylic_port_slider');
  var flkty = new Flickity(elem, {
    // options
    cellAlign: 'center',
    contain: true,
    pageDots: false,
    autoPlay: false,
    draggable: true,
    wrapAround: true,
    dragThreshold: 0,
    freeScroll: true,
    pauseAutoPlayOnHover: false,
    selectedAttraction: 0.01,
    friction: 0.15,
  });
  // $('._rylic_port_slider').slick({
  //   autoplay: false,
  //   pauseOnHover: true,
  //   autoplaySpeed: 1500,
  //   arrows: false,
  //   slidesToShow: 5,
  //   adaptiveHeight: true,
  //   swipeToSlide: true
  // });
  $('.slide_list').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    adaptiveHeight: true,
    useTransform: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // instagram scroll
  $('._rylic_instagram_content_ul1').slick({
    // autoplay:true,
    // autoplaySpeed:.001,
    arrows: false,
    // dots: false,
    // slidesToShow:3,
    // slidesToScroll:1,
    // adaptiveHeight: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    // slidesToShow: 1,
    // slidesToScroll: 1,
    slidesToShow: 4,
    slidesToScroll: 0.1,
    variableWidth: true,
    pauseOnHover: true,
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
    pauseOnHover: true,
    speed: 5000,
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
    pauseOnHover: true,
    speed: 5000,
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
  // instagram scroll

  // Preloader
  const header = new SplitType("#heading");


  const tl = gsap.timeline();

  // Array to Loop
  const array = [
    "Web App",
    "Branding",
    "Landing Page",
    "UI/UX",
    "Graphic Design",
    "Animation",
    "SaaS",
    "Mobile App",
    "Logo Design",
    "Website",
  ];
  var item = 1;

  gsap.delayedCall(1, () => {

    let textTimeline = gsap.timeline({ repeat: -1 });
    array.forEach((obj, i) => {
      textTimeline.to("._preloader_txt", {
        duration: 0.2,
        ease: 'power4.out',
        innerHTML: array[i],
        scale: .9,
      });
    });
    if ($(document).ready()) {
      textTimeline.repeat(0);
      textTimeline.to("._preloader_txt", {
        duration: 0.1,
        ease: 'Power3.out',
        innerHTML: "<img src='https://res.cloudinary.com/dmnwzu0xb/image/upload/v1670118902/new-images/logo_pd3pd9.svg' class='_rylic_logo_link_img' alt=''>",
        // innerHTML: "X",
        scale: 1.6,
        delay: .5
      })
      textTimeline.to("._preloader_txt", {
        duration: 0.2,
        ease: 'Power3.out',
        opacity: 0,
        delay: 1
      })
      textTimeline.to("._preloader_txt", {
        display: "none"
      }, ">")
        .to("._preloader_wrap", {
          height: 0,
          duration: .5,
          ease: 'Power4.out',
          y: -100,
          opacity: 0
        }, "<")
        .to("._preloader_wrap", {
          display: "none",
          duration: .01,
          onComplete: noScroll
        }, ">")
        .from('.word', {
          y: 60,
          rotate: '5deg',
          ease: 'Power4.out',
          transformOrigin: 'left',
          duration: .2,
          stagger: .01,
        }, "<")
        // tl.from('.word',{
        //   y:60,
        //   rotate: '5deg',
        //   ease:'Power4.out',
        //   transformOrigin:'left',
        //   duration: .5,
        //   stagger: .01,
        // })
        .from('._rylic_navbar_wrap', {
          y: -90,
          ease: 'Power4.out',
          duration: .5,
        })
        .from('._rylic_header_txt_title2', {
          y: -1000,
          ease: 'power3.out',
          duration: .15,
        })
        .from('._rylic_header_txt_p', {
          y: 50,
          ease: 'power3.out',
          duration: .5,
          opacity: 0
        })
        .from('._rylic_header_cursor_txt_li', {
          y: 20,
          ease: 'power3.out',
          duration: .2,
          opacity: 0,
          stagger: .1
        }, "<")
        .from('._rylic_process_bottom_btn_mob', {
          y: 30,
          ease: 'power3.out',
          duration: .3,
          opacity: 0,
        }, "<")
        .from('._rylic_header_cursor', {
          y: 50,
          ease: 'power3.out',
          duration: .5,
          opacity: 0,
          stagger: .1
        })
        .to('._rylic_header_cursor2', {
          x: -322,
          y: 15,
          ease: 'power3.out',
          duration: .5,
          zIndex: 20
        })
        .to('._rylic_header_cursor2', {
          y: -20,
          ease: 'power3.out',
          duration: .6,
        }, ">")
        .from('._rylic_header_txt_title2', {
          ease: 'power3.out',
          duration: .5,
          rotation: '0'
        }, "<")
        .to('._rylic_header_cursor2', {
          x: 0,
          y: 0,
          ease: 'power3.out',
          duration: .5,
        })
        .from('._rylic_header_shape1', {
          x: -100,
          ease: 'power3.out',
          duration: .3,
        }, 6.3)
        .from('._rylic_header_shape2', {
          x: 100,
          ease: 'power3.out',
          duration: .3,
        }, 6.3)
        .from('._rylic_header_circular_txt_wrap', {
          ease: 'power3.out',
          duration: .6,
          scale: 0,
          y: 20,
          rotate: -800
        }, 6.3)
        .from('._rylic_header_shape_r_wrap', {
          ease: 'power3.out',
          duration: .6,
          opacity: 0,
          rotate: 10,
          y: -20,
        }, 6.3)
        .from('._arrow', {
          ease: 'power3.out',
          duration: .6,
          opacity: 0,
        }, "<")
        .from('._rylic_service_wrap', {
          y: 60,
          duration: .6,
          ease: "Power3.out",
          opacity: 0.01,
          // scrollTrigger:{
          //   trigger: '._rylic_service_wrapper',
          //   start: `120px 650px`
          // },
        }, 6.3)

      // let cursor1 = document.querySelector(("._rylic_header_cursor1"))
      // let cursor2 = document.querySelector(("._rylic_header_cursor2"))
      // let cursor3 = document.querySelector(("._rylic_header_cursor3"))
      // let box = document.querySelector(("._rylic_header_txt_title2"))
      // let cursor1tl = gsap.timeline();
      // let cursor2tl = gsap.timeline();
      // let cursor3tl = gsap.timeline();

      // var random ;

      // setInterval(function() {
      //   random = Math.floor(Math.random() * 3);
      // },12000);
      // function headerAnim(){
      //   if(random == 0){
      //     console.log(random)
      //     cursor1tl.to(box,{
      //       ease:'power3.out',
      //       duration: 1,
      //       rotation:'0'
      //     })
      //     .to(cursor1,{
      //       x:810,
      //       y:-0,
      //       ease:'power3.out',
      //       duration: .7,
      //       zIndex:20
      //     })
      //     .to(cursor1,{
      //       y:-20,
      //       ease:'power3.out',
      //       duration: .7,
      //     },">")
      //     .from(box,{
      //       ease:'power3.out',
      //       duration: .7,
      //       rotation:'0'
      //     },"<")
      //     .to(cursor1,{
      //       x:0,
      //       y:0,
      //       ease:'power3.out',
      //       duration: .7,
      //     })
      //   }
      //   else if(random == 1){
      //     cursor2tl.to(box,{
      //       ease:'power3.out',
      //       duration: .8,
      //       rotation:'0'
      //     })
      //     .to(cursor2,{
      //       x:-324,
      //       y:-0,
      //       ease:'power3.out',
      //       duration: .5,
      //       zIndex:20
      //     })
      //     .to(cursor2,{
      //       y:-20,
      //       ease:'power3.out',
      //       duration: .5,
      //     },">")
      //     .from(box,{
      //       ease:'power3.out',
      //       duration: .5,
      //       rotation:'0'
      //     },"<")
      //     .to(cursor2,{
      //       x:0,
      //       y:0,
      //       ease:'power3.out',
      //       duration: .5,
      //     })
      //   }
      //   else{
      //     console.log(random)
      //     cursor3tl.to(box,{
      //       ease:'power3.out',
      //       duration: .8,
      //       rotation:'0'
      //     })
      //     .to(cursor3,{
      //       x:257,
      //       y:-154,
      //       ease:'power3.out',
      //       duration: .6,
      //       zIndex:20
      //     })
      //     .to(cursor3,{
      //       y:-174,
      //       ease:'power3.out',
      //       duration: .6,
      //     },">")
      //     .from(box,{
      //       ease:'power3.out',
      //       duration: .6,
      //       rotation:'0'
      //     },"<")
      //     .to(cursor3,{
      //       x:0,
      //       y:0,
      //       ease:'power3.out',
      //       duration: .6,
      //     })
      //   }
      // }
      // gsap.set(headerAnim, {delay: 13, onRepeat: headerAnim, repeat: -1, repeatDelay: 13});

    }
    else {
      textTimeline.repeat(-1);
    }
  });






  // marque animation
  gsap.fromTo('._real_marque_content_ul', {
    x: -2954,
    duration: 25,
    ease: "linear",
  }, {
    x: -9,
    duration: 25,
    ease: "linear",
    repeat: -1
  });

  gsap.fromTo('._rylic_trusted_content1', {
    x: -60,
    duration: 35,
    ease: "linear",
  }, {
    x: -2540,
    duration: 35,
    ease: "linear",
    repeat: -1,
  });
  gsap.fromTo('._rylic_trusted_content2', {
    x: -15,
    duration: 35,
    ease: "linear",
  }, {
    x: 2467,
    duration: 35,
    ease: "linear",
    repeat: -1
  });
  // scroll

  gsap.to('._rylic_header_shape_img', {
    y: 50,
    ease: "Power3.out",
    scrollTrigger: {
      trigger: '._rylic_header_wrapper',
      scrub: 1.4
    },
  })
  gsap.to('._rylic_process_shape1', {
    rotate: -9.5,
    ease: "Power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: '._rylic_process_wrapper',
    },
  })
  gsap.to('._rylic_header_shape_img2', {
    y: 65,
    ease: "Power4.out",
    scrollTrigger: {
      trigger: '._rylic_header_wrapper',
      scrub: 1.2
    },
  })
  gsap.to('._rylic_header_shape_r_img', {
    rotate: -15,
    ease: "Power4.out",
    scrollTrigger: {
      trigger: '._rylic_header_shape_r_wrap',
      scrub: 1
    },
  })
  // gsap.from('._rylic_service_wrap',{
  //   y:60,
  //   duration: .2,
  //   ease:"Power3.out",
  //   opacity:0.01,
  //   scrollTrigger:{
  //     trigger: '._rylic_service_wrapper',
  //     start: `120px 650px`
  //   },
  // })
  gsap.from('._rylic_service_content_top_img1', {
    y: 60,
    ease: "Power3.out",
    scrollTrigger: {
      trigger: '._rylic_service_content_wrap',
      scrub: 1
    },
    delay: 1.5
  })
  gsap.from('._rylic_service_content_top_img3', {
    y: 60,
    ease: "Power3.out",
    scrollTrigger: {
      trigger: '._rylic_service_content_wrap',
      scrub: 1
    },
    delay: 1.5
  })
  gsap.from('._rylic_service_content_top_img2', {
    y: 40,
    ease: "Power3.out",
    scrollTrigger: {
      trigger: '._rylic_service_content_wrap',
      scrub: 1.4
    },
    delay: 1.5
  })
  gsap.from('._rylic_service_shape', {
    y: 75,
    x: 20,
    ease: 'Power3.out',
    scrollTrigger: {
      trigger: '._rylic_port_wrapper',
      scrub: 1
    }
  })
  gsap.from('._rylic_service_shape_mob', {
    y: 20,
    x: 20,
    ease: 'Power3.out',
    scrollTrigger: {
      trigger: '._rylic_service_wrapper',
      scrub: 1
    }
  })
  gsap.from('._rylic_port_shape', {
    y: 50,
    x: -30,
    duration: .8,
    ease: 'Power3.out',
    scrollTrigger: {
      trigger: '._rylic_port_wrapper',
      scrub: 1
    }
  })
  gsap.from('._rylic_port_shape_ball', {
    y: -50,
    x: -30,
    duration: .5,
    // opacity: .7,
    ease: 'Power3.out',
    scrollTrigger: {
      trigger: '._rylic_port_wrapper',
      scrub: 1
    }
  })
  gsap.from('._rylic_process_content_mid_li', {
    rotation: 0,
    scale: .9,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: '._rylic_process_content ',
      scrub: 1,
      start: "top center",
      end: "center center",
    }
  })
  gsap.from('._rylic_project_card_image_wrap', {
    y: 50,
    duration: .3,
    ease: "Power4.out",
    scrollTrigger: {
      trigger: '._rylic_project_card_image_wrap',
      scrub: 1
      // start: "top center"
    },
    stagger: true
  })
  gsap.from('._real_marque_shape', {
    y: 75,
    x: -55,
    rotation: -10,
    ease: 'Power3.out',
    scrollTrigger: {
      trigger: '._real_marque_wrap',
      scrub: 1
    },
  })
  gsap.from('._real_marque_content_wrap', {
    y: -90,
    rotation: 5,
    ease: 'Power3.out',
    duration: .2,
    opacity: 0.8,
    scrollTrigger: {
      trigger: '._real_marque_wrap',
      scrub: 1
    }
  })
  gsap.from('._rylic_testimonial_shape', {
    y: 30,
    rotation: -15,
    ease: 'Power3.out',
    scrollTrigger: {
      trigger: '._rylic_testimonial_wrapper',
      scrub: 1
    }
  })
  gsap.to('._rylic_cta_shape', {
    y: 10,
    rotation: 8,
    ease: 'Power3.out',
    scrollTrigger: {
      trigger: '._rylic_cta_wrapper',
      scrub: 1
    }
  })
  gsap.from('._rylic_instagram_content_ul_wrap', {
    opacity: 0,
    ease: 'Power3.out',
    scrollTrigger: {
      trigger: '._rylic_instagram_content_wrap',
    },
  })
  gsap.from('._rylic_trusted_content', {
    y: 20,
    opacity: 0,
    ease: 'Power3.out',
    scrollTrigger: {
      trigger: '._rylic_trusted_content_wrap',
      scrub: 1
    },
  })
  gsap.from('._rylic_port_slider', {
    x: 300,
    opacity: 0,
    ease: 'Power3.easeOut',
    scrollTrigger: {
      trigger: '._rylic_port_slider_wrap',
    },
    duration: 1.2,
  })
  // gsap.from("._rylic_testimonial_duck_shape",{
  //   y:100,
  //   ease:"Power3.out",
  // })

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
        gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
      }
    }
  });

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });


});




// Alpine
const date = {
  year: '',
  getDate() {
    const getDate = new Date;
    this.year = getDate.getFullYear();
  }
}

const selectedNumber = {
  number: 0
}
const selectedNumber2 = {
  number: 0
}

const instaDiv = document.querySelector('._rylic_instagram_content_ul_wrap');

instaDiv.addEventListener('click', () => {
  window.open("https://www.instagram.com/rylicstudio/");
});

// scroll to top
$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});
// // mobile nav
// gsap.set('._mobile_menu_wrap', {yPercent:120, autoAlpha:1})

// var menu = gsap.timeline({paused:true, reversed: true});
// menu.from("._mobile_menu_wrap", {yPercent:0, duration:1, ease:'power2.inOut'})
// .from("._mobile_nav_li", {autoAlpha:0, x:-25, duration:0.2,stagger:0.1})

// // toggle the animation / diff speed = timeScale(2) faster

// function toggleMenu() {
//   menu.reversed() ? menu.timeScale(1).play() : menu.timeScale(2).reverse(); 
// }
// document.querySelector("._navbar_menu_btn").addEventListener("click", toggleMenu);