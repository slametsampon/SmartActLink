import DashboardContent from '../../components/dashboardContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/responsive-navbar.js';
import addEventListenerNavbar from '../../components/addEventListenerNavbar.js';
import DeviceInfo from '../../components/deviceInfo.js';
import LogActivity from '../../components/logActivity.js';

function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const dashboardContent = DashboardContent();
  const footer = Footer();

  app.appendChild(navbar);

  //Dashboard Content
  app.appendChild(dashboardContent);
  DeviceInfo();
  LogActivity();

  app.appendChild(footer);
  addEventListenerNavbar(); //aktifkan toggle
}

document.addEventListener('DOMContentLoaded', App);
