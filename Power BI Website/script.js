document.addEventListener('DOMContentLoaded', function() {
    // Add your scripts or interactions here
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Additional scripts can be added as needed
});

// Function to handle form submission (you can add validation, AJAX, etc.)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
});
