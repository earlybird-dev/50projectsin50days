'use strict';
const boxes = document.querySelectorAll('.box');
const checkBoxes = () => {
  console.log(window.innerHeight);
  const triggerBottom = window.innerHeight * 0.8;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
};
window.addEventListener('scroll', checkBoxes);
checkBoxes();
