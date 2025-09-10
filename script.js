(function() {
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key

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

            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you, ${formData.name}! Your ${formData.service} booking is confirmed.\nDetails:\n• Service: ${formData.service}\n• Project: ${formData.project_type}\n• Location: ${formData.location}\n• Details: ${formData.details}\nWe’ll contact you soon.`);
                    document.getElementById("request-form").reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert(`Booking failed: ${error.text || 'Unknown error'}. Please try again or contact us.`);
                });
        });
    }

    // Q&A Form submission
    const qaForm = document.getElementById("qa-form");
    if (qaForm) {
        qaForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const question = document.getElementById("qa-question").value;
            const answer = document.getElementById("qa-answer").value || "No answer provided.";
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", { question: question, answer: answer })
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you! Your question "${question}" is under review.`);
                    document.getElementById("qa-form").reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert(`Submission failed: ${error.text || 'Unknown error'}. Please try again.`);
                });
        });
    }

    // Article Form submission
    const articleForm = document.getElementById("article-form");
    if (articleForm) {
        articleForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const title = document.getElementById("article-title").value;
            const content = document.getElementById("article-content").value;
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", { title: title, content: content })
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you! Your article "${title}" is under review.`);
                    document.getElementById("article-form").reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert(`Submission failed: ${error.text || 'Unknown error'}. Please try again.`);
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

            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you, ${formData.name}! Your application has been received.\nDetails:\n• Experience: ${formData.experience} years\n• Skills: ${formData.skills}\n• Details: ${formData.details}\nWe’ll review it soon.`);
                    document.getElementById("join-form").reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert(`Application failed: ${error.text || 'Unknown error'}. Please try again.`);
                });
        });
    }
})();
(function() {
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key

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

            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you, ${formData.name}! Your ${formData.service} booking is confirmed.\nDetails:\n• Service: ${formData.service}\n• Project: ${formData.project_type}\n• Location: ${formData.location}\n• Details: ${formData.details}\nWe’ll contact you soon.`);
                    document.getElementById("request-form").reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert(`Booking failed: ${error.text || 'Unknown error'}. Please try again or contact us.`);
                });
        });
    }

    // Q&A Form submission
    const qaForm = document.getElementById("qa-form");
    if (qaForm) {
        qaForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const question = document.getElementById("qa-question").value;
            const answer = document.getElementById("qa-answer").value || "No answer provided.";
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", { question: question, answer: answer })
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you! Your question "${question}" is under review.`);
                    document.getElementById("qa-form").reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert(`Submission failed: ${error.text || 'Unknown error'}. Please try again.`);
                });
        });
    }

    // Article Form submission
    const articleForm = document.getElementById("article-form");
    if (articleForm) {
        articleForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const title = document.getElementById("article-title").value;
            const content = document.getElementById("article-content").value;
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", { title: title, content: content })
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you! Your article "${title}" is under review.`);
                    document.getElementById("article-form").reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert(`Submission failed: ${error.text || 'Unknown error'}. Please try again.`);
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

            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you, ${formData.name}! Your application has been received.\nDetails:\n• Experience: ${formData.experience} years\n• Skills: ${formData.skills}\n• Details: ${formData.details}\nWe’ll review it soon.`);
                    document.getElementById("join-form").reset();
                }, function(error) {
                    console.error('FAILED...', error);
                    alert(`Application failed: ${error.text || 'Unknown error'}. Please try again.`);
                });
        });
    }
})();