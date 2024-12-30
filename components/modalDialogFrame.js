export default function ModalDialogFrame() {
  const modal = document.getElementById('modal');
  if (!modal) {
    console.error('Modal container not found');
    return;
  }

  modal.innerHTML = `
    <div id="backdrop" class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="px-4 pb-4 pt-3 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div id="detail-content" class="mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left"></div>
            </div>
          </div>
          <div class="absolute top-0 right-0 sm:flex mr-3 mt-3">
            <button id="cancelButton" class="inline-flex w-full bg-slate-50 justify-center rounded-full border-solid border-2 border-red-700 py-1 px-3 text-xl font-bold text-red-700 shadow-sm hover:bg-orange-300 hover:text-red-800 sm:mt-0 sm:w-auto">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  return modal;
}
