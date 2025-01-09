import getHome from '../utils/getHome.js';
import { getUserFromLocalStorage, logoutUser } from '../utils/userHelper.js';

export default function Navbar(currentPath) {
  console.log('currentPath : ', currentPath);

  // Akses variabel environment
  const HOME = getHome();

  const user = getUserFromLocalStorage();
  let isLoggedIn = false;
  let userName = '-'; // Nama user yang login
  if (user !== null) {
    console.log('user : ', user);
    isLoggedIn = true; // Ganti dengan logika autentikasi sebenarnya
    userName = user.username; // Nama user yang login
  }
  // Definisikan rute menu
  const routes = [
    { path: `pages/dashboard`, label: 'Dashboard' },
    { path: `pages/devices`, label: 'Devices' },
    { path: `pages/config`, label: 'Config' },
    { path: `pages/history`, label: 'History' },
    { path: `pages/help`, label: 'Help' },
    { path: `pages/about`, label: 'About' },
  ];
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
      <p class="sm:hidden px-2 mt-5 text-xl font-thin">Smart<span class="text-orange-600 italic font-extrabold">~Act~</span>Link</p>
    </a>
    <div class="flex flex-row items-center">
      <div class="relative">
        <!-- Hamburger Button -->
        <button
          id="menu-toggle"
          class="text-gray-800 sm:hidden mt-3 mr-3 focus:outline-none"
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
          class="hidden mr-2 px-3 space-y-2 py-3 flex-col text-blue-600 bg-green-100 absolute top-11 right-0 sm:bg-blue-600 sm:text-white rounded-md sm:static sm:flex sm:flex-row sm:space-y-0 sm:space-x-8 sm:min-w-fit sm:mr-6 min-w-max"
        >
          ${routes
            .map(
              (route) => `
              <li>
                <a 
                  href="${HOME}${route.path}" 
                  class="hover:text-orange-600 ${
                    route.path === currentPath ? 'active' : 'normal'
                  }"
                >
                  ${route.label}
                </a>
              </li>
            `
            )
            .join('')}
        </ul>
      </div>
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
          <div id="user-menu" class="hidden absolute right-0 mt-2 w-30 bg-white text-gray-800 shadow-lg rounded-md">
            <a href="${HOME}pages/profile" class="block px-4 py-2 hover:bg-gray-200">Profile</a>
            <button id="logoutButton"" class="block px-4 py-2 hover:bg-gray-200">Logout</a>
          </div>
        `
            : `
          <!-- User Not Logged In -->
          <button id="user-menu-logout-button" class="flex items-center space-x-2 focus:outline-none bg-orange-600 rounded-full font-bold">
            <div class="bg-orange-600 w-10 h-10 rounded-full flex justify-center items-center text-white font-bold uppercase">
              -
            </div>
          </button>
          <div id="user-menu-logout" class="hidden absolute right-0 mt-2 w-30 bg-white text-gray-800 shadow-lg rounded-md">
            <a href="${HOME}pages/auth/login.html" class="block px-4 py-2 hover:bg-gray-200">Login</a>
            <a href="${HOME}pages/auth/register.html" class="block px-4 py-2 hover:bg-gray-200">Register</a>
          </div>
        `
        }
      </div>
    </div>
  `;

  // Event listener untuk dropdown menu
  if (isLoggedIn) {
    const userMenuButton = navbar.querySelector('#user-menu-button');
    const userMenu = navbar.querySelector('#user-menu');
    const logoutButton = navbar.querySelector('#logoutButton');

    userMenuButton.addEventListener('click', () => {
      userMenu.classList.toggle('hidden');
    });

    logoutButton.addEventListener('click', () => {
      logoutUser();
    });
  } else {
    const userMenuLogout = navbar.querySelector('#user-menu-logout');
    const userMenuLogoutButton = navbar.querySelector(
      '#user-menu-logout-button'
    );
    userMenuLogoutButton.addEventListener('click', () => {
      userMenuLogout.classList.toggle('hidden');
    });
  }
  return navbar;
}
