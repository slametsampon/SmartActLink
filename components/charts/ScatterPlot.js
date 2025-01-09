// components/charts/ScatterPlot.js
import ChartBase from './ChartBase.js';

/**
 * Represents a scatter plot component that extends ChartBase.
 * Used to render scatter plots for visualizing data distributions.
 */
class ScatterPlot extends ChartBase {
  /**
   * Creates an instance of ScatterPlot.
   * @param {Object} options - Configuration options for the chart.
   * @param {string} options.containerId - The ID of the container where the canvas will be appended.
   * @param {number} [options.width=400] - The width of the canvas in pixels.
   * @param {number} [options.height=300] - The height of the canvas in pixels.
   */
  constructor(options) {
    super(options);
  }

  /**
   * Draws the scatter plot on the canvas.
   * @param {Object} data - Data for the scatter plot.
   * @param {Object[]} data.data - Array of objects representing points with `x` and `y` properties.
   * @param {number} data.data[].x - The x-coordinate of the point.
   * @param {number} data.data[].y - The y-coordinate of the point.
   * @param {string} [data.color='#333'] - The color of the points.
   * @example
   * const scatterPlot = new ScatterPlot({ containerId: 'chartContainer', width: 600, height: 400 });
   * scatterPlot.draw({
   *   data: [
   *     { x: 10, y: 20 },
   *     { x: 15, y: 35 },
   *     { x: 20, y: 25 },
   *     { x: 25, y: 40 }
   *   ],
   *   color: '#50E3C2'
   * });
   */
  draw({ data, color }) {
    this.clearCanvas();
    data.forEach((point) => {
      this.ctx.beginPath();
      this.ctx.arc(point.x, this.height - point.y, 5, 0, 2 * Math.PI);
      this.ctx.fillStyle = color || '#333';
      this.ctx.fill();
    });
  }
}

export default ScatterPlot;
