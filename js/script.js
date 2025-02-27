 // Banner Slider Script
 document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    let currentSlide = 0;
    
    // Function to update the slider position
    function updateSlider() {
      slides.style.transform = `translateX(-${currentSlide * 25}%)`;
      
      // Update active dot
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
    
    // Add click events to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        currentSlide = index;
        updateSlider();
      });
    });
    
    // Add click events to arrows
    leftArrow.addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + 4) % 4;
      updateSlider();
    });
    
    rightArrow.addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % 4;
      updateSlider();
    });
    
    // Auto slide every 5 seconds
    setInterval(function() {
      currentSlide = (currentSlide + 1) % 4;
      updateSlider();
    }, 5000);
     // JavaScript for smooth scrolling 
    
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
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