// Menu Mobile Toggle
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navbar.classList.remove('active');
    });
});

// Search Form Toggle
const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');
const searchLabel = document.querySelector('.search-form label');

searchIcon.addEventListener('click', () => {
    searchForm.classList.add('active');
    document.querySelector('#search-box').focus();
});

searchLabel.addEventListener('click', () => {
    searchForm.classList.remove('active');
});

// Close search form on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchForm.classList.remove('active');
    }
});

// Header Scroll Effect
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    reveals.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 150) {
            setTimeout(() => {
                element.classList.add('active');
            }, index * 100);
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Shopping Cart Functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add animation
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
        
        // Update cart count
        cartCount++;
        cartCountElement.textContent = cartCount;
        cartCountElement.style.animation = 'none';
        setTimeout(() => {
            cartCountElement.style.animation = 'pulse 0.5s ease';
        }, 10);
        
        // Show notification
        showNotification('Item adicionado ao carrinho!');
    });
});

// Notification System
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 10rem;
        right: 2rem;
        background: var(--main-color);
        color: #fff;
        padding: 1.5rem 3rem;
        border-radius: 0.5rem;
        font-family: "Roboto", sans-serif;
        font-size: 1.6rem;
        z-index: 10001;
        animation: slideIn 0.3s ease;
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.3);
    `;
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(40rem);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(40rem);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.address form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
    });
}

// Search Functionality
const searchBox = document.querySelector('#search-box');
const menuBoxes = document.querySelectorAll('.menu .box');

if (searchBox) {
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        menuBoxes.forEach(box => {
            const itemName = box.querySelector('h3').textContent.toLowerCase();
            
            if (itemName.includes(searchTerm)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
        
        // If search is empty, show all items
        if (searchTerm === '') {
            menuBoxes.forEach(box => {
                box.style.display = 'block';
            });
        }
    });
}

// Parallax Effect for Home Section
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const home = document.querySelector('.home');
            const scrolled = window.pageYOffset;
            if (home && scrolled < window.innerHeight) {
                home.style.backgroundPositionY = scrolled * 0.5 + 'px';
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 2500);
});

// Ensure menu items are visible
menuBoxes.forEach(box => {
    box.style.opacity = '1';
    box.style.transform = 'translateY(0)';
});

console.log('☕ Aurora Coffee - Website carregado com sucesso!');
