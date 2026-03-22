import {$} from 'jquery';
import './vendor/sparkleHover.js';

const layers = [
  { el: document.querySelector(".round-1"), strength: 40 },
  { el: document.querySelector(".round-2"), strength: 20 },
  { el: document.querySelector(".round-3"), strength: -40 }
];

console.log(layers);

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 1);
  mouseY = (e.clientY / window.innerHeight - 0.5);
});

function animate() {
  // smooth interpolation
  currentX += (mouseX - currentX) * 0.80;
  currentY += (mouseY - currentY) * 0.80;

  layers.forEach(layer => {
    const x = currentX * layer.strength;
    const y = currentY * layer.strength;
    layer.el.style.transform = `translate(${x}px, ${y}px)`;
  });

  requestAnimationFrame(animate);
}

animate();


$(document).ready(function() {
  console.log("Document is ready");
  $('.box').sparkleHover({colors : ['#297E97', "#2EB8D5",'#36BEC1'],
    num_sprites: 12,
    lifespan: 10000,
    radius: 500,
    sprite_size: 5,
    opacity: 0.8,
    shape: 'circle'});
});
