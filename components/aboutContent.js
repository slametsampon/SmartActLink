import GLOBAL_ENV from '../config.dev.js';
export default function AboutContent() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <!-- Overlay Global -->
    <div class="min-h-screen text-white">
      
      <!-- Header (Sudah Ada) -->
      <header class="pt-0">
        <h1 class="text-2xl mb-3">Smart<span class="italic font-bold text-orange-600">Act</span>Link</h1>
      </header>

      <section id="hero">
          <div class="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
              <h1 class="text-xl font-bold mb-4 italic">About Page</h1>
              <p class="text-lg md:text-xl mb-6 font-thin underline">
                Under Construction !
              </p>
          </div>
      </section>

    </div>
  `;
  return main;
}
