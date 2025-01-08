import HistoryContent from '../../components/historyContent.js';
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
  const historyContent = HistoryContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(historyContent);
  app.appendChild(footer);

  NavbarControl();
}

document.addEventListener('DOMContentLoaded', App);
