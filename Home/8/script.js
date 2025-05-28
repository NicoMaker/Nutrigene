// Triangle interaction functionality
let isTriangleActive = false;
const triangle = document.getElementById('mainTriangle');
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
                card.classList.add('show');
            }, index * 150);
        });

        // Scale down triangle
        this.style.transform = 'rotate(45deg) scale(0.85)';
        this.style.background = 'rgba(255,255,255,0.8)';
    } else {
        // Hide cards
        cards.forEach(card => {
            card.classList.remove('show');
        });

        // Reset triangle
        this.style.transform = 'rotate(45deg) scale(1)';
        this.style.background = 'rgba(255,255,255,0.95)';
    }
});

// Add hover effects to cards
cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        if (isTriangleActive) {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.25)';
        }
    });

    card.addEventListener('mouseleave', function () {
        if (isTriangleActive) {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 3px 12px rgba(0,0,0,0.15)';
        }
    });
});

// Button click animation
document.querySelector('.discover-btn').addEventListener('click', function () {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});

// Subtle triangle pulse animation
setInterval(() => {
    if (!isTriangleActive) {
        triangle.style.transform = 'rotate(45deg) scale(1.02)';
        setTimeout(() => {
            triangle.style.transform = 'rotate(45deg) scale(1)';
        }, 400);
    }
}, 5000);