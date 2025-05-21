// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute('href');

            if (href !== "#") {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // Simple animation for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .cart-btn');

    for (const button of ctaButtons) {
        button.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        button.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    }
});