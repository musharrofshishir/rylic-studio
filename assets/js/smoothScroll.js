gsap.registerPlugin(ScrollTrigger);

// Smooth scroll setup
const bodyScrollBar = Scrollbar.init(document.body, { 
  damping: 0.05, 
  delegateTo: document
 });
 
bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();

// How to get them to work together
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});


// Regular ScrollTrigger stuff
// gsap.to("._rylic_port_shape_ball", {
//   y: 200,
//   rotation: 360,
//   scrollTrigger: {
//     trigger: "._rylic_port_shape_ball",
//     markers: true,
//     scrub: true,
//   }
// });