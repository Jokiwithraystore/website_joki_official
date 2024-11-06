// Toggle menu visibility
const tombolMenu = document.querySelector('.tombol-menu');
const menu = document.querySelector('.menu');

if (tombolMenu && menu) {
    tombolMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// Open and close modals
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside of the content
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Form handling for Sign Up
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        alert(`Sign Up Successful for ${username}`);
        closeModal('signup-modal');
    });
}

// Form handling for Log In
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        alert(`Log In Successful for ${username}`);
        closeModal('login-modal');
    });
}
// Function to toggle the visibility of the mobile menu
document.getElementById('menu-icon').addEventListener('click', function() {
    const menuList = document.getElementById('menu-list');
    menuList.classList.toggle('hidden'); // Toggle the hidden class to show/hide the menu
  });
  
  // Function to toggle the visibility of the navigation menu in the second code block
  function toggleMenu() {
    const menu = document.querySelector('.nav-list');
    menu.classList.toggle('show'); // Adds or removes a class that makes the menu visible
  }
  
  // Function to open a modal by its id
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block'; // Show the modal
  }
  
  // Function to close a modal by its id
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none'; // Hide the modal
  }
  
  // Close the modal when clicking outside of it
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none'; // Close modal if clicked outside
      }
    });
  };
  
  // This can also be used for both modals to close by clicking the close button
  document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
      const modal = closeButton.closest('.modal');
      modal.style.display = 'none'; // Close the modal when close button is clicked
    });
  });
  

