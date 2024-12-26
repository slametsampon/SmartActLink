function ModalDialog() {
  // Referensi elemen
  const modal = document.getElementById('modal');
  const cancelButton = document.getElementById('cancelButton');
  const backdrop = document.getElementById('backdrop');

  // Fungsi untuk menutup modal
  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  // Tambahkan event listener
  //openModalButton.addEventListener('click', openModal);
  cancelButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Tutup modal saat tombol "Esc" ditekan
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
document.addEventListener('DOMContentLoaded', ModalDialog);
