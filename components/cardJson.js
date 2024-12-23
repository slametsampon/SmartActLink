function createList(jsonData) {
  // Buat elemen <ul>
  const ul = document.createElement('ul');
  ul.className = 'list-disc list-inside space-y-2';

  // Iterasi properti JSON
  Object.entries(jsonData).map(([key, value]) => {
    const li = document.createElement('li');
    li.className = 'text-gray-700';
    li.innerHTML = `<span class="font-bold capitalize">${key}:</span> ${value}`;
    ul.appendChild(li);
  });

  return ul;
}
export default function CardJson(jsonData) {
  // Fungsi untuk membuat daftar
  const div = document.createElement('div');
  div.className =
    'container px-3 mt-16 mx-auto flex bg-blue-600 text-white shadow-md';

  div.innerHTML = `
    <div class='mt-20'>
      Halo CardJson
    </div>
  `;
  div.appendChild(createList(jsonData));
  return div;
}
