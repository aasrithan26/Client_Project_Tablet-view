script_js =
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Load Dark Mode Preference on Page Load
window.onload = () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) document.body.classList.add("dark-mode");
};

// Simple Feedback Form Handler
const form = document.getElementById("feedbackForm");
const response = document.getElementById("formResponse");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form processing
    response.textContent = `Thank you, ${name}! Your message has been received.`;
    form.reset();
  });
}

