const layers = [
  { el: document.querySelector(".view--layout__round-1"), strength: 80 },
  { el: document.querySelector(".view--layout__round-2"), strength: 80 },
  { el: document.querySelector(".view--layout__round-3"), strength: -80 }
];

console.log(layers);

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5);
  mouseY = (e.clientY / window.innerHeight - 0.5);
});

export function animate() {
  // smooth interpolation
  currentX += (mouseX - currentX) * 0.90;
  currentY += (mouseY - currentY) * 0.80;

  layers.forEach(layer => {
    const x = currentX * layer.strength;
    const y = currentY * layer.strength;
    layer.el.style.transform = `translate(${x}px, ${y}px)`;
  });

  requestAnimationFrame(animate);
}
