export default function getCurrentPage() {
  let currentPage = window.location.pathname;
  // Hapus "/index.html" jika ada di akhir URL
  if (currentPage.endsWith('/index.html')) {
    currentPage = currentPage.replace('/index.html', '');
  }
  if (currentPage.startsWith('/')) {
    currentPage = currentPage.slice(1); // Menghapus karakter pertama
  }
  return currentPage;
}
