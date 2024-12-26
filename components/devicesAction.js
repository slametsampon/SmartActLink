import summaryDevices from '../utils/summaryDevices.js';
import getArrayJson from '../utils/getArrayJson.js';
import ConfigDevicesLocal from '../data/configDevicesLocal.js';
import CardJson from './cardJson.js';
// Mock data
// const devices = [
//   { id: 1, tagname: 'Pompa Air', type: 'Pompa', status: 'Aktif' },
//   { id: 2, tagname: 'Sensor Suhu', type: 'Sensor', status: 'Tidak Aktif' },
// ];

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', async () => {
  const modal = document.getElementById('modal');
  const detailDev = document.getElementById('detail-device');
  const devices = await summaryDevices();
  const deviceList = document.getElementById('deviceList');
  const search = document.getElementById('search');
  const addDevice = document.getElementById('addDevice');

  // Render Device List
  const renderDevices = (filter = '') => {
    deviceList.innerHTML = devices
      .filter((d) => d.tagname.toLowerCase().includes(filter.toLowerCase()))
      .map(
        (device) => `
          <tr class="border-b">
            <td>
              <button 
                onclick="detailDevice('${device.tagname}')"
                class="p-3 hover:bg-blue-700 hover:text-white hover:rounded-xl">${
                  device.tagname
                }
              </button>
            </td>
            <td class="p-4">${device.type}</td>
            <td class="p-4">
              <span class="px-2 py-1 rounded ${
                device.link === 'connected' ? 'bg-green-200' : 'bg-red-200'
              }">${device.link}</span>
            </td>
            <td class="p-4">
              <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onclick="deleteDevice(${
                device.id
              })">Hapus</button>
            </td>
          </tr>
        `
      )
      .join('');
  };

  // Tambah perangkat baru
  addDevice.addEventListener('click', () => {
    const newDevice = {
      id: devices.length + 1,
      tagname: 'Perangkat Baru',
      type: 'Lainnya',
      link: 'fail',
    };
    devices.push(newDevice);
    renderDevices();
  });

  // Cari perangkat
  search.addEventListener('input', (e) => renderDevices(e.target.value));

  // Hapus perangkat
  window.deleteDevice = (id) => {
    const index = devices.findIndex((d) => d.id === id);
    if (index > -1) {
      devices.splice(index, 1);
      renderDevices();
    }
  };

  // Detail perangkat
  window.detailDevice = async (tagname) => {
    //console.log('Detail tagname : ', tagname);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.querySelector('button').focus(); // Fokus pada tombol pertama di modal
    const resulDev = await getArrayJson(ConfigDevicesLocal, tagname);
    //console.log('resulDev : ', resulDev);
    if (detailDev) {
      // Cek apakah elemen ada
      detailDev.innerHTML = ''; // Menghapus semua anak elemen
    }
    detailDev.appendChild(CardJson(resulDev));
    return detailDev;
  };

  // Render perangkat saat pertama kali
  renderDevices();
});
