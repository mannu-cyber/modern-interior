const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

let tl = gsap.timeline();

tl.from(".nav a, .navb", {
  y: 20,
  // duration:.3,
  stagger: 0.2,
  opacity: 0,
  scale: 0,
});

Shery.textAnimate(".page1 h1", {
  style: 2,
  y: 50,
  delay: 0.1,
  duration: 0.2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.2,
});

let img1 = document.querySelector(".page3 .right img");

img1.addEventListener("mouseover", function () {
  Shery.imageEffect(".page3 .right img", {
    style: 5,

    gooey: true,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.6926764784862751 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
      noiseDetail: { value: 7.44, range: [0, 100] },
      distortionAmount: { value: 2.98, range: [0, 10] },
      scale: { value: 36.36, range: [0, 100] },
      speed: { value: 0.79, range: [0, 1] },
    },
  });
});

Shery.imageEffect(".page4 .left .first, .second, .third", {
  style: 5,

  gooey: true,
  config: {
    a: { value: 1.6, range: [0, 30] },
    b: { value: -0.86, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6926764784862751 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.56, y: 0.56 } },
    shapeEdgeSoftness: { value: 0.05, range: [0, 0.5] },
    shapeRadius: { value: 0.27, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 5.92, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.43, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.84, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.08, range: [0, 1] },
    antialias_threshold: { value: 0.01, range: [0, 0.1] },
    noise_height: { value: 0.92, range: [0, 2] },
    noise_scale: { value: 22.9, range: [0, 100] },
    noiseDetail: { value: 7.44, range: [0, 100] },
    distortionAmount: { value: 2.98, range: [0, 10] },
    scale: { value: 36.36, range: [0, 100] },
    speed: { value: 0.79, range: [0, 1] },
  },
  preset: "./presets/wigglewobble.json",
});


tl.from(".page1 .right-content img", {
opacity:0,
x:200,
y:-200,


})