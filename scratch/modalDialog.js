import getArrayJson from '../utils/getArrayJson.js';
import ConfigDevicesLocal from '../data/configDevicesLocal.js';
import CardJson from '../components/cardJson.js';

async function ModalDialog() {
  const detailDev = document.getElementById('detail-device');
  let resulDev = {};

  // Referensi elemen
  const modal = document.getElementById('modal');
  const openModalButton = document.getElementById('openModal');
  const cancelButton = document.getElementById('cancelButton');
  const backdrop = document.getElementById('backdrop');

  // Fungsi untuk membuka modal
  const openModal = async (tagname) => {
    resulDev = await getArrayJson(ConfigDevicesLocal, tagname);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.querySelector('button').focus(); // Fokus pada tombol pertama di modal
    if (detailDev) {
      // Cek apakah elemen ada
      detailDev.innerHTML = ''; // Menghapus semua anak elemen
    }
    detailDev.appendChild(CardJson(resulDev));
    return detailDev;
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  // Tambahkan event listener
  //openModalButton.addEventListener('click', openModal);
  openModalButton.addEventListener('click', (event) => {
    const tagname = event.target.getAttribute('data-tagname'); // Ambil parameter
    console.log('tagname : ', tagname);
    openModal(tagname); // Panggil openModal
  });
  cancelButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Tutup modal saat tombol "Esc" ditekan
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

document.addEventListener(
  'DOMContentLoaded',
  (async () => {
    await ModalDialog();
  })()
);
