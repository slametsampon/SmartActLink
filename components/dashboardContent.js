import LogActivity from './logActivity.js';
import DeviceInfo from './deviceInfo.js';
import DeviceTrending from './deviceTrending.js';

export default async function DashboardContent() {
  const logData = [
    { message: 'Perangkat diaktifkan', time: '07:00' },
    { message: 'Perangkat dimatikan', time: '12:30' },
    { message: 'Perangkat di-reset', time: '15:45' },
  ];

  const infoDev = await DeviceInfo();
  // Akses variabel environment
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20 ';

  const mainContent = document.createElement('div');
  mainContent.className =
    'container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  const wrapperDevicesInfo = document.createElement('div');
  wrapperDevicesInfo.appendChild(infoDev);

  const devicesTrending = document.createElement('div');
  devicesTrending.className = 'bg-blue-50 shadow-md rounded-lg p-3 mb-3';
  devicesTrending.appendChild(DeviceTrending());

  const wrapperLogActivity = document.createElement('div');
  wrapperLogActivity.className =
    'bg-white shadow-md rounded-lg p-3 col-span-1 md:col-span-2';
  wrapperLogActivity.appendChild(LogActivity(logData, 'Log Aktivitas'));

  mainContent.appendChild(wrapperDevicesInfo);
  mainContent.appendChild(devicesTrending);
  mainContent.appendChild(wrapperLogActivity);
  main.innerHTML = `
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4 rounded-xl text-center text-xl font-bold">Smart<spa class="text-orange-600 italic">Act</spa>Link Dashboard</header>
  `;
  main.appendChild(mainContent);
  return main;
}
