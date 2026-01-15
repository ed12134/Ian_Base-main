// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  });

  // Close menu when clicking on a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});

// Certificate Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  const modal = document.getElementById("certificateModal");

  // Get all view certificate buttons
  const viewButtons = document.querySelectorAll(".view-certificate");

  // Get the modal elements
  const modalImg = document.getElementById("modalCertificateImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalIssuer = document.getElementById("modalIssuer");
  const modalDate = document.getElementById("modalDate");
  const closeBtn = document.querySelector(".close");

  // When user clicks a view certificate button
  viewButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = "block";
      modalImg.src = this.getAttribute('data-image');
      modalImg.alt = this.getAttribute('data-title') + ' Certificate';
      modalTitle.textContent = this.getAttribute('data-title');
      modalIssuer.textContent = this.getAttribute('data-issuer');
      modalDate.textContent = this.getAttribute('data-date');
    });
  });

  // When user clicks on (x), close the modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  // When user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Close modal when pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
});


