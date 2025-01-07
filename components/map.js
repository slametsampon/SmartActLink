/**
 * MapComponent
 * @description Displays a map with a marker.
 */
class MapComponent {
  /**
   * @param {string} containerId - The ID of the container element.
   * @param {number} lat - Latitude of the marker.
   * @param {number} lng - Longitude of the marker.
   */
  constructor(containerId, lat, lng) {
    this.container = document.getElementById(containerId);
    this.lat = lat;
    this.lng = lng;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <iframe 
        src="https://maps.google.com/maps?q=${this.lat},${this.lng}&z=15&output=embed"
        class="w-full h-64 border-0">
      </iframe>
    `;
  }
}

// Example Usage
document.addEventListener('DOMContentLoaded', () => {
  new MapComponent('map-container', -6.2, 106.816666);
});
