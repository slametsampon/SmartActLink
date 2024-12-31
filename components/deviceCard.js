/**
 * Creates an HTML unordered list (`<ul>`) from a JSON object.
 *
 * @param {Object} jsonData - A JSON object where keys are used as list item IDs and values are displayed.
 * @returns {HTMLUListElement} - A `<ul>` element containing list items generated from the JSON object.
 *
 * @throws {Error} - Throws an error if `jsonData` is not a valid object.
 *
 * @example
 * const jsonData = { name: "John", age: 30, occupation: "Engineer" };
 * const ul = createList(jsonData);
 * document.body.appendChild(ul);
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
 * Creates a card-like component containing a title and a list generated from JSON data.
 *
 * @param {Object} jsonData - A JSON object where keys and values are used to populate the list.
 * @param {string} titleText - The text to display as the card's title.
 * @returns {HTMLDivElement} - A `<div>` element containing the title and the generated list.
 *
 * @example
 * const jsonData = { name: "John", age: 30, occupation: "Engineer" };
 * const title = "User Information";
 * const card = CreateCardJson(jsonData, title);
 * document.body.appendChild(card);
 */
export function CreateCardJson(jsonData, titleText) {
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

/**
 * Updates the content of an element inside a given parent container based on its ID.
 *
 * @param {HTMLElement|Document|null} cardElement - The parent element containing the target child element.
 * @param {string} id - The ID of the child element to update.
 * @param {number|string} value - The new value to set for the targeted element.
 *
 * @returns {void}
 *
 * @example
 * const card = document.getElementById('card');
 * updateDeviceValue(card, 'age', 35);
 * // Updates the element with ID 'age' inside the card to display '35'.
 */
export function updateDeviceValue(cardElement, id, value) {
  /**
   * Memperbarui nilai elemen tertentu berdasarkan ID di dalam elemen induk.
   *
   * @param {HTMLElement|Document|null} cardElement - Elemen induk yang berisi elemen dengan ID tertentu.
   * @param {string} id - ID elemen yang akan diperbarui.
   * @param {number|string} value - Nilai baru yang akan diperbarui.
   */
  if (!cardElement) {
    console.error('cardElement is null or undefined.');
    return;
  }

  if (
    !(cardElement instanceof HTMLElement || cardElement instanceof Document)
  ) {
    console.error('cardElement must be an HTMLElement or Document.');
    return;
  }

  if (!id || typeof id !== 'string') {
    console.error('Invalid id provided. It must be a non-empty string.');
    return;
  }

  const valueElement = cardElement.querySelector(`#${id}`);
  if (valueElement) {
    valueElement.textContent = value;
  } else {
    console.warn(
      `Element with ID #${id} not found in the provided cardElement.`
    );
  }
}
