import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import NavbarControl from '../../components/navbarControl.js';
import RegisterContent from '../../components/registerContent.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const registerContent = RegisterContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(registerContent);
  app.appendChild(footer);
  NavbarControl();
}

document.addEventListener('DOMContentLoaded', App);
