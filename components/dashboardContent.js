export default function DashboardContent() {
  // Akses variabel environment
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  const mainContent = document.createElement('div');
  mainContent.className =
    'container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  const devicesInfo = document.createElement('div');
  devicesInfo.className = 'bg-blue-50 shadow-md rounded-lg p-3 mb-3';
  devicesInfo.id = 'device-info';

  const devicesTrending = document.createElement('div');
  devicesTrending.innerHTML = `
    <!-- Sensor Data Widget -->
    <div class="bg-green-100 shadow-md rounded-lg p-3">
        <h2 class="text-lg font-bold">Data Sensor</h2>
        <canvas id="sensor-chart" class="mt-4"></canvas>
    </div>
  `;

  const logActivity = document.createElement('div');
  logActivity.innerHTML = `
      <!-- Log Activity Widget -->
    <div 
        id="log-activity"
        class="bg-white shadow-md rounded-lg p-6 col-span-1 md:col-span-2"
    >
        <h2 class="text-lg font-bold">Log Aktivitas</h2>
        <ul id="log-list" class="list-disc ml-6">
            <li>Perangkat diaktifkan pada 07:00</li>
            <li>Perangkat dimatikan pada 12:30</li>
        </ul>
    </div>
`;
  mainContent.appendChild(devicesInfo);
  mainContent.appendChild(devicesTrending);
  mainContent.appendChild(logActivity);
  main.innerHTML = `
    <!-- Header -->
    <header class="bg-blue-600 text-white p-4 rounded-xl text-center text-xl font-bold">Smart<spa class="text-orange-600 italic">Act</spa>Link Dashboard</header>
  `;
  main.appendChild(mainContent);
  return main;
}
