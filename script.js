document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Show submitting state
            submitBtn.textContent = 'SUBMITTING...';
            submitBtn.classList.add('submitting');
            
            // Simulate form submission
            setTimeout(() => {
                // Reset button
                submitBtn.textContent = 'REQUEST SUBMITTED!';
                submitBtn.classList.remove('submitting');
                submitBtn.style.backgroundColor = '#34a853';
                
                // Reset form
                contactForm.reset();
                
                // Show success message
                alert('Thank you for your request! We will contact you soon about the Google Cloud solution qualification.');
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    }
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.solution-card, .case-study-card, .service-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Brutalist typing effect for hero title (optional)
    const heroTitle = document.querySelector('.brutalist-title');
    if (heroTitle && window.innerWidth > 768) {
        const originalHTML = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalHTML.length) {
                heroTitle.innerHTML += originalHTML.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add pixelated background pattern
    const style = document.createElement('style');
    style.textContent = `
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(0,0,0,0.03) 2px, transparent 2px),
                linear-gradient(90deg, rgba(0,0,0,0.03) 2px, transparent 2px);
            background-size: 20px 20px;
            pointer-events: none;
            z-index: -1;
        }
    `;
    document.head.appendChild(style);
});
