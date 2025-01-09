import DevicesContent from '../../components/devicesContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import NavbarControl from '../../components/navbarControl.js';
import ModalDialogFrame from '../../components/modalDialogFrame.js';
import ModalDialogDetailDevice from '../../components/modalDialogDetailDevice.js';
import getCurrentPath from '../../utils/getCurrentPath.js';

function App() {
  const app = document.getElementById('app');
  // Mendapatkan URL halaman saat ini
  const currentPath = getCurrentPath();
  // Buat dan tambahkan komponen
  const navbar = Navbar(currentPath);
  const devicesContent = DevicesContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(devicesContent);
  app.appendChild(footer);
  NavbarControl();
}

//document.addEventListener('DOMContentLoaded', App);
document.addEventListener('DOMContentLoaded', async () => {
  App();
  ModalDialogFrame();
  await ModalDialogDetailDevice();
});
