// Custom cursor
const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const speed = 0.2;

// Update cursor position with smooth animation
function animateCursor() {
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    
    requestAnimationFrame(animateCursor);
}

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Cursor effects on interactive elements
const links = document.querySelectorAll('a, button, .project-card, .blog-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1.5)`;
        cursor.style.backgroundColor = 'var(--color-secondary)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
        cursor.style.backgroundColor = 'var(--color-accent)';
    });
});

// Start cursor animation
animateCursor();

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Only apply floating badge animations if not on mobile
    if (window.innerWidth > 768) {
        // Floating badges random movement - adjusted for bottom positioning
        const badges = document.querySelectorAll('.floating-badge');
        
        // Set initial positions to ensure they don't overlap
        gsap.set('.badge-motion', { x: 10 });
        gsap.set('.badge-usability', { x: -10 });
        
        badges.forEach(badge => {
            // Random movement animation with reduced range to prevent overlap
            gsap.to(badge, {
                x: "random(-8, 8)", // Further reduced from -10,10 to -8,8
                y: "random(-5, 5)", // Reduced vertical movement to prevent badges from moving up into text
                rotation: "random(-3, 3)",
                duration: "random(5, 9)", // Increased from 4-8 to 5-9 for smoother movement
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay: "random(0, 2)"
            });
        });
    }
    
    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            },
            delay: i * 0.1
        });
    });
    
    // Animate blog cards
    gsap.utils.toArray('.blog-card').forEach((card, i) => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            },
            delay: i * 0.1
        });
    });
    
    // Animate section titles
    gsap.utils.toArray('h2').forEach(title => {
        gsap.from(title, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: title,
                start: "top bottom-=150",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Animate skill categories
    gsap.utils.toArray('.skill-category').forEach((category, i) => {
        gsap.from(category, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: category,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            },
            delay: i * 0.1
        });
    });
    
    // Contact form animation
    gsap.from('.contact-form', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.contact-form',
            start: "top bottom-=100",
            toggleActions: "play none none none"
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const color = card.getAttribute('data-color');
        gsap.to(card, {
            backgroundColor: color,
            color: '#ffffff',
            boxShadow: `0 20px 40px ${color}33`,
            duration: 0.3
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: 'var(--color-text)',
            boxShadow: '0 20px 30px rgba(0, 0, 0, 0.3)',
            duration: 0.3
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        const submitButton = document.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Show success message
            submitButton.textContent = 'Sent Successfully!';
            submitButton.style.backgroundColor = '#33cc33';
            
            // Reset button after delay
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = 'var(--color-accent)';
                submitButton.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Create assets folder structure
// This is just a placeholder comment, as the actual folder creation would be done separately
// You would need to create an 'assets' folder and add images for:
// - profile.jpg
// - project1.jpg, project2.jpg, project3.jpg, project4.jpg
// - blog1.jpg, blog2.jpg, blog3.jpg 

// Window resize handler to adjust badge positions on screen size change
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const isMobile = window.innerWidth <= 768;
        const badges = document.querySelectorAll('.floating-badge');
        
        if (isMobile) {
            // On mobile, reset any transforms applied by GSAP
            badges.forEach(badge => {
                gsap.killTweensOf(badge);
                gsap.set(badge, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    clearProps: "transform"
                });
            });
            
            // Make sure badges container is properly styled for mobile
            const badgesContainer = document.querySelector('.badges-container');
            if (badgesContainer) {
                badgesContainer.style.position = 'static';
                badgesContainer.style.display = 'flex';
                badgesContainer.style.flexWrap = 'wrap';
                badgesContainer.style.justifyContent = 'center';
                badgesContainer.style.gap = '1rem'; // Add gap for better spacing
            }
        } else {
            // Reapply animations on desktop if coming from mobile
            
            // Reset initial positions to ensure they don't overlap
            gsap.set('.badge-motion', { x: 10 });
            gsap.set('.badge-usability', { x: -10 });
            
            badges.forEach(badge => {
                gsap.killTweensOf(badge); // Kill any existing tweens
                gsap.to(badge, {
                    x: "random(-8, 8)", // Match the reduced values from above
                    y: "random(-5, 5)", // Match the reduced vertical movement from above
                    rotation: "random(-3, 3)",
                    duration: "random(5, 9)", // Match the increased duration from above
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                    delay: "random(0, 2)"
                });
            });
            
            // Reset badges container for desktop
            const badgesContainer = document.querySelector('.badges-container');
            if (badgesContainer) {
                badgesContainer.style.position = 'absolute';
                badgesContainer.style.bottom = '0'; // Set bottom instead of clearing position
                badgesContainer.style.top = 'auto'; // Ensure top is auto
                badgesContainer.style.height = '50%'; // Set height to match CSS
                badgesContainer.style.display = '';
                badgesContainer.style.flexWrap = '';
                badgesContainer.style.justifyContent = '';
                badgesContainer.style.gap = ''; // Clear gap property
            }
        }
    }, 250); // Debounce resize events
}); 