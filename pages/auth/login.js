import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import NavbarControl from '../../components/navbarControl.js';
import LoginContent from '../../components/loginContent.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const loginContent = LoginContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(loginContent);
  app.appendChild(footer);
  NavbarControl();
}

document.addEventListener('DOMContentLoaded', App);
