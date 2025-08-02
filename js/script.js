// Theme Toggle Script
const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// Load saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', currentTheme);
toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

// Toggle logic
toggleBtn.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});