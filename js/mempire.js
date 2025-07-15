const slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);

var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}

const joinBtn = document.getElementById("joinBtn");
const form = document.getElementById("form");

joinBtn.addEventListener("click", function () {
  // Prevent repeated activation
  if (form.classList.contains("showing")) return;

  // Add both classes
  form.classList.add("show", "showing");

  // Set initial height for animation
  const fullHeight = form.scrollHeight;
  form.style.height = fullHeight + "px";

  // Scroll after delay
  setTimeout(() => {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 800);

  // Allow iframe to resize after transition
  setTimeout(() => {
    form.style.height = "auto";
  }, 200); // Match your CSS transition time
});

const iframe = document.getElementById("clubForm");

iframe.addEventListener("load", function () {
  document.getElementById("form-frame-wrapper").classList.add("loaded");
});