import OperationDevicesLocal from '../data/operationDevicesLocal.js';

// Custom render callback
function renderCustomCell(key, value) {
  if (key === 'Link') {
    const a = document.createElement('a');
    a.href = value;
    a.textContent = 'Go to Link';
    a.className = 'text-blue-500 underline hover:text-blue-700';
    return a;
  } else if (key === 'tagname') {
    const button = document.createElement('button');
    button.textContent = value;
    button.className =
      'p-3 hover:bg-blue-700 text-green-800 font-bold underline hover:text-white hover:rounded-xl';
    button.onclick = `detailDevice('${value}')`;
    return button;
  }

  // Return null to fallback to default rendering
  return null;
}

/**
 * @file tableComponent.js
 * @description A reusable JavaScript function to dynamically generate HTML tables based on JSON data.
 * @author YourName
 */

/**
 * Create a table dynamically and render it inside a given container.
 * @param {Array<Object>} data - Array of JSON objects to populate the table.
 * @param {string} tableId - The ID of the container element where the table will be rendered.
 * @param {function(string, string): HTMLElement} renderCallback - A callback function to render custom elements for table cells.
 */
function createTable(data, tableId, renderCallback) {
  // Ensure data is not empty
  if (!data || data.length === 0) return;

  // Get the table container
  const tableContainer = document.getElementById(tableId);
  if (!tableContainer) {
    console.error(`Container with id '${tableId}' not found.`);
    return;
  }

  // Clear the container before adding a new table
  tableContainer.innerHTML = '';

  // Create table element
  const table = document.createElement('table');
  table.className = 'table-auto w-full border-collapse border border-gray-300';

  // Create thead element
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headerRow.className = 'bg-gray-200 text-gray-700';

  // Add headers based on keys of the first object in the array
  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement('th');
    th.className = 'border border-gray-300 px-4 py-2 text-left';
    th.textContent = key;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create tbody element
  const tbody = document.createElement('tbody');

  // Add rows for each data object
  data.map((item, index) => {
    const row = document.createElement('tr');
    row.className =
      index % 2 === 0
        ? 'bg-white hover:bg-gray-100'
        : 'bg-gray-50 hover:bg-gray-100';

    Object.entries(item).forEach(([key, value]) => {
      const td = document.createElement('td');
      td.className = 'border border-gray-300 px-4 py-2';

      // Use the callback to render custom content or fallback to default text
      if (renderCallback) {
        const customElement = renderCallback(key, value);
        if (customElement) {
          td.appendChild(customElement);
        } else {
          td.textContent = value;
        }
      } else {
        td.textContent = value;
      }

      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

createTable(OperationDevicesLocal, 'tabelJson', renderCustomCell);
