'use strict';
const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const blurring = () => {
  load++;
  console.log(load);

  if (load === 100) {
    clearInterval(int);
  }

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = `${1 - load / 100}`;
  bg.style.filter = `blur(${100 - load}px)`;
};

let load = -1;
setInterval(blurring, 20);
