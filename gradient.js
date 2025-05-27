// gradient.js

const grid = document.querySelector('.parallax-grid');

window.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;  // od -0.5 do 0.5
  const y = e.clientY / window.innerHeight - 0.5;

  // posuň a zvětši grid podle pozice myši, přidej glow efekt
  const translateX = x * 30;
  const translateY = y * 30;
  const scale = 1 + Math.sqrt(x * x + y * y) * 0.5;

  grid.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
});
