document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const offsetX = (x - 0.5) * 100;
  const offsetY = (y - 0.5) * 100;

  const grid = document.querySelector(".parallax-grid");
  if (grid) {
    grid.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
    grid.style.setProperty('--mouse-x', `${e.clientX}px`);
    grid.style.setProperty('--mouse-y', `${e.clientY}px`);
  }
});
