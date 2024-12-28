import ModalDialogFrame from './modalDialogFrame.js';
import DetailFitur from '../data/detailFitur.js';
import CardDetailFitur from './cardDetailFitur.js';
function getFiturDetail(fitur) {
  let fiturDisplay = '';
  if (fitur === 'mandiri') {
    fiturDisplay = DetailFitur.mandiri;
  }
  if (fitur === 'aksesHP') {
    fiturDisplay = DetailFitur.aksesHP;
  }
  if (fitur === 'kompatibel') {
    fiturDisplay = DetailFitur.kompatibel;
  }
  return fiturDisplay;
}
async function ModalDialog() {
  const detailContent = document.getElementById('detail-content');
  let resultContent = {};

  // Referensi elemen
  const modal = document.getElementById('modal');
  const openModalMandiriButton = document.getElementById('openModalMandiri');
  const openModalAksesHPButton = document.getElementById('openModalAksesHP');
  const openModalKompatibelButton = document.getElementById(
    'openModalKompatibel'
  );
  const cancelButton = document.getElementById('cancelButton');
  const backdrop = document.getElementById('backdrop');

  // Fungsi untuk membuka modal
  const openModal = async (fitur) => {
    resultContent = getFiturDetail(fitur);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.querySelector('button').focus(); // Fokus pada tombol pertama di modal
    if (detailContent) {
      // Cek apakah elemen ada
      detailContent.innerHTML = ''; // Menghapus semua anak elemen
    }
    detailContent.appendChild(CardDetailFitur(resultContent, 'Detail Fitur'));
    return detailContent;
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  // Tambahkan event listener
  openModalMandiriButton.addEventListener('click', (event) => {
    const fitur = event.currentTarget.getAttribute('data-fitur'); // Ambil parameter
    openModal(fitur); // Panggil openModal
  });

  openModalAksesHPButton.addEventListener('click', (event) => {
    const fitur = event.currentTarget.getAttribute('data-fitur'); // Ambil parameter
    openModal(fitur); // Panggil openModal
  });

  openModalKompatibelButton.addEventListener('click', (event) => {
    const fitur = event.currentTarget.getAttribute('data-fitur'); // Ambil parameter
    openModal(fitur); // Panggil openModal
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
    ModalDialogFrame();
    await ModalDialog();
  })()
);
