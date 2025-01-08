import Navbar from './components/navbar.js';
import HomeContent from './components/homeContent.js';
import Footer from './components/footer.js';
import NavbarControl from './components/navbarControl.js';
import ModalDialogFrame from './components/modalDialogFrame.js';
import ModalDialogFitur from './components/modalDialogFitur.js';
import getCurrentPage from './utils/getCurrentPage.js';

function App() {
  const app = document.getElementById('app');
  // Mendapatkan URL halaman saat ini
  const currentPage = getCurrentPage();

  // Buat dan tambahkan komponen
  const navbar = Navbar(currentPage);
  const homeContent = HomeContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(homeContent);
  app.appendChild(footer);
  NavbarControl();
}

//document.addEventListener('DOMContentLoaded', App);
document.addEventListener('DOMContentLoaded', () => {
  App();
  ModalDialogFrame();
  ModalDialogFitur();
});
