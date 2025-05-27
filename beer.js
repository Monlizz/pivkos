// beer.js

const beerBackground = document.querySelector('.beer-background');

function createBeerEmoji() {
  const beer = document.createElement('div');
  beer.textContent = '🍺';
  beer.style.position = 'absolute';
  beer.style.fontSize = `${Math.random() * 24 + 16}px`; // 16-40 px
  beer.style.left = `${Math.random() * 100}%`;
  beer.style.top = `100%`; // začne dole
  beer.style.opacity = Math.random() * 0.6 + 0.4;
  beer.style.pointerEvents = 'none';
  beer.style.userSelect = 'none';
  beer.style.willChange = 'transform, opacity';

  beerBackground.appendChild(beer);

  const duration = 8000 + Math.random() * 6000; // 8-14 sekund
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = elapsed / duration;
    if (progress < 1) {
      beer.style.transform = `translateY(${-progress * 120}vh) translateX(${Math.sin(progress * 10) * 5}px) scale(${1 + progress * 0.3})`;
      beer.style.opacity = 1 - progress;
      requestAnimationFrame(animate);
    } else {
      beer.remove();
    }
  }
  requestAnimationFrame(animate);
}

// Generuj pivka pravidelně
setInterval(createBeerEmoji, 500);
