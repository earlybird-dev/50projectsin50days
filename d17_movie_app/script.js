'use strict';

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6d7959ff3634d8386f254425ed8c3af1&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=6d7959ff3634d8386f254425ed8c3af1&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const getClassByRate = (rate) => {
  return rate >= 8 ? 'green' : rate >= 5 ? 'orange' : 'red';
};

const showMovies = (movies) => {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `      
    <img src="${IMG_PATH + poster_path}" alt="${title}" />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
  `;
    main.appendChild(movieEl);
  });
};

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  showMovies(data.results);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    console.log(SEARCH_API + searchTerm + '"');
    getMovies(SEARCH_API + searchTerm + '"');
    search.value = '';
  } else {
    window.location.reload();
  }
});

getMovies(API_URL);
