particlesJS("particles-js", {
    particles: {
      number: {
        value: 563,
        density: { enable: true, value_area: 1443.0708547789707 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 8 },
        image: { src: "", width: 10, height: 10 }
      },
      opacity: {
        value: 0.31565905665290905,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 4.008530152163807,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 849.808392258727,
        color: "#ffffff",
        opacity: 0.24051180912982842,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 0, rotateY: 0 }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  
  var SP = document.querySelector('.status');

 document.querySelector('.redesign').addEventListener("mouseover",()=>{
     SP.innerHTML = 'After';
 })

 document.querySelector('.redesign').addEventListener("mouseout",()=>{
    SP.innerHTML = 'Before';
})