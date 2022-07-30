// Theme toggle button
const lightMode = document.getElementById('toggle-light');
const darkMode = document.getElementById('toggle-dark');

lightMode.addEventListener('click', () => {
  toggleTheme();
  // lightMode.classList.toggle('hidden');
  // darkMode.classList.toggle('flex');
});

darkMode.addEventListener('click', () => {
  toggleTheme();
  // lightMode.classList.toggle('flex');
  // darkMode.classList.toggle('hidden');
});

const toggleTheme = function () {
  document.documentElement.classList.toggle('dark');
};
