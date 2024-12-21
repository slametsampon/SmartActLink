import AboutContent from '../../components/aboutContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/responsive-navbar.js';
import addEventListenerNavbar from '../../components/addEventListenerNavbar.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const aboutContent = AboutContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(aboutContent);
  app.appendChild(footer);
  addEventListenerNavbar();
}

document.addEventListener('DOMContentLoaded', App);
