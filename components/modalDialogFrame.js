export default function ModalDialogFrame() {
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <div
    id="backdrop"
    class="fixed inset-0 bg-gray-500/75 transition-opacity"
    aria-hidden="true"
    ></div>
    <!-- Modal content -->
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
            <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
                <div class="bg-white px-4 pb-4 pt-3 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                    <div class="mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <div id="detail-content" class="mt-2"></div>
                    </div>
                    </div>
                </div>
                <div
                    class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                >
                    <button
                    id="cancelButton"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-800 sm:mt-0 sm:w-auto"
                    >
                    Close
                    </button>
                </div>
            </div>
        </div>
    </div>
`;
  return modal;
}
