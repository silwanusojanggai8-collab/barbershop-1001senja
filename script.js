// ===== MOBILE MENU =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== SET TANGGAL MINIMAL HARI INI =====
const tanggalInput = document.getElementById('tanggal');
const today = new Date().toISOString().split('T')[0];
tanggalInput.min = today;

// ===== FORM BOOKING =====
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  alert(`Terima kasih, ${nama}! Booking Anda telah kami terima. Kami akan menghubungi Anda untuk konfirmasi.`);
  bookingForm.reset();
});