import HelpContent from '../../components/helpContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/responsive-navbar.js';
import addEventListenerNavbar from '../../components/addEventListenerNavbar.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const helpContent = HelpContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(helpContent);
  app.appendChild(footer);
  addEventListenerNavbar();
}

document.addEventListener('DOMContentLoaded', App);
