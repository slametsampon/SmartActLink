export default function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'bg-gray-800 text-white p-4 text-center mt-auto';

  footer.innerHTML = `
    <p>&copy; 2024 SmartActLink. All rights reserved.</p>
  `;
  return footer;
}
