// Smooth hover effect on nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.letterSpacing = '1px';
  });
  link.addEventListener('mouseout', () => {
    link.style.letterSpacing = '0px';
  });
});
