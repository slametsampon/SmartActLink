class CustomTable {
  constructor(containerId, data, config) {
    this.container = document.getElementById(containerId);
    this.data = data;
    this.config = config;
    this.render();
  }

  render() {
    const table = document.createElement('table');
    table.className =
      'table-auto border-collapse border border-gray-300 w-full';

    // Render Header
    if (this.config.headers) {
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      this.config.headers.forEach((header) => {
        const th = document.createElement('th');
        th.innerText = header.label;
        th.className =
          'border border-gray-300 px-4 py-2 bg-gray-100 text-left font-medium';
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);
    }

    // Render Body
    const tbody = document.createElement('tbody');
    this.data.forEach((row, rowIndex) => {
      const tr = document.createElement('tr');
      this.config.headers.forEach((header) => {
        const td = document.createElement('td');
        td.className = 'border border-gray-300 px-4 py-2';

        if (typeof header.render === 'function') {
          // Use custom render function
          td.appendChild(header.render(row[header.key], rowIndex, row));
        } else {
          // Default text content
          td.innerText = row[header.key] || '';
        }

        // Apply custom cell styles
        if (header.style) {
          Object.assign(td.style, header.style);
        }

        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    this.container.innerHTML = ''; // Clear previous content
    this.container.appendChild(table);
  }
}

// Example Usage
const data = [
  {
    name: 'John Doe',
    age: 25,
    link: 'https://example.com/john',
    action: 'View',
  },
  {
    name: 'Jane Smith',
    age: 30,
    link: 'https://example.com/john',
    action: 'Edit',
  },
  {
    name: 'Alice Johnson',
    age: 22,
    link: 'https://example.com/john',
    action: 'Delete',
  },
];

const config = {
  headers: [
    {
      label: 'Name',
      key: 'name',
      style: { fontWeight: 'bold', color: '#1f2937' },
    },
    { label: 'Age', key: 'age' },
    {
      label: 'Action',
      key: 'action',
      render: (value, rowIndex, row) => {
        const button = document.createElement('button');
        button.innerText = value;
        button.className = 'bg-blue-500 text-white px-4 py-2 rounded';
        button.addEventListener('click', () =>
          alert(`Action: ${value} on ${row.name}`)
        );
        return button;
      },
    },
    {
      label: 'Profile Link',
      key: 'link',
      render: (value) => {
        const link = document.createElement('a');
        link.href = value;
        link.innerText = 'View Profile';
        link.className = 'text-blue-500 underline';
        link.target = '_blank'; // Open in new tab
        return link;
      },
    },
  ],
};

document.addEventListener('DOMContentLoaded', () => {
  new CustomTable('table-container', data, config);
});
