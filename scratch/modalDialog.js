import ModalDialogFrame from './modalDialogFrame.js';
import CardDetailFitur from '../components/cardDetailFitur.js';

export default function ModalDialog({ resultContent }) {
  const detailContent = document.getElementById('detail-content');
  if (!detailContent) return;

  const modal = document.getElementById('modal');
  const openModalButton = document.getElementById('openModal'); // Tombol pembuka modal
  const cancelButton = document.getElementById('cancelButton');
  const backdrop = document.getElementById('backdrop');

  // Fungsi untuk membuka modal
  const openModal = () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.querySelector('button').focus();
    detailContent.innerHTML = '';
    detailContent.appendChild(CardDetailFitur(resultContent, 'Detail Fitur'));
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  // Tambahkan event listener ke tombol pembuka modal
  openModalButton.addEventListener('click', openModal);

  // Tambahkan event listener ke tombol dan backdrop untuk menutup modal
  cancelButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Tutup modal saat tombol Escape ditekan
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  ModalDialogFrame();
});
