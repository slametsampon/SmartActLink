import GLOBAL_ENV from '../config.dev.js';
export default function HelpContent() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <div class="text-center py-10">
        <h1 class="text-2xl font-bold">Bantuan Smart<span class="text-orange-600 italic">Act</span>Link</h1>
        <p class="text-gray-600 mt-2">Temukan jawaban cepat dan solusi untuk perangkat Anda</p>
    </div>

    <div class="max-w-4xl mx-auto px-4">
        <div class="mb-8">
            <input type="text" id="search" placeholder="Cari Pertanyaan..." oninput="filterFAQ()" 
                class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="space-y-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold">Panduan Cepat</h2>
                <button onclick="alert('Menuju Panduan')" class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Lihat Panduan</button>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold">FAQ Interaktif</h2>
                <div id="faq-list" class="mt-4 space-y-4">
                    <div class="faq-item">
                        <button onclick="toggleAnswer(this)" class="w-full text-left p-3 bg-blue-600 text-white rounded-lg">Bagaimana cara menghubungkan perangkat?</button>
                        <div class="answer hidden mt-2 p-4 bg-gray-100 rounded-lg">Anda dapat menghubungkan perangkat melalui aplikasi SmartActLink.</div>
                    </div>
                    <div class="faq-item">
                        <button onclick="toggleAnswer(this)" class="w-full text-left p-3 bg-blue-600 text-white rounded-lg">Bagaimana cara mengatur ulang perangkat?</button>
                        <div class="answer hidden mt-2 p-4 bg-gray-100 rounded-lg">Tekan tombol reset selama 10 detik hingga lampu berkedip.</div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold">Dukungan Teknis</h2>
                <button onclick="alert('Kontak Tim Dukungan')" class="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Hubungi Kami</button>
            </div>
        </div>
    </div>
  `;
  return main;
}
