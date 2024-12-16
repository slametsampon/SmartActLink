export default function Navbar() {
  const navbar = document.createElement('nav');
  navbar.className =
    'bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full';

  navbar.innerHTML = `
    <div class="container px-3 flex justify-between items-center">
      <a href="/SmartActLink" class="flex flex-row">
        <img src="/SmartActLink/public/images/iconSmartActIcon.webp" alt="SmartActLink" class="rounded-xl h-[50px]">
      </a>
      <ul class="flex space-x-4">
        <li><a href="/SmartActLink/pages/dashboard" class="hover:text-gray-200">Dashboard</a></li>
        <li><a href="/SmartActLink/pages/devices" class="hover:text-gray-200">Devices</a></li>
        <li><a href="/SmartActLink/pages/config" class="hover:text-gray-200">Config</a></li>
        <li><a href="/SmartActLink/pages/history" class="hover:text-gray-200">History</a></li>
        <li><a href="/SmartActLink/pages/help" class="hover:text-gray-200">Help</a></li>
        <li><a href="/SmartActLink/pages/about" class="hover:text-gray-200">About</a></li>
      </ul>
    </div>
  `;
  return navbar;
}
