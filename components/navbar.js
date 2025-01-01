import getHome from '../utils/getHome.js';

export default function Navbar() {
  // Akses variabel environment
  const HOME = getHome();

  // Contoh variabel status login (dapat diganti dengan logika yang sesuai)
  const isLoggedIn = false; // Ganti dengan logika autentikasi sebenarnya
  const userName = 'JohnDoe'; // Nama user yang login

  const navbar = document.createElement('nav');
  navbar.className =
    'container px-3 mx-auto flex justify-between items-center bg-blue-600 text-white shadow-md fixed top-0 left-0 min-w-full';

  navbar.innerHTML = `
    <!-- Logo -->
    <a href="${HOME}" class="flex flex-row">
      <img
        src="${HOME}public/images/iconSmartActIcon.webp"
        alt="SmartActLink"
        class="rounded-xl h-[50px]"
      />
      <p class="sm:hidden px-2 pt-5 text-xl font-thin">Smart<span class="text-orange-600 italic font-extrabold">~Act~</span>Link</p>
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

    <!-- Menu -->
    <ul
      id="menu"
      class="hidden mr-2 px-3 py-3 flex-col text-blue-600 bg-green-100 absolute top-16 right-0 sm:bg-blue-600 sm:text-white rounded-md sm:static sm:flex sm:flex-row sm:space-y-0 sm:space-x-8 sm:min-w-fit sm:mr-6 min-w-max"
    >
      <li>
        <a href="${HOME}pages/dashboard" class="hover:text-orange-600">Dashboard</a>
      </li>
      <li>
        <a href="${HOME}pages/devices" class="hover:text-orange-600">Devices</a>
      </li>
      <li>
        <a href="${HOME}pages/config" class="hover:text-orange-600">Config</a>
      </li>
      <li>
        <a href="${HOME}pages/history" class="hover:text-orange-600">History</a>
      </li>
      <li>
        <a href="${HOME}pages/help" class="hover:text-orange-600">Help</a>
      </li>
      <li>
        <a href="${HOME}pages/about" class="hover:text-orange-600">About</a>
      </li>
    </ul>

    <!-- User Section -->
    <div class="relative">
      ${
        isLoggedIn
          ? `
        <!-- User Logged In -->
        <button id="user-menu-button" class="flex items-center space-x-2 focus:outline-none bg-orange-600 rounded-full font-bold">
          <div class="bg-orange-600 w-10 h-10 rounded-full flex justify-center items-center text-white font-bold uppercase">
            ${userName[0]}
          </div>
        </button>
        <div id="user-menu" class="hidden absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md">
          <a href="${HOME}pages/profile" class="block px-4 py-2 hover:bg-gray-200">Profile</a>
          <a href="${HOME}logout" class="block px-4 py-2 hover:bg-gray-200">Logout</a>
        </div>
      `
          : `
        <!-- User Not Logged In -->
        <a href="${HOME}pages/auth/login.html" class="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500">Login</a>
      `
      }
    </div>
  `;

  // Event listener untuk dropdown menu
  if (isLoggedIn) {
    const userMenuButton = navbar.querySelector('#user-menu-button');
    const userMenu = navbar.querySelector('#user-menu');

    userMenuButton.addEventListener('click', () => {
      userMenu.classList.toggle('hidden');
    });
  }

  return navbar;
}
