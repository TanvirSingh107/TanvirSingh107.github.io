// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Check if the user previously saved a theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }

    // Toggle logic
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.body.getAttribute('data-theme');
        
        if (theme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});