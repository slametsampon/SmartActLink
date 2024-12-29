import ConfigContent from '../../components/configContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import NavbarControl from '../../components/navbarControl.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const configContent = ConfigContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(configContent);
  app.appendChild(footer);
  NavbarControl(); //aktifkan toggle
}

document.addEventListener('DOMContentLoaded', App);
