// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
        performSearch(searchBar.value);
    });
    
    searchBar.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchBar.value);
        }
    });
    
    function performSearch(query) {
        if (query.trim() !== '') {
            alert('Ricerca per: ' + query);
            // In a real application, this would redirect to search results
            // window.location.href = '/search?q=' + encodeURIComponent(query);
        }
    }
    
    // Cart button functionality
    const cartButton = document.querySelector('.cart-button');
    
    cartButton.addEventListener('click', function() {
        alert('Prodotto aggiunto al carrello!');
        // In a real application, this would add the product to the cart
    });
    
    // Nutrition button functionality
    const nutritionButton = document.querySelector('.nutrition-button');
    
    nutritionButton.addEventListener('click', function() {
        alert('Scopri di più sulla nutrizione B.A.R.F.');
        // In a real application, this would redirect to a nutrition page
        // window.location.href = '/nutrition';
    });
    
    // Mobile menu toggle (for responsive design)
    function createMobileMenu() {
        const nav = document.querySelector('nav');
        const menuItems = document.querySelector('.nav-menu');
        
        // Create hamburger menu button
        const mobileMenuBtn = document.createElement('div');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
        
        // Add mobile menu button to nav
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                nav.insertBefore(mobileMenuBtn, menuItems);
                menuItems.style.display = 'none';
            }
            
            // Toggle menu on click
            mobileMenuBtn.addEventListener('click', function() {
                if (menuItems.style.display === 'none') {
                    menuItems.style.display = 'flex';
                } else {
                    menuItems.style.display = 'none';
                }
            });
        } else {
            // Remove mobile menu on larger screens
            const existingBtn = document.querySelector('.mobile-menu-btn');
            if (existingBtn) {
                existingBtn.remove();
            }
            menuItems.style.display = 'flex';
        }
    }
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Update mobile menu on window resize
    window.addEventListener('resize', createMobileMenu);
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add animation for wave dividers
    const waveDividers = document.querySelectorAll('.wave-divider');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function animateWaves() {
        waveDividers.forEach(wave => {
            if (isInViewport(wave)) {
                wave.style.transition = 'transform 0.5s ease-in-out';
                wave.style.transform = wave.classList.contains('reverse') ? 
                    'rotate(180deg) translateY(0)' : 'translateY(0)';
            }
        });
    }
    
    // Initialize wave animations
    animateWaves();
    
    // Update animations on scroll
    window.addEventListener('scroll', animateWaves);
});