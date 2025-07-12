window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const btn = document.getElementById('play-pause');
const video = document.getElementById('bg-video');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    video.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});
