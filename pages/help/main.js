import HelpContent from '../../components/helpContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/responsive-navbar.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const helpContent = HelpContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(helpContent);
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
}

document.addEventListener('DOMContentLoaded', App);