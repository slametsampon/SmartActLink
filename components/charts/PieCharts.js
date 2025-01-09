// components/charts/PieChart.js
import ChartBase from './ChartBase.js';

/**
 * Represents a pie chart component that extends ChartBase.
 * Used to render pie charts for visualizing proportional data.
 */
class PieChart extends ChartBase {
  /**
   * Creates an instance of PieChart.
   * @param {Object} options - Configuration options for the chart.
   * @param {string} options.containerId - The ID of the container where the canvas will be appended.
   * @param {number} [options.width=400] - The width of the canvas in pixels.
   * @param {number} [options.height=300] - The height of the canvas in pixels.
   */
  constructor(options) {
    super(options);
  }

  /**
   * Draws the pie chart on the canvas.
   * @param {number[]} data - Array of numeric values representing the slices of the pie.
   * @param {string[]} [colors=[]] - Array of color strings for each slice. Defaults to generated colors if not provided.
   * @example
   * const pieChart = new PieChart({ containerId: 'chartContainer', width: 400, height: 400 });
   * pieChart.draw([30, 70, 50], ['#4A90E2', '#50E3C2', '#F5A623']);
   */
  draw(data = [], colors = []) {
    this.clearCanvas();
    const total = data.reduce((acc, value) => acc + value, 0);
    let startAngle = 0;

    data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      this.ctx.beginPath();
      this.ctx.moveTo(this.width / 2, this.height / 2);
      this.ctx.arc(
        this.width / 2,
        this.height / 2,
        Math.min(this.width / 2, this.height / 2),
        startAngle,
        startAngle + sliceAngle
      );
      this.ctx.closePath();
      this.ctx.fillStyle =
        colors[index] || `hsl(${(index * 360) / data.length}, 70%, 60%)`;
      this.ctx.fill();
      startAngle += sliceAngle;
    });
  }
}

export default PieChart;
