'use strict';
const faqContainers = document.querySelectorAll('.faq');
const toggleBtns = document.querySelectorAll('.faq-toggle');

// toggleBtns.forEach((btn, idx) => {
//   btn.addEventListener('click', () => {
//     if (faqContainers[idx].classList.contains('active')) {
//       faqContainers[idx].classList.remove('active');
//     } else {
//       faqContainers.forEach((faq) => faq.classList.remove('active'));
//       faqContainers[idx].classList.add('active');
//     }
//   });
// });

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
});
