import ModalDialog from './modalDialog.js';
import getFiturDetail from '../utils/getFiturDetail.js';

document.addEventListener('DOMContentLoaded', async () => {
  const fitur = 'mandiri'; // Data yang ingin ditampilkan di modal
  const resultContent = getFiturDetail(fitur); // Ambil data untuk modal

  await ModalDialog({
    resultContent, // Konten untuk modal
  });
});
