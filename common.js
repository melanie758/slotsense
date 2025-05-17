// common.js
function initializeDarkMode() {
    const toggle = document.getElementById('modeToggle');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');

    let darkMode = localStorage.getItem('darkMode') === 'true';
    updateDarkMode(darkMode);

    toggle.addEventListener('click', () => {
        darkMode = !darkMode;
        updateDarkMode(darkMode);
        localStorage.setItem('darkMode', darkMode);
    });

    function updateDarkMode(isDark) {
        if (isDark) {
            document.body.classList.add('dark');
            if (moonIcon) moonIcon.style.display = 'none';
            if (sunIcon) sunIcon.style.display = 'inline';
        } else {
            document.body.classList.remove('dark');
            if (moonIcon) moonIcon.style.display = 'inline';
            if (sunIcon) sunIcon.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', initializeDarkMode);