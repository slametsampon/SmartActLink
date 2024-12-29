import ModalDialogControl from './modalDialogControl.js';
import getFiturDetail from '../utils/getFiturDetail.js';
import ModalDialogFrame from '../components/modalDialogFrame.js';
import CardDetailContent from '../components/cardDetailContent.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render modal frame terlebih dahulu
  ModalDialogFrame();

  // Inisialisasi kontrol modal
  const { openModal } = ModalDialogControl();

  // Tombol untuk membuka modal
  const openModalButton = document.getElementById('openModal');
  if (!openModalButton) {
    console.error('main.js: Tombol "openModal" tidak ditemukan.');
    return;
  }

  // Tambahkan event listener untuk tombol
  openModalButton.addEventListener('click', (event) => {
    const fitur = event.target.getAttribute('data-fitur');
    if (!fitur) {
      console.warn(
        'main.js: Atribut "data-fitur" tidak ditemukan pada tombol.'
      );
      return;
    }

    // Ambil detail fitur dan buat konten modal
    const resultContent = getFiturDetail(fitur);
    const content = CardDetailContent(resultContent);

    // Buka modal dengan konten
    openModal(content);
  });
});
