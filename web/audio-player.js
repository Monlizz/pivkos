const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const progressBar = document.getElementById('progressBar');
const currentTimeElem = document.getElementById('currentTime');
const durationElem = document.getElementById('duration');

let isPlaying = false;

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function updateProgress() {
  progressBar.value = Math.floor(audio.currentTime);
  currentTimeElem.textContent = formatTime(audio.currentTime);
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

playPauseBtn.addEventListener('click', togglePlayPause);

audio.addEventListener('play', () => {
  isPlaying = true;
  playIcon.style.display = 'none';
  pauseIcon.style.display = 'block';
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  playIcon.style.display = 'block';
  pauseIcon.style.display = 'none';
});

audio.addEventListener('timeupdate', updateProgress);

progressBar.addEventListener('input', () => {
  audio.currentTime = progressBar.value;
  updateProgress();
});

function setDuration() {
  if (!isNaN(audio.duration) && audio.duration > 0) {
    progressBar.max = Math.floor(audio.duration);
    durationElem.textContent = formatTime(audio.duration);
  }
}

// Poslouchej 'loadedmetadata' a také 'canplay', abychom měli jistotu, že se délka nastaví
audio.addEventListener('loadedmetadata', () => {
  console.log('loadedmetadata, duration:', audio.duration);
  setDuration();
});

audio.addEventListener('canplay', () => {
  console.log('canplay, duration:', audio.duration);
  setDuration();
});

// Pokud by audio už bylo načtené (např. cache), rovnou nastav délku
if (audio.readyState >= 1) {
  setDuration();
}
