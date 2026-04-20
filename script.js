// Initialize Animations
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out'
});

// Professional Typing Effect
const text = "Hello, I'm Mayur Jagtap";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}

// Start sequence on load
window.addEventListener('DOMContentLoaded', () => {
  typing();
});

// Modern Alert for Form
function sendMessage(event) {
  event.preventDefault();
  const btn = event.target.querySelector('button');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  
  setTimeout(() => {
    alert("Message Sent! Mayur will contact you shortly.");
    btn.innerHTML = 'Send Message';
    event.target.reset();
  }, 1500);
}