/* ============================================================
   Train with JATIN — Landing Page Script
   Small, simple interactions. No frameworks needed.
   ============================================================ */

// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Enquiry form -> opens WhatsApp with a pre-filled message.
// This needs no server. Change COACH_PHONE below if your number changes.
const COACH_PHONE = "918218262260"; // country code (91) + number, no + or spaces

const form = document.getElementById("enquiryForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get("name") || "").trim();
  const phone = (data.get("phone") || "").trim();
  const goal = data.get("goal") || "";
  const message = (data.get("message") || "").trim();

  const text =
    `Hi Jatin, I'd like to start coaching.%0A%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Goal: ${goal}%0A` +
    `Message: ${message}`;

  formNote.hidden = false;
  window.open(`https://wa.me/${COACH_PHONE}?text=${text}`, "_blank");
  form.reset();
});
