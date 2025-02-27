 // Banner Slider Script
 document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const slideCount = dots.length;
    let slideInterval;

    // Function to update slider position
    function updateSlider() {
        slides.style.transform = `translateX(-${currentSlide * 25}%)`;
        // Update active dot
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Start automatic sliding
    function startSlider() {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSlider();
        }, 5000); // Change slide every 5 seconds
    }

    // Add click events to dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-slide'));
            updateSlider();
            // Reset interval when manually changing slide
            clearInterval(slideInterval);
            startSlider();
        });
    });

    // Initialize slider
    startSlider();

    // Pause slider on hover
    const bannerSlider = document.querySelector('.banner-slider');
    bannerSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    bannerSlider.addEventListener('mouseleave', () => {
        startSlider();
    });

    // Form Validation Script
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestSelect = document.getElementById('interest');

    const nameGroup = document.getElementById('nameGroup');
    const emailGroup = document.getElementById('emailGroup');
    const interestGroup = document.getElementById('interestGroup');

    const formSuccess = document.querySelector('.form-success');

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Input validation functions
    function validateName() {
        if (nameInput.value.trim() === '' || nameInput.value.trim().split(' ').length < 2) {
            nameGroup.classList.add('error');
            return false;
        } else {
            nameGroup.classList.remove('error');
            return true;
        }
    }

    function validateEmail() {
        if (!isValidEmail(emailInput.value.trim())) {
            emailGroup.classList.add('error');
            return false;
        } else {
            emailGroup.classList.remove('error');
            return true;
        }
    }

    function validateInterest() {
        if (interestSelect.value === '') {
            interestGroup.classList.add('error');
            return false;
        } else {
            interestGroup.classList.remove('error');
            return true;
        }
    }

    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    interestSelect.addEventListener('change', validateInterest);

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isInterestValid = validateInterest();

        // If all validations pass, submit the form
        if (isNameValid && isEmailValid && isInterestValid) {
            // Here you would normally send data to the server
            // For demo purposes, we'll just show the success message
            formSuccess.style.display = 'block';
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        }
    });
});