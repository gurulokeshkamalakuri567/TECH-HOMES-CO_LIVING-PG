// ===== NAVBAR TOGGLE FOR MOBILE =====
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// ===== CONTACT US BUTTON (WhatsApp) =====
document.getElementById("contact-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const number = "918106103999"; // ✅ Correct WhatsApp number (no spaces)
  const msg = "Hello! I'm interested in Tech Homes PG. Can you share more details?";
  const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
});

// ===== CONTACT FORM SEND TO WHATSAPP =====
function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill all fields!");
    return;
  }

  const number = "918106103999"; // ✅ Correct WhatsApp number
  const text = `*New PG Enquiry*\n\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n💬 Message: ${message}`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
  document.getElementById("contactForm").reset();
}

// ===== BOOK NOW BUTTONS =====
function bookNow(plan) {
  const number = "918106103999"; // ✅ Correct WhatsApp number
  const msg = `Hello! I’d like to book the *${plan}* plan at Tech Homes PG.`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// ===== SCROLL ANIMATION (About Section) =====
const fadeUpElements = document.querySelectorAll(".fade-up");

function showOnScroll() {
  fadeUpElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
