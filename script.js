(function() {
    // Initialize EmailJS with your Public Key
    emailjs.init("OwQ8dyIlYQNPPzLaO");

    // Form Validation Function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateForm(formData) {
        const errors = [];
        if (!formData.name || !formData.name.trim()) {
            errors.push("Name is required");
        }
        if (!formData.email || !formData.email.trim()) {
            errors.push("Email is required");
        } else if (!validateEmail(formData.email)) {
            errors.push("Invalid email format");
        }
        if (formData.service && !formData.service.trim()) {
            errors.push("Service selection is required");
        }
        return errors;
    }

    // Booking Form submission
    const requestForm = document.getElementById("request-form");
    if (requestForm) {
        requestForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                service: document.getElementById("service").value || "Not specified",
                project_type: document.getElementById("project-type").value || "Not specified",
                location: document.getElementById("location").value || "Not specified",
                details: document.getElementById("details").value || "No additional details"
            };

            // Validate form
            const errors = validateForm(formData);
            if (errors.length > 0) {
                alert("Please fix the following errors:\n" + errors.join("\n"));
                return;
            }

            // Disable button to prevent duplicate submissions
            const submitBtn = requestForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Submitting...";
            }

            // Send to admin only
            emailjs.send("service_q29ap6f", "template_ua8rjpb", formData)
                .then(function(response) {
                    alert(`Thank you, ${formData.name}! Your booking has been received. We'll contact you soon.`);
                    requestForm.reset();
                }, function(error) {
                    alert("There was an issue submitting your request. Please try again.");
                    console.error("EmailJS error:", error);
                })
                .finally(function() {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = "Submit Enquiry";
                    }
                });
        });
    }

    // Join with Us Form submission
    const joinForm = document.getElementById("join-form");
    if (joinForm) {
        joinForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const formData = {
                name: document.getElementById("join-name").value,
                email: document.getElementById("join-email").value,
                experience: document.getElementById("join-experience").value || "Not specified",
                skills: document.getElementById("join-skills").value || "Not specified",
                details: document.getElementById("join-details").value || "No additional details"
            };

            // Validate form
            const errors = validateForm(formData);
            if (errors.length > 0) {
                alert("Please fix the following errors:\n" + errors.join("\n"));
                return;
            }

            const submitBtn = joinForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Submitting...";
            }

            // Send to admin only
            emailjs.send("service_q29ap6f", "template_ua8rjpb", formData)
                .then(function(response) {
                    alert(`Thank you, ${formData.name}! Your application has been received. We'll review it soon.`);
                    joinForm.reset();
                }, function(error) {
                    alert("There was an issue submitting your application. Please try again.");
                    console.error("EmailJS error:", error);
                })
                .finally(function() {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = "Submit Application";
                    }
                });
        });
    }

    // Mobile Menu Toggle
    function initMobileMenu() {
        const stickyNav = document.querySelector('.sticky-nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (!stickyNav || !navLinks) return;

        // Remove existing hamburger if any
        const existingHamburger = document.querySelector('.hamburger-menu');
        if (existingHamburger) existingHamburger.remove();

        if (window.innerWidth <= 768) {
            const hamburger = document.createElement('div');
            hamburger.className = 'hamburger-menu';
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            hamburger.onclick = function(e) {
                e.stopPropagation();
                navLinks.classList.toggle('active');
            };
            stickyNav.appendChild(hamburger);
        }
    }

    // Initialize on page load and resize
    window.addEventListener('load', initMobileMenu);
    window.addEventListener('resize', initMobileMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger-menu');
        if (navLinks && hamburger && !event.target.closest('.sticky-nav')) {
            navLinks.classList.remove('active');
        }
    });
})();
