/**
 * Creates an HTML unordered list (`<ul>`) from a JSON object, with styled list items.
 *
 * @param {Object} jsonData - A JSON object where each key-value pair is used to populate the list.
 * @returns {HTMLUListElement} - A `<ul>` element containing styled list items created from the JSON object.
 *
 * @throws {Error} - Throws an error if `jsonData` is not a valid object.
 *
 * @example
 * const jsonData = { name: "Alice", age: 25, occupation: "Engineer" };
 * const ul = createList(jsonData);
 * document.body.appendChild(ul);
 * // Creates a <ul> with <li> elements for each key-value pair in `jsonData`.
 */
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
    li.id = key;
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
/**
 * Creates a card-like container (`<div>`) with a title and a list generated from JSON data.
 *
 * @param {Object} jsonData - A JSON object where each key-value pair is used to populate the list inside the card.
 * @param {string} titleText - The text to display as the card's title.
 * @returns {HTMLDivElement} - A `<div>` element styled as a card, containing a title and a list.
 *
 * @throws {Error} - Throws an error if `jsonData` is not a valid object.
 *
 * @example
 * const jsonData = { name: "Alice", age: 25, occupation: "Engineer" };
 * const card = CardJson(jsonData, "User Information");
 * document.body.appendChild(card);
 * // Creates a styled card with a title and a list displaying `jsonData`.
 */
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
