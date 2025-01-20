// Show project details when the "View Details" button is clicked
function showProjectDetails(projectId) {
  const projectDetails = document.getElementById(projectId);
  
  // Toggle the visibility of the project details
  if (projectDetails.style.display === 'block') {
    projectDetails.style.display = 'none';
  } else {
    projectDetails.style.display = 'block';
  }
}

// Contact form validation (basic example)
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Message sent! Thank you for reaching out.");
});
