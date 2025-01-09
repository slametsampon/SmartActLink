import DashboardContent from '../../components/dashboardContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import NavbarControl from '../../components/navbarControl.js';
import getCurrentPath from '../../utils/getCurrentPath.js';

async function App() {
  const app = document.getElementById('app');
  // Mendapatkan URL halaman saat ini
  const currentPath = getCurrentPath();
  // Buat dan tambahkan komponen
  const navbar = Navbar(currentPath);
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
