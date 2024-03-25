const roles = ['Coding', 'Development'];
let index = 0;
let charIndex = 0;
let direction = 1; // 1 for forward, -1 for backward

function typeRole() {
    const role = roles[index];
    const textElement = document.getElementById('role');
    textElement.textContent = role.substring(0, charIndex);

    charIndex += direction;

    if (charIndex > role.length) {
        direction = -1;
        charIndex = role.length;
        setTimeout(eraseRole, 1000); // Display for 1-2 seconds
    } else if (charIndex < 0) {
        direction = 1;
        charIndex = 0;
        index = (index + 1) % roles.length;
        setTimeout(typeRole, 1000); // Display for 1-2 seconds
    } else {
        setTimeout(typeRole, 100); // Typing speed
    }
}

function eraseRole() {
    setTimeout(typeRole, 100); // Start typing again
}

// Start the typing animation
typeRole();


$(document).ready(function () {
  // Handle form submission
  $('#myForm').submit(function (e) {
      e.preventDefault(); // Prevent default form submission

      // Your form submission logic here (e.g., using fetch)

      // Clear form content
      $('#myForm')[0].reset();

      // Display toast message
      $('.toast').toast('show');
  });
});


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent HTML submission
  
  // Create payload of type multipart/form-data (awlays of this type when using the FormData() constructor):
  const fd = new FormData(form);
  console.log(fd);
  // Convert to URL-encoded string:
  const urlEncoded = new URLSearchParams(fd).toString();
  
  fetch('http://localhost:3000', {
    method: "POST",
    body: urlEncoded, // just 'fd' for multipart/form-data
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
      // Content-type header should only be set if data is url-encoded! A FormData object will set the header as multipart/form-data automatically (and setting it manually may lead to an error)
    }
  })

})






