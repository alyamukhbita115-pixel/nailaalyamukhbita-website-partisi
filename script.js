// Navigasi mobile
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".topbar nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Tutup menu setelah memilih halaman
document.querySelectorAll(".topbar nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Tombol scroll di cover
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth"
  });
});

// Animasi sederhana ketika elemen masuk layar
const cards = document.querySelectorAll(".content-card, .photo-card, .mini-note");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach((card) => observer.observe(card));
