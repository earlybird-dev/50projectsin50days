'use strict';

const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
textarea.focus();

const createTags = (input) => {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  console.log(tags);

  tagsEl.innerHTML = '';
  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlighTag = (tag) => {
  console.log('highlight');
  tag.classList.add('highlight');
};

const unHighlighTag = (tag) => {
  console.log('unhighlight');
  tag.classList.remove('highlight');
};

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    console.log(randomTag);

    highlighTag(randomTag);
    setTimeout(() => {
      unHighlighTag(randomTag);
    }, 300);
  }, 300);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlighTag(randomTag);
    }, 100);
  }, times * 300);
};

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});
