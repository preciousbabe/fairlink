


// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize Bootstrap Carousel with 10-second interval and looping
const carousel = document.querySelector('#hero-carousel');
if (carousel) {
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 5000, // 10 seconds
        ride: 'carousel',
        wrap: true, // Ensures looping from last slide to first
    });
}

// Responsive Navbar Toggle with Auto Close on Link Click
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-collapse');
if (navbarToggler && navbarMenu) {
    navbarToggler.addEventListener('click', function () {
        navbarMenu.classList.toggle('show');
        navbarToggler.classList.toggle('collapsed');
    });

    const navLinks = navbarMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarMenu.classList.remove('show');
            navbarToggler.classList.add('collapsed');
        });
    });
}


// Toggle functionality for "Read More/Less"
document.querySelectorAll('[id$="-toggle"]').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.id.split('-')[0];
        const text = document.getElementById(`${section}-text`);
        const moreText = text.querySelector('.more-text');

        if (moreText.classList.contains('d-none')) {
            moreText.classList.remove('d-none');
            button.textContent = "Read Less";
        } else {
            moreText.classList.add('d-none');
            button.textContent = "Read More";
        }
    });
});




  document.addEventListener("DOMContentLoaded", function () {
    // Get all carousel buttons
    const buttons = document.querySelectorAll(".carousel-caption .btn");

    buttons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the target accordion ID from the href or data attribute
        const targetId = this.getAttribute("href") || this.dataset.bsTarget;

        // Find the corresponding accordion item
        const accordionItem = document.querySelector(targetId);

        if (accordionItem) {
          // Close all other accordion items
          const openItems = document.querySelectorAll(".accordion-collapse.show");
          openItems.forEach((item) => item.classList.remove("show"));

          // Open the targeted accordion item
          accordionItem.classList.add("show");

          // Scroll to the accordion
          accordionItem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  });







document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare the message to send on WhatsApp
    const whatsappMessage = `Hello, I need assistance!%0A%0AFull Name: ${fullName}%0AEmail: ${email}%0AMessage: ${message}`;

    // WhatsApp API URL
    const whatsappURL = `https://wa.me/+2347019552088?text=${whatsappMessage}`;

    // Open WhatsApp with the prepared message
    window.open(whatsappURL, "_blank");
});
