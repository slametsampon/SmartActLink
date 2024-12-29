import HistoryContent from '../../components/historyContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import NavbarControl from '../../components/navbarControl.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const historyContent = HistoryContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(historyContent);
  app.appendChild(footer);

  NavbarControl();
}

document.addEventListener('DOMContentLoaded', App);
