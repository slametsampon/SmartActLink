export default function DeviceInfo() {
  const DeviceInfo = document.getElementById('device-info');
  DeviceInfo.innerHTML = `
        <h2 class="text-lg font-bold">Peralatan</h2>
        <p><strong>Nama:</strong> Pompa Air 1</p>
        <p><strong>Tipe:</strong> Pompa</p>
        <p><strong>Status Koneksi:</strong> <span id="device-status" class="bg-red-500 text-white px-2 py-1 rounded-xl">OFF</span></p>
        <button id="toggle-btn" onclick="toggleDevice()" class="mt-4 bg-blue-600 hover:bg-blue-800 hover:font-bold text-white px-4 py-2 rounded-3xl">Turn ON</button>
    `;
  return DeviceInfo;
}
