import AboutContent from '../../components/aboutContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/responsive-navbar.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const aboutContent = AboutContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(aboutContent);
  app.appendChild(footer);

  /**
   * Add listentner pada toggle dan harus di-eksekusi
   * pada akhir elemen DOM agar bisa mengambil id
   */
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  // Tampilkan/Sembunyikan menu saat tombol hamburger diklik
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Tutup menu jika item diklik
  menu.querySelectorAll('a').forEach((item) => {
    console.log('item : ', item);
    item.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
  // Dapatkan URL lengkap
  console.log('URL Penuh:', window.location.href);

  // Dapatkan path URL (rute)
  console.log('Path:', window.location.pathname);

  // Dapatkan hostname (domain)
  console.log('Hostname:', window.location.hostname);

  // Dapatkan parameter query string
  console.log('Query String:', window.location.search);
}

document.addEventListener('DOMContentLoaded', App);
