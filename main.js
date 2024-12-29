import Navbar from './components/navbar.js';
import HomeContent from './components/homeContent.js';
import Footer from './components/footer.js';
import NavbarControl from './components/navbarControl.js';
import ModalDialogFrame from './components/modalDialogFrame.js';
import ModalDialogFitur from './components/modalDialogFitur.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
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
