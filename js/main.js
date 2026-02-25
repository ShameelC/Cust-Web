// MOBILE MENU TOGGLE
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle) {
toggle.addEventListener("click", function () {
navLinks.classList.toggle("active");
});
}

// SCROLL TO TOP BUTTON
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
window.addEventListener("scroll", function () {
if (window.scrollY > 300) {
scrollBtn.style.display = "block";
} else {
scrollBtn.style.display = "none";
}
});

scrollBtn.addEventListener("click", function () {
window.scrollTo({ top: 0, behavior: "smooth" });
});
}

// BASIC FORM VALIDATION (STATIC)
document.querySelectorAll("form").forEach(form => {
form.addEventListener("submit", function (e) {
const email = form.querySelector("input[type='email']");
if (email && !email.value.includes("@")) {
alert("Please enter a valid email address.");
e.preventDefault();
}
});
});
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle) {
toggle.addEventListener("click", function () {
navLinks.classList.toggle("active");
});
}
