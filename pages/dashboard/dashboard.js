import DashboardContent from '../../components/dashboardContent.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/responsive-navbar.js';
import addEventListenerNavbar from '../../components/addEventListenerNavbar.js';
import getArrayJson from '../../utils/getArrayJson.js';
import isEmptyObject from '../../utils/isEmptyObject.js';
import CardJson from '../../components/cardJson.js';
import OperationDevicesLocal from '../../data/operationDevicesLocal.js';

async function DeviceInfo() {
  const jsonData = await getArrayJson(OperationDevicesLocal, 'Sensor-1');
  if (isEmptyObject(jsonData)) {
    console.log('jsonData Data kosong');
    return;
  }
  const cardJson = CardJson(jsonData, 'Actuator');

  const DeviceInfo = document.getElementById('device-info');
  DeviceInfo.appendChild(cardJson);
  return DeviceInfo;
}

async function App() {
  const app = document.getElementById('app');

  // Buat dan tambahkan komponen
  const navbar = Navbar();
  const dashboardContent = await DashboardContent();
  const footer = Footer();

  app.appendChild(navbar);

  //Dashboard Content
  app.appendChild(dashboardContent);
  app.appendChild(footer);
  addEventListenerNavbar(); //aktifkan toggle
}

document.addEventListener('DOMContentLoaded', function () {
  App();
  //Fungsi yang dijalankan setelah DOM load total
  DeviceInfo();
});
