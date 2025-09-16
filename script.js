(function()

(function() {
    // Initialize EmailJS with your Public Key
    emailjs.init("WOLAltD2Kh8-SyZWg"); // Your public key from EmailJS

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

            emailjs.send("service_q29ap6f", "template_ua8rjpb", formData) // Replace with your Service ID and Template ID
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you, ${formData.name}! Your booking is confirmed.\nDetails:\n- Service: ${formData.service}\n- Project: ${formData.project_type}\n- Location: ${formData.location}\n- Details: ${formData.details}\nWe’ll contact you soon.`);
                    requestForm.reset();
                }, function(error) {
                    console.error('FAILED...', error);
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

            emailjs.send("service_q29ap6f", "template_ua8rjpb", formData) // Replace with your Service ID and Template ID
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you, ${formData.name}! Your application has been received.\nDetails:\n- Experience: ${formData.experience} years\n- Skills: ${formData.skills}\n- Details: ${formData.details}\nWe’ll review it soon.`);
                    joinForm.reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert(`Application failed: ${error.text || 'Unknown error'}. Please try again or contact us.`);
                });
        });
    }
}


