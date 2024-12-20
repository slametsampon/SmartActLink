import GLOBAL_ENV from './../config.dev.js';
export default function ConfigContent() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <!-- App Container -->
    <div id="app" class="min-h-screen flex justify-center">
        <div class="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
            <h1 class="text-2xl font-bold mb-4">Smart<span class="italic text-orange-600">Act</span>Link Configuration</h1>
            <form id="configForm" class="space-y-6">
                <!-- Tagname -->
                <label class="block text-left">
                    <span class="text-gray-700 font-bold">Tagname :</span>
                    <input type="text" id="tagname" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Masukkan tagname perangkat">
                </label>
                
                <!-- Type -->
                <label class="block text-left">
                    <span class="text-gray-700 font-bold">Jenis Perangkat : </span>
                    <select id="type" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                        <option value="Pompa">Pompa</option>
                        <option value="Lampu">Lampu</option>
                        <option value="Solenoid Valve">Solenoid Valve</option>
                        <option value="Relay">Relay</option>
                    </select>
                </label>
                
                <!-- Description -->
                <label class="block text-left">
                    <span class="text-gray-700 font-bold">Deskripsi :</span>
                    <textarea id="description" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Masukkan deskripsi perangkat"></textarea>
                </label>
                
                <!-- Automation Mode -->
                <label class="block text-left">
                    <span class="text-gray-700 font-bold">Mode Otomatisasi :</span>
                    <select id="automationMode" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                        <option value="Manual">Manual</option>
                        <option value="Sensor">Sensor</option>
                        <option value="Waktu">Waktu</option>
                    </select>
                </label>
                
                <!-- Settings -->
                <label class="block text-left">
                    <span class="text-gray-700 font-bold">Pengaturan Durasi (detik) :</span>
                    <input type="number" id="settings" min="1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Masukkan durasi dalam detik">
                </label>
                
                <!-- Submit Button -->
                <div class="flex justify-end">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-full">Simpan</button>
                </div>
            </form>
        </div>
    </div>

    <script type="module">
        //import { sendDataToServer } from './../utils/api.js';

        // document.getElementById('configForm').addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     const data = {
        //         tagname: document.getElementById('tagname').value,
        //         type: document.getElementById('type').value,
        //         description: document.getElementById('description').value,
        //         automationMode: document.getElementById('automationMode').value,
        //         settings: parseInt(document.getElementById('settings').value, 10)
        //     };
        //     sendDataToServer(data);
        // });

        //window.addEventListener('DOMContentLoaded', populateForm);
        populateForm();
    </script>
  `;
  return main;
}
