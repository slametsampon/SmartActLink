import Footer from '../components/footer.js';
import Navbar from '../components/responsive-navbar.js';
import CardJson from '../components/cardJson.js';
import addEventListenerNavbar from '../components/addEventListenerNavbar.js';
import combineJson from './combineJson.js';

async function App() {
  const app = document.getElementById('app');
  const jsonCombine = await combineJson('Pompa-1');
  console.log('jsonCombine : ', jsonCombine);

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const cardJson = CardJson(jsonCombine);
  const footer = Footer();

  app.appendChild(navbar);
  app.appendChild(cardJson);
  app.appendChild(footer);
  addEventListenerNavbar(); //aktifkan toggle
}

document.addEventListener('DOMContentLoaded', App);
