function createList(jsonData) {
  // Validasi jsonData
  if (typeof jsonData !== 'object' || jsonData === null) {
    throw new Error('jsonData harus berupa objek!');
  }

  // Buat elemen <ul>
  const ul = document.createElement('ul');
  ul.className = 'space-y-2';

  // Iterasi properti JSON
  let i = 0;
  Object.entries(jsonData).map(([key, value]) => {
    const li = document.createElement('li');
    if (i % 2 === 0) {
      li.className =
        'py-2 bg-blue-50 text-gray-700 grid grid-cols-6 gap-4 hover:text-blue-600';
    } else {
      li.className = 'text-gray-700 grid grid-cols-6 gap-4 hover:text-blue-600';
    }
    i++;
    li.innerHTML = `
      <div class="font-bold capitalize col-span-2">${key}</div>
      <div class="col-span-4">${value}</div>`;
    ul.appendChild(li);
  });

  return ul;
}
export default function CardJson(jsonData, titleText) {
  // Fungsi untuk membuat daftar
  const parentDiv = document.createElement('div');
  parentDiv.className =
    'container p-3 mx-auto flex flex-col bg-green-50 rounded-xl shadow-md text-left';
  // Membuat elemen judul
  const title = document.createElement('h1');
  title.textContent = titleText;
  title.className = 'text-xl font-bold mb-4 mx-auto';
  parentDiv.appendChild(title); // Tambahkan judul ke induk

  parentDiv.appendChild(createList(jsonData));
  return parentDiv;
}
