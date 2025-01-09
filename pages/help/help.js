import HelpContent from '../../components/helpContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import NavbarControl from '../../components/navbarControl.js';
import getCurrentPath from '../../utils/getCurrentPath.js';

function App() {
  const app = document.getElementById('app');
  // Mendapatkan URL halaman saat ini
  const currentPath = getCurrentPath();
  // Buat dan tambahkan komponen
  const navbar = Navbar(currentPath);
  const helpContent = HelpContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(helpContent);
  app.appendChild(footer);
  NavbarControl();
}

document.addEventListener('DOMContentLoaded', App);
