document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const menuWrapper = document.querySelector('.menu-wrapper');

    // Theme toggle functionality
    const currentTheme = localStorage.getItem('theme') || 'light'; // Change default to 'light'
    body.classList.toggle('light-theme', currentTheme === 'light');
    themeToggle.checked = currentTheme === 'light';

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('light-theme');
        const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
    });

    // Mobile menu toggle functionality
    mobileMenuToggle.addEventListener('click', () => {
        menuWrapper.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // Add this line
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuWrapper.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open'); // Add this line
            }
        });
    });
});