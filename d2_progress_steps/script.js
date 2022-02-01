const progressLine = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log(currentActive);
  update();
});

prevBtn.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);
  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  progressLine.style.width =
    ((currentActive - 1) / (circles.length - 1)) * 100 + '%';
  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};
