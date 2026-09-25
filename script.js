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

// ===== FORM BOOKING → WHATSAPP =====
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Ambil data dari form
  const nama = document.getElementById('nama').value;
  const telepon = document.getElementById('telepon').value;
  const layanan = document.getElementById('layanan').value;
  const tanggal = document.getElementById('tanggal').value;
  const jam = document.getElementById('jam').value;
  const catatan = document.getElementById('catatan').value || '-';

  // Format tanggal jadi lebih rapi
  const tglFormat = new Date(tanggal).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // ⚠️ GANTI NOMOR INI DENGAN NOMOR WA KAMU!
  // Format: 62 + nomor tanpa 0 di depan
  // Contoh: 0812-3456-7890 → 6281234567890
  const nomorWA = '6282142645637';

  // Susun pesan
  const pesan = 
`Halo *Barbershop 1001Senja* 👋

Saya mau booking:

👤 *Nama:* ${nama}
📱 *No. HP:* ${telepon}
✂️ *Layanan:* ${layanan}
📅 *Tanggal:* ${tglFormat}
⏰ *Jam:* ${jam}
📝 *Catatan:* ${catatan}

Mohon konfirmasinya ya. Terima kasih! 🙏`;

  // Buka WhatsApp
  const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(urlWA, '_blank');

  // Reset form
  bookingForm.reset();
});
Update nomor WhatsApp booking
