// 1. Configuration Constants (Easier to maintain)
const THEME_CONFIG = {
    headerScrollClass: 'header-scrolled',
    scrollThreshold: 0.15, // 15% of Hero visible
};

// 2. Optimized Header Logic (using Intersection Observer)
// This is more performant than 'window.onscroll'
const initHeader = () => {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');

    if (!header || !heroSection) return;

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When hero is NOT intersecting (scrolled past), add class
            if (!entry.isIntersecting) {
                header.classList.add(THEME_CONFIG.headerScrollClass);
            } else {
                header.classList.remove(THEME_CONFIG.headerScrollClass);
            }
        });
    }, { threshold: THEME_CONFIG.scrollThreshold });

    navObserver.observe(heroSection);
};

// 3. Smooth Navigation (Event Delegation)
// Instead of multiple listeners, we use one listener on the parent (Best Practice)
const initNavigation = () => {
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;

        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
};

// 4. Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initNavigation();
    
    console.log("%c Portfolio Initialized ", "color: white; background: #61dbfb; font-weight: bold; padding: 2px 5px;", "React mindset applied.");
});
