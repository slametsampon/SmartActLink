import ModalDialogControl from './modalDialogControl.js';
import getFiturDetail from '../utils/getFiturDetail.js';
import CardDetailContent from './cardDetailContent.js';
export default function ModalDialogFitur() {
  // Inisialisasi kontrol modal
  const { openModal } = ModalDialogControl();

  // Tombol untuk membuka modal
  const openModalMandiriButton = document.getElementById('openModalMandiri');
  if (!openModalMandiriButton) {
    console.error(
      'modalDialogFitur.js: Tombol "openModalMandiri" tidak ditemukan.'
    );
    return;
  }
  const openModalAksesHPButton = document.getElementById('openModalAksesHP');
  if (!openModalAksesHPButton) {
    console.error(
      'modalDialogFitur.js: Tombol "openModalAksesHP" tidak ditemukan.'
    );
    return;
  }
  const openModalKompatibelButton = document.getElementById(
    'openModalKompatibel'
  );
  if (!openModalKompatibelButton) {
    console.error(
      'modalDialogFitur.js: Tombol "openModalKompatibel" tidak ditemukan.'
    );
    return;
  }

  // Tambahkan event listener untuk tombol
  openModalMandiriButton.addEventListener('click', (event) => {
    const fitur = event.currentTarget.getAttribute('data-fitur');
    if (!fitur) {
      console.warn(
        'modalDialogFitur.js: Atribut "data-fitur" tidak ditemukan pada tombol.'
      );
      return;
    }
    // Ambil detail fitur dan buat konten modal
    const resultContent = getFiturDetail(fitur);
    const content = CardDetailContent(resultContent);

    // Buka modal dengan konten
    openModal(content);
  });

  openModalAksesHPButton.addEventListener('click', (event) => {
    const fitur = event.currentTarget.getAttribute('data-fitur');
    if (!fitur) {
      console.warn(
        'modalDialogFitur.js: Atribut "data-fitur" tidak ditemukan pada tombol.'
      );
      return;
    }
    // Ambil detail fitur dan buat konten modal
    const resultContent = getFiturDetail(fitur);
    const content = CardDetailContent(resultContent);

    // Buka modal dengan konten
    openModal(content);
  });

  openModalKompatibelButton.addEventListener('click', (event) => {
    const fitur = event.currentTarget.getAttribute('data-fitur');
    if (!fitur) {
      console.warn(
        'modalDialogFitur.js: Atribut "data-fitur" tidak ditemukan pada tombol.'
      );
      return;
    }
    // Ambil detail fitur dan buat konten modal
    const resultContent = getFiturDetail(fitur);
    const content = CardDetailContent(resultContent);

    // Buka modal dengan konten
    openModal(content);
  });
}
