'use strict';

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const contentContainer = document.querySelector('.content-container');

openBtn.addEventListener('click', () => {
  contentContainer.classList.add('show-nav');
});
closeBtn.addEventListener('click', () => {
  contentContainer.classList.remove('show-nav');
});
