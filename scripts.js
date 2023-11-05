/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    // Since you can't edit the HTML and add an ID or class, we target the submit button directly
    var submitButton = document.querySelector('button[type="submit"]');
  
    // Assuming that the button is a direct child of the form
    var form = submitButton.closest('form');
    var messageDiv = document.querySelector('.message');
  
    // Make sure we have the form before adding the event listener
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submit action
        
        // Get the email from the input field
        var emailInput = form.querySelector('input[type="email"]');
        var email = emailInput.value.trim();
  
        // Check if the email is not empty and is a valid email
        if (email && /\S+@\S+\.\S+/.test(email)) {
          // Display thank you message
          messageDiv.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
        } else {
          // Display validation message
          messageDiv.textContent = "Please enter a valid email address.";
        }
      });
    } else {
      console.error('Submit button or form not found');
    }
  });