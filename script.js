// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
let isDarkMode = true;

darkModeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Switch to Dark Mode';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.textContent = 'Switch to Light Mode';
    }
    isDarkMode = !isDarkMode;
});
