export default function ConfigContent() {
  const main = document.createElement('main');
  main.className = 'flex-1 mx-auto p-8 text-left pt-20';

  main.innerHTML = `
    <!-- App Container -->
    <div class="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1
            class="text-2xl font-bold mb-4 bg-slate-50 rounded-xl shadow-lg p-2"
        >
            Konfigurasi Peralatan
        </h1>
        <form id="jsonForm" class="space-y-6 bg-green-50 rounded-lg p-2 pb-44 mb-5 sm:pb-6">
            <!-- Tagname -->
            <label class="block">
            <span class="text-gray-700 font-bold">Tagname</span>
            <input
                type="text"
                id="tagname"
                placeholder="Masukkan tagname"
                class="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            </label>

            <!-- Type -->
            <label class="block">
            <span class="text-gray-700 font-bold">Jenis Perangkat</span>
            <select
                id="type"
                class="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
                <option value="Pompa">Pompa</option>
                <option value="Solenoid">Solenoid</option>
                <option value="Lampu">Lampu</option>
                <option value="Relay">Relay</option>
                <option value="Sensor Pupuk">Sensor Pupuk</option>
                <option value="Sensor PH">Sensor PH</option>
                <option value="Sensor Suhu">Sensor Suhu</option>
                <option value="Sensor Kelembaban">Sensor Kelembaban</option>
            </select>
            </label>

            <!-- Description -->
            <label class="block">
            <span class="text-gray-700 font-bold">Deskripsi</span>
            <textarea
                id="description"
                placeholder="Masukkan deskripsi perangkat"
                class="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            ></textarea>
            </label>

            <!-- Unit -->
            <label class="block">
            <span class="text-gray-700 font-bold">Satuan</span>
            <input
                type="text"
                id="unit"
                placeholder="Masukkan satuan (contoh: Detik)"
                class="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            </label>

            <!-- High Range -->
            <label class="block">
            <span class="text-gray-700 font-bold">High Range</span>
            <input
                type="number"
                id="highRange"
                placeholder="Masukkan batas atas"
                class="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            </label>

            <!-- Low Range -->
            <label class="block">
            <span class="text-gray-700 font-bold">Low Range</span>
            <input
                type="number"
                id="lowRange"
                placeholder="Masukkan batas bawah"
                class="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            </label>

            <!-- High Alarm -->
            <label class="block">
            <span class="text-gray-700 font-bold">High Alarm</span>
            <input
                type="number"
                id="highAlarm"
                placeholder="Masukkan nilai alarm tinggi"
                class="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            </label>

            <!-- Low Alarm -->
            <label class="block">
            <span class="text-gray-700 font-bold">Low Alarm</span>
            <input
                type="number"
                id="lowAlarm"
                placeholder="Masukkan nilai alarm rendah"
                class="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            </label>

            <!-- Buttons -->
            <div
            class="flex flex-col sm:flex-row sm:justify-between h-8 sm:mx-auto mt-6 space-y-2 sm:space-y-0 sm:space-x-2"
            >
                <button
                    type="button"
                    id="btnNew"
                    class="bg-green-500 text-white px-4 py-2 sm:h-8 sm:w-20 rounded-md flex items-center justify-center"
                >
                    New
                </button>
                <button
                    type="button"
                    id="btnEdit"
                    class="bg-yellow-500 text-white px-4 py-2 sm:h-8 sm:w-20 rounded-md flex items-center justify-center"
                >
                    Edit
                </button>
                <button
                    type="button"
                    id="btnDelete"
                    class="bg-red-500 text-white px-4 py-2 sm:h-8 sm:w-20 rounded-md flex items-center justify-center"
                >
                    Delete
                </button>
                <button
                    type="submit"
                    id="btnSubmit"
                    class="bg-blue-500 text-white px-4 py-2 sm:h-8 sm:w-20 rounded-md flex items-center justify-center"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
  `;
  return main;
}
