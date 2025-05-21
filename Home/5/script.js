// Attendi che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', function () {
    // Funzionalità di ricerca
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', function () {
        performSearch(searchBar.value);
    });

    searchBar.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch(searchBar.value);
        }
    });

    function performSearch(query) {
        if (query.trim() !== '') {
            alert('Ricerca per: ' + query);
            // In un'applicazione reale, questo reindirizzerebbe ai risultati di ricerca
        }
    }

    // Funzionalità pulsante carrello
    const cartButton = document.querySelector('.cart-button');

    cartButton.addEventListener('click', function () {
        alert('Prodotto aggiunto al carrello!');
        // In un'applicazione reale, questo aggiungerebbe il prodotto al carrello
    });

    // Funzionalità pulsante nutrizione
    const nutritionButton = document.querySelector('.nutrition-button');

    nutritionButton.addEventListener('click', function () {
        alert('Scopri di più sulla nutrizione B.A.R.F.');
        // In un'applicazione reale, questo reindirizzerebbe a una pagina sulla nutrizione
    });

    // Funzionalità form di contatto
    const contactForm = document.querySelector('.contact-form');
    const contactButton = document.querySelector('.contact-form button');

    if (contactForm) {
        contactButton.addEventListener('click', function (e) {
            e.preventDefault();
            const nameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');

            if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
                alert('Per favore, compila tutti i campi.');
            } else {
                alert('Grazie per averci contattato! Ti risponderemo presto.');
                nameInput.value = '';
                emailInput.value = '';
            }
        });
    }

    // Effetti visivi
    function addVisualEffects() {
        // Aggiungi effetto hover ai pulsanti
        const buttons = document.querySelectorAll('button, .cart-button, .nutrition-button');

        buttons.forEach(button => {
            button.addEventListener('mouseenter', function () {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.2s ease';
            });

            button.addEventListener('mouseleave', function () {
                this.style.transform = 'scale(1)';
            });
        });

        // Aggiungi effetto parallasse alle immagini
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;

            const dogImage = document.querySelector('.dog-image');
            if (dogImage) {
                dogImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            }

            const petIllustrations = document.querySelectorAll('.pet-illustration img');
            petIllustrations.forEach(img => {
                img.style.transform = `translateY(${scrollPosition * 0.05}px)`;
            });
        });
    }

    // Inizializza effetti visivi
    addVisualEffects();

    // Animazione al caricamento della pagina
    function animateOnLoad() {
        const elements = [
            '.hero-content',
            '.feature-list',
            '.product-card',
            '.info-content',
            '.nutrition-content',
            '.pets-content',
            '.footer-content'
        ];

        elements.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }

    // Inizializza animazioni al caricamento
    animateOnLoad();
});