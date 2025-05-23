const beerCount = 25;
const beerEmojis = [];
const beerBackground = document.querySelector(".beer-background");

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

class Beer {
  constructor() {
    this.el = document.createElement("span");
    this.el.classList.add("beer-emoji");
    this.el.textContent = "🍺";
    beerBackground.appendChild(this.el);

    this.x = randomRange(0, window.innerWidth);
    this.y = randomRange(0, window.innerHeight);

    this.speedX = randomRange(-0.3, 0.3);
    this.speedY = randomRange(-0.2, 0.2);

    this.size = randomRange(16, 30);
    this.el.style.fontSize = this.size + "px";

    this.opacity = randomRange(0.5, 1);
    this.el.style.opacity = this.opacity;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Okraje obrazovky - pivka se odrazí
    if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1;
    if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1;

    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}

for(let i = 0; i < beerCount; i++) {
  beerEmojis.push(new Beer());
}

function animateBeers() {
  beerEmojis.forEach(beer => beer.update());
  requestAnimationFrame(animateBeers);
}

animateBeers();

window.addEventListener('resize', () => {
  beerEmojis.forEach(beer => {
    // Po resize se pivka přizpůsobí velikosti obrazovky
    beer.x = Math.min(beer.x, window.innerWidth);
    beer.y = Math.min(beer.y, window.innerHeight);
  });
});
