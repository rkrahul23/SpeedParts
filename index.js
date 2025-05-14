
// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Simple Testimonial Slider
const testimonials = [
    {
        quote: "SpeedParts saved us when we had a customer waiting on a critical transmission part. They delivered in 3 hours when everyone else said it would take 2 days. Now we use them for all our emergency parts needs.",
        name: "Mike Johnson",
        title: "Owner, Johnson Auto Repair",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        stars: 5
    },
    {
        quote: "Their scheduled delivery service has streamlined our shop operations. We get exactly what we need, when we need it, with no surprises.",
        name: "Sarah Williams",
        title: "Service Manager, City Auto Group",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stars: 5
    },
    {
        quote: "The quality of parts is consistently excellent, and their delivery tracking system gives us perfect visibility.",
        name: "David Chen",
        title: "Lead Technician, Precision Auto",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        stars: 4
    }
];

let currentTestimonial = 0;
const testimonialContainer = document.querySelector('.testimonials-container');

function showTestimonial(index) {
    const testimonial = testimonials[index];
    testimonialContainer.innerHTML = `
        <div class="testimonial">
            <div class="stars">
                ${'<i class="fas fa-star"></i>'.repeat(testimonial.stars)}
            </div>
            <p>"${testimonial.quote}"</p>
            <div class="client-info">
                <img src="${testimonial.image}" alt="Client" class="client-photo">
                <div>
                    <h4 style="margin-bottom: 5px;">${testimonial.name}</h4>
                    <p>${testimonial.title}</p>
                </div>
            </div>
        </div>
    `;
}

// Initialize first testimonial
showTestimonial(currentTestimonial);

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Form Submission
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your request! We will contact you shortly.');
    this.reset();
});
