// EVENT HANDLING

// Button click
document.getElementById('magicButton').addEventListener('click', function() {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "lightgreen";
  });
  
  document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
  });
  
  
  document.getElementById('magicButton').addEventListener('dblclick', function() {
    alert("You double-clicked the magic button!");
  });
  
  // INTERACTIVE ELEMENTS
  
  // Image gallery
  const images = [
    "https://images.unsplash.com/photo-1586536528502-9b591c16b6d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbGxlcnklMjBhbmltYWxzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1623935149803-7687a4353972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsbGVyeSUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1679658882087-bced5935aa19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FsbGVyeSUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"
  ];
  
  let currentImageIndex = 0;
  
  document.getElementById('nextImage').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImageIndex];
  });
  
  // Tabs
  const tabLinks = document.querySelectorAll(".tablinks");
  const tabContents = document.querySelectorAll(".tabcontent");
  
  tabLinks.forEach(link => {
    link.addEventListener('click', function() {
      const tabId = this.getAttribute("data-tab");
  
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
  
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // FORM VALIDATION
  
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('formMessage');
  
    // Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (!email || !password) {
      messageDiv.textContent = "All fields are required.";
    } else if (!email.match(emailPattern)) {
      messageDiv.textContent = "Please enter a valid email address.";
    } else if (password.length < 8) {
      messageDiv.textContent = "Password must be at least 8 characters.";
    } else {
      messageDiv.style.color = "green";
      messageDiv.textContent = "Form submitted successfully!";
    }
  });
  
  // Real-time feedback
  document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const messageDiv = document.getElementById('formMessage');
  
    if (password.length < 8) {
      messageDiv.textContent = "Password too short!";
      messageDiv.style.color = "red";
    } else {
      messageDiv.textContent = "Password looks good!";
      messageDiv.style.color = "green";
    }
  });
  