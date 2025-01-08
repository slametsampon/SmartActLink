import DashboardContent from '../../components/dashboardContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import NavbarControl from '../../components/navbarControl.js';
import getCurrentPage from '../../utils/getCurrentPage.js';

async function App() {
  const app = document.getElementById('app');
  // Mendapatkan URL halaman saat ini
  const currentPage = getCurrentPage();
  // Buat dan tambahkan komponen
  const navbar = Navbar(currentPage);
  const dashboardContent = await DashboardContent();
  const footer = Footer();

  app.appendChild(navbar);

  //Dashboard Content
  app.appendChild(dashboardContent);
  app.appendChild(footer);
  NavbarControl(); //aktifkan toggle
}

document.addEventListener('DOMContentLoaded', () => {
  App();
  //Fungsi yang dijalankan setelah DOM load total
});
