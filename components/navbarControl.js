export default function NavbarControl() {
  /**
   * Add listentner pada toggle dan harus di-eksekusi
   * pada akhir elemen DOM agar bisa mengambil id
   */
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  // Tampilkan/Sembunyikan menu saat tombol hamburger diklik
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Tutup menu jika item diklik
  menu.querySelectorAll('a').forEach((item) => {
    console.log('item : ', item);
    item.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}
