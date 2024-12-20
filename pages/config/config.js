import ConfigContent from '../../components/configContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/responsive-navbar.js';
import getDisplayStaticData from '../../utils/getDisplayStaticData.js';
import addEventListenerNavbar from '../../components/addEventListenerNavbar.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const configContent = ConfigContent();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(configContent);
  app.appendChild(footer);
  addEventListenerNavbar(); //aktifkan toggle
  getDisplayStaticData(); //isi data ke form
}

document.addEventListener('DOMContentLoaded', App);
