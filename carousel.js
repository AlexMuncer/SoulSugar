const track = document.querySelector(".carousel-track");
const images = [...track.children];

const firstSet = images.slice(0, images.length / 2);

let setWidth = 0;
firstSet.forEach(img => {
  setWidth += img.getBoundingClientRect().width + 15;
});

const speed = 80;
let position = 0;

function animate() {
  position -= speed / 60;

  if (Math.abs(position) >= setWidth) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
