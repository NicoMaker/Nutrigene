// Smooth scrolling function
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

// Triangle interaction functionality
let isTriangleActive = false;
const triangle = document.getElementById('infoTriangle');
const cards = [
    document.getElementById('card1'),
    document.getElementById('card2'),
    document.getElementById('card3'),
    document.getElementById('card4')
];

triangle.addEventListener('click', function () {
    isTriangleActive = !isTriangleActive;

    if (isTriangleActive) {
        // Show cards with staggered animation
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('active');
            }, index * 100);
        });
        triangle.style.transform = 'rotate(45deg) scale(0.8)';
    } else {
        // Hide cards
        cards.forEach(card => {
            card.classList.remove('active');
        });
        triangle.style.transform = 'rotate(45deg) scale(1)';
    }
});

// Add hover effects to cards
cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px) scale(1.05)';
        this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-section');
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
});

// Add entrance animations when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('.product-section, .info-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Add click animation to CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Auto-rotate triangle hint
setInterval(() => {
    if (!isTriangleActive) {
        triangle.style.transform = 'rotate(45deg) scale(1.02)';
        setTimeout(() => {
            triangle.style.transform = 'rotate(45deg) scale(1)';
        }, 300);
    }
}, 5000);