'use strict';

const searchBtn = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');

searchBtn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
