// script1.js

// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
  
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Optional: Welcome message in console
    console.log("Welcome to Dristhee Nursing's Portfolio!");

    // Optional: Simple scroll reveal effect (basic version)
    const intro = document.querySelector('.intro');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        intro.style.opacity = '1';
        intro.style.transform = 'translateY(0)';
      }
    });
  });
  

  