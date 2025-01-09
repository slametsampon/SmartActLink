export default function getCurrentPath() {
  let currentPath = window.location.pathname;
  // Hapus "/index.html" jika ada di akhir URL
  if (currentPath.endsWith('/')) {
    currentPath = currentPath.replace(/\/$/, '');
  }
  if (currentPath.endsWith('/index.html')) {
    currentPath = currentPath.replace('/index.html', '');
  }
  if (currentPath.startsWith('/')) {
    currentPath = currentPath.slice(1); // Menghapus karakter pertama
  }
  return currentPath;
}
