import AboutContent from '../../components/aboutContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import NavbarControl from '../../components/navbarControl.js';
import getCurrentPage from '../../utils/getCurrentPage.js';

function App() {
  const app = document.getElementById('app');
  // Mendapatkan URL halaman saat ini
  const currentPage = getCurrentPage();
  // Buat dan tambahkan komponen
  const navbar = Navbar(currentPage);
  const aboutContent = AboutContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(aboutContent);
  app.appendChild(footer);
  NavbarControl();
}

document.addEventListener('DOMContentLoaded', App);
