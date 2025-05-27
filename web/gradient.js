const grid = document.querySelector('.parallax-grid');

let lastX = 0;
let lastY = 0;
let currentX = 0;
let currentY = 0;
let velocity = 0;

function lerp(start, end, t) {
  return start + (end - start) * t;
}

window.addEventListener('mousemove', (e) => {
  currentX = e.clientX / window.innerWidth - 0.5;
  currentY = e.clientY / window.innerHeight - 0.5;
});

function animate() {
  // Plynulý posun gridu - interpolace
  lastX = lerp(lastX, currentX, 0.1);
  lastY = lerp(lastY, currentY, 0.1);

  // Vypočítat rychlost pohybu
  const dx = currentX - lastX;
  const dy = currentY - lastY;
  velocity = Math.min(1, Math.sqrt(dx * dx + dy * dy) * 50);

  // Výpočet transformace
  const translateX = lastX * 30;
  const translateY = lastY * 30;
  const scale = 1 + Math.sqrt(lastX * lastX + lastY * lastY) * 0.5;

  // Efekt podle rychlosti (rozostření a jas)
  const blur = velocity * 2; // max 2px blur
  const brightness = 1 + velocity * 0.3;

  grid.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  grid.style.filter = `blur(${blur}px) brightness(${brightness})`;

  requestAnimationFrame(animate);
}

animate();
