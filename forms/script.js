const form = document.getElementById('simple-form');

// Add submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting
  
  // Get form values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const dob = document.getElementById('dob').value;
  const mobileNumber = document.getElementById('mobile-number').value;

  // Show alert with form details
  alert(`First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nMobile Number: ${mobileNumber}`);
});