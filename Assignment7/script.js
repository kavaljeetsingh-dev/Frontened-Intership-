function getRandomImageUrl() {
  const width = 300;
  const height = 300;
  return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
}

function loadImages() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // clear previous images

  for (let i = 0; i < 6; i++) {
    const img = document.createElement("img");
    img.src = getRandomImageUrl();
    gallery.appendChild(img);
  }
}

// Load images on initial page load
window.onload = loadImages;
