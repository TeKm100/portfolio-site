/* 
* NAVIGATION TOGGLE 
* - Mobile menu functionality
* - Smooth scrolling for anchor links
*/
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });
    
    /* 
    * FORM VALIDATION 
    * - Basic client-side validation
    * - Form submission handling
    */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (!name || !email || !message) {
            e.preventDefault(); // stop submission
            alert('⚠️ Please fill in all fields');
            return;
        }

        if (!validateEmail(email)) {
            e.preventDefault(); // stop submission
            alert('⚠️ Please enter a valid email address');
            return;
        }

        // ✅ If validation passes, allow FormSubmit to send
        alert(`✅ Thank you, ${name}! Your message is being sent...`);
    });
}

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
    
    
    /* 
    * SMOOTH SCROLLING 
    * - For navigation links
    * - Back to top button 
    */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    /* 
    * SCROLL ANIMATIONS 
    * - Add/remove active class based on scroll position
    * - Highlight current section in navigation
    */
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Highlight active section in navigation
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Show/hide back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (scrollPosition > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
});