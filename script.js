(function() {
    // Initialize EmailJS with your Public Key
    emailjs.init("OwQ8dyIlYQNPPzLaO");

     // Booking Form submission
    const requestForm = document.getElementById("request-form");
    if (requestForm) {
        requestForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                service: document.getElementById("service").value,
                project_type: document.getElementById("project-type").value,
                location: document.getElementById("location").value,
                details: document.getElementById("details").value
            };

            // Send to admin only
            emailjs.send("service_q29ap6f", "template_ua8rjpb", formData)
                .then(function(response) {
                    alert(`Thank you, ${formData.name}! Your booking/enquiry has been received. We’ll contact you soon.`);
                    requestForm.reset();
                }, function(error) {
                    alert(`Booking failed: ${error.text || 'Unknown error'}. Please try again or contact us.`);
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
                experience: document.getElementById("join-experience").value,
                skills: document.getElementById("join-skills").value,
                details: document.getElementById("join-details").value
            };

            // Send to admin only
            emailjs.send("service_q29ap6f", "template_ua8rjpb", formData)
                .then(function(response) {
                    alert(`Thank you, ${formData.name}! Your application has been received. We’ll review it soon.`);
                    joinForm.reset();
                }, function(error) {
                    alert(`Application failed: ${error.text || 'Unknown error'}. Please try again or contact us.`);
                });
        });
    }
})();