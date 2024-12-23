import Footer from '../components/footer.js';
import Navbar from '../components/responsive-navbar.js';
import CardJson from '../components/cardJson.js';
import addEventListenerNavbar from '../components/addEventListenerNavbar.js';
//import combineJson from './combineJson.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(CardJson());
  app.appendChild(footer);
  addEventListenerNavbar(); //aktifkan toggle
  getDisplayStaticData(); //isi data ke form
}

document.addEventListener('DOMContentLoaded', App);
