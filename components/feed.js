/**
 * RealTimeFeed
 * @description Component to display real-time data updates.
 */
class RealTimeFeed {
  /**
   * @param {string} containerId - The ID of the container element.
   * @param {Function} dataSource - Function to fetch real-time data.
   * @param {number} refreshInterval - Refresh interval in milliseconds.
   */
  constructor(containerId, dataSource, refreshInterval = 1000) {
    this.container = document.getElementById(containerId);
    this.dataSource = dataSource;
    this.refreshInterval = refreshInterval;
    this.init();
  }

  init() {
    this.updateFeed();
    setInterval(() => this.updateFeed(), this.refreshInterval);
  }

  async updateFeed() {
    try {
      const data = await this.dataSource();
      this.container.innerText = `Real-time Data: ${data}`;
    } catch (error) {
      this.container.innerText = 'Error fetching data.';
    }
  }
}

// Example Usage
document.addEventListener('DOMContentLoaded', () => {
  const fetchData = async () => Math.random().toFixed(2);
  new RealTimeFeed('feed-container', fetchData, 1000);
});
