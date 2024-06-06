let currentSlide = 0;

function startSlider() {
  const images = document.querySelectorAll(".slider .passa li");
  const totalImages = images.length;

  if (totalImages === 0) {
    return;
  }

  const slider = document.querySelector(".slider .passa");
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  if (currentSlide >= totalImages - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}

setInterval(startSlider, 3000);

document.addEventListener("DOMContentLoaded", startSlider);
