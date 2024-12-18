import GLOBAL_ENV from './config.dev.js';
export default function Navbar() {
  // Akses variabel environment
  const HOME = GLOBAL_ENV.HOME;
  const navbar = document.createElement('nav');
  navbar.className =
    'bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full';

  navbar.innerHTML = `
    <div class="container px-3 flex justify-between items-center">
      <a href="${HOME}" class="flex flex-row">
        <img src="public/images/iconSmartActIcon.webp" alt="SmartActLink" class="rounded-xl h-[50px]">
      </a>
      <!-- Hamburger Button -->
      <button
        id="menu-toggle"
        class="text-gray-800 sm:hidden focus:outline-none"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <ul
        id="menu"
        class="hidden flex-col absolute top-16 right-0 rounded-md ml-6 sm:static sm:flex sm:flex-row sm:space-y-0 sm:space-x-8 sm:min-w-fit sm:mr-6 min-w-max"
      >
        <li><a href="${HOME}pages/dashboard" class="hover:text-gray-200">Dashboard</a></li>
        <li><a href="${HOME}pages/devices" class="hover:text-gray-200">Devices</a></li>
        <li><a href="${HOME}pages/config" class="hover:text-gray-200">Config</a></li>
        <li><a href="${HOME}pages/history" class="hover:text-gray-200">History</a></li>
        <li><a href="${HOME}pages/help" class="hover:text-gray-200">Help</a></li>
        <li><a href="${HOME}pages/about" class="hover:text-gray-200">About</a></li>
      </ul>
    </div>
  `;
  return navbar;
}
