// components/charts/ChartBase.js
/**
 * Base class for creating charts. Provides a canvas and basic utilities for chart rendering.
 */
class ChartBase {
  /**
   * Creates an instance of ChartBase.
   * @param {Object} options - Configuration options for the chart.
   * @param {string} options.containerId - The ID of the container where the canvas will be appended.
   * @param {number} [options.width=400] - The width of the canvas in pixels.
   * @param {number} [options.height=300] - The height of the canvas in pixels.
   * @throws {Error} Throws an error if the container with the given ID is not found.
   * @example
   * const chart = new ChartBase({ containerId: 'chartContainer', width: 600, height: 400 });
   * chart.clearCanvas(); // Clears the canvas
   */
  constructor({ containerId, width = 400, height = 300 }) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      throw new Error(`Container with id "${containerId}" not found.`);
    }
    this.width = width;
    this.height = height;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
  }

  /**
   * Clears the entire canvas area.
   * @example
   * chart.clearCanvas();
   */
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

export default ChartBase;
