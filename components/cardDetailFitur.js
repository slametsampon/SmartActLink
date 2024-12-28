export default function CardDetailFitur(fiturDetail) {
  // Fungsi untuk membuat daftar
  const parentDiv = document.createElement('div');
  parentDiv.className =
    'container p-3 mx-auto flex flex-col bg-green-50 rounded-xl shadow-md text-left';
  // Membuat elemen judul
  const title = document.createElement('h1');
  title.textContent = fiturDetail.title;
  title.className = 'text-xl font-bold mb-4 mx-auto text-gray-800';
  parentDiv.appendChild(title); // Tambahkan judul ke induk

  const content = document.createElement('div');
  content.className =
    'text-gray-800 first-line:uppercase first-line:tracking-widest first-letter:italic first-letter:text-7xl first-letter:font-bold first-letter:text-blue-700 first-letter:mr-2 first-letter:float-left';
  content.textContent = fiturDetail.content;

  parentDiv.appendChild(content);
  return parentDiv;
}
