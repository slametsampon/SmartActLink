/**
 * CustomCard
 * @description A dynamic card component for displaying data with customizable headers, body fields, and footer actions.
 */
class CustomCard {
  /**
   * @param {string} containerId - The ID of the container element where the cards will be rendered.
   * @param {Array<Object>} data - The array of data objects to populate the cards.
   * @param {Object} config - Configuration object for the card component.
   * @param {Function} [config.renderHeader] - Optional function to render custom content in the header.
   * @param {Array<{label: string, key: string, style?: Object, render?: Function}>} config.bodyFields -
   *        List of fields to display in the card body, with optional styles and render functions.
   * @param {Function} [config.renderFooter] - Optional function to render custom content in the footer.
   */
  constructor(containerId, data, config) {
    /**
     * @type {HTMLElement}
     * @description The container element for the card component.
     */
    this.container = document.getElementById(containerId);

    /**
     * @type {Array<Object>}
     * @description The data array used to populate the cards.
     */
    this.data = data;

    /**
     * @type {Object}
     * @description The configuration object defining headers, body fields, and footer render options.
     */
    this.config = config;

    this.render();
  }

  /**
   * Renders the cards into the container element.
   */
  render() {
    this.container.innerHTML = ''; // Clear previous content

    this.data.forEach((item, index) => {
      const card = document.createElement('div');
      card.className =
        'border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white';

      // Render Header
      if (this.config.renderHeader) {
        const header = document.createElement('div');
        header.className = 'p-4 bg-gray-100 border-b border-gray-300';
        header.appendChild(this.config.renderHeader(item, index));
        card.appendChild(header);
      }

      // Render Body
      const body = document.createElement('div');
      body.className = 'p-4';

      this.config.bodyFields.forEach((field) => {
        const div = document.createElement('div');
        div.className = 'mb-2';

        if (typeof field.render === 'function') {
          div.appendChild(field.render(item[field.key], index, item));
        } else {
          const label = document.createElement('span');
          label.className = 'font-medium';
          label.innerText = `${field.label}: `;

          const value = document.createElement('span');
          value.className = 'text-gray-700';
          value.innerText = item[field.key] || '';

          div.appendChild(label);
          div.appendChild(value);
        }

        // Apply custom style if provided
        if (field.style) {
          Object.assign(div.style, field.style);
        }

        body.appendChild(div);
      });

      card.appendChild(body);

      // Render Footer
      if (this.config.renderFooter) {
        const footer = document.createElement('div');
        footer.className =
          'p-4 bg-gray-100 border-t border-gray-300 flex justify-end';
        footer.appendChild(this.config.renderFooter(item, index));
        card.appendChild(footer);
      }

      this.container.appendChild(card);
    });
  }
}
// Example Usage
const data = [
  {
    title: 'Card 1',
    description: 'This is the first card.',
    image: 'https://via.placeholder.com/150',
    action: 'Details',
    link: 'https://example.com/card1',
  },
  {
    title: 'Card 2',
    description: 'This is the second card with a longer description.',
    image: 'https://via.placeholder.com/150',
    action: 'Learn More',
    link: 'https://example.com/card2',
  },
  {
    title: 'Card 3',
    description: 'Another card for testing.',
    image: 'https://via.placeholder.com/150',
    action: 'Explore',
    link: 'https://example.com/card3',
  },
];

const config = {
  renderHeader: (item) => {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.className = 'w-full h-40 object-cover';
    return img;
  },
  bodyFields: [
    {
      label: 'Title',
      key: 'title',
      style: { fontWeight: 'bold', color: '#1f2937' },
    },
    { label: 'Description', key: 'description' },
    {
      label: 'Link',
      key: 'link',
      render: (value) => {
        const link = document.createElement('a');
        link.href = value;
        link.innerText = 'Visit Link';
        link.className = 'text-blue-500 underline';
        link.target = '_blank'; // Open in a new tab
        return link;
      },
    },
  ],
  renderFooter: (item) => {
    const button = document.createElement('button');
    button.innerText = item.action;
    button.className = 'bg-blue-500 text-white px-4 py-2 rounded';
    button.addEventListener('click', () =>
      alert(`Action: ${item.action} on ${item.title}`)
    );
    return button;
  },
};

document.addEventListener('DOMContentLoaded', () => {
  new CustomCard('card-container', data, config);
});
