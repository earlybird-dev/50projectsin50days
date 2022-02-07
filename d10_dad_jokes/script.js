'use strict';

const jokeContainer = document.querySelector('.joke');
const jokeBtn = document.getElementById('jokeBtn');

const renderJoke = function (joke) {
  jokeContainer.innerText = joke;
};

const generateJoke = async function () {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com/', config);
  console.log(res);
  const data = await res.json();
  renderJoke(data.joke);
};

jokeBtn.addEventListener('click', () => {
  generateJoke();
});
