// Placeholder for future enhancements like search, cart, filters
console.log("Welcome to Fashora!");


-/1---------------

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});


-2/------------

const carousel = document.getElementById('carousel');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

// Scroll amount
const scrollAmount = 220; // Adjust this value as needed

// Scroll to the left
leftBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

// Scroll to the right
rightBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});