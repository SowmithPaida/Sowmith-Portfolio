// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(5, 5, 5, 0.9)';
    }
});

// Simple Console Message
console.log("Welcome to Sowmith's Portfolio! Built with clean code.");