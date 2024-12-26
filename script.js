

document.addEventListener('DOMContentLoaded', () => {
   
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        heroContent.style.transform = `translateY(${scrollPos * 0.5}px)`;
        heroContent.style.opacity = 1 - scrollPos / 700;
    });

    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = e.target.getAttribute('href');

            
            if (href.startsWith('#')) {
                e.preventDefault();  

                const targetId = href.substring(1);  
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
        });
    });

   
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    
    const testimonials = document.querySelectorAll('.testimonial');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        });
    }, {
        threshold: 0.3
    });

    testimonials.forEach(testimonial => {
        testimonial.style.opacity = 0;
        testimonial.style.transform = 'translateY(20px)';
        observer.observe(testimonial);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    prev.addEventListener("click", () => {
        current = (current === 0) ? slides.length - 1 : current - 1;
        showSlide(current);
    });

    next.addEventListener("click", () => {
        current = (current === slides.length - 1) ? 0 : current + 1;
        showSlide(current);
    });

    
    setInterval(() => {
        current = (current === slides.length - 1) ? 0 : current + 1;
        showSlide(current);
    }, 5000);
});
