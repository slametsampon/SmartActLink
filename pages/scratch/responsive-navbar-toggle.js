const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Tampilkan/Sembunyikan menu saat tombol hamburger diklik
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Tutup menu jika item diklik
menu.querySelectorAll('a').forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
});
