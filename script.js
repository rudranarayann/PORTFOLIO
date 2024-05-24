const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});
document.addEventListener("DOMContentLoaded", function () {
	const textElement = document.querySelector('.animated-text');
	const text = textElement.textContent;
	textElement.innerHTML = '';
	text.split('').forEach((letter, index) => {
		const span = document.createElement('span');
		span.textContent = letter;
		span.style.setProperty('--i', index);
		textElement.appendChild(span);
	});
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Here you can add your form submission logic
        // For example, send form data to the server using fetch or AJAX

        // Display the success message
        successMessage.style.display = 'block';

        // Optionally, clear the form fields
        contactForm.reset();
    });
});
