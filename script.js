'use strict';

const columns = document.querySelectorAll('.column');
const progressLine = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.progress-circle');
let currentActive = 1;

const removeActiveColumn = () => {
  columns.forEach(function (column) {
    column.classList.remove('active');
    column.classList.add('non-active');
  });
};

const updateProgress = () => {
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

  columns.forEach((column, idx) => {
    column.classList.add('non-active');
    if (idx === currentActive - 1) {
      column.classList.remove('non-active');
      column.classList.add('active');
    }
  });
};

/* ////////// Expanding Cards ////////// */

columns.forEach(function (column, idx) {
  column.addEventListener('click', function () {
    currentActive = idx + 1;
    updateProgress();
    removeActiveColumn();
    column.classList.remove('non-active');
    column.classList.add('active');
  });
});

/* ////////// Progress Steps ////////// */

nextBtn.addEventListener('click', () => {
  removeActiveColumn();
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateProgress();
});

prevBtn.addEventListener('click', () => {
  removeActiveColumn();
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateProgress();
});

/* ////////// Rotating Navigation ////////// */

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const mainContainer = document.querySelector('.main-container');
const cornerContainer = document.querySelector('.corner-container');
const navContainer = document.querySelector('nav');

openBtn.addEventListener('click', () => {
  mainContainer.classList.add('show-nav');
});
closeBtn.addEventListener('click', () => {
  mainContainer.classList.remove('show-nav');
});

openBtn.addEventListener('click', () => {
  cornerContainer.classList.add('show-nav');
});
closeBtn.addEventListener('click', () => {
  cornerContainer.classList.remove('show-nav');
});

openBtn.addEventListener('click', () => {
  navContainer.classList.add('show-nav');
});
closeBtn.addEventListener('click', () => {
  navContainer.classList.remove('show-nav');
});
