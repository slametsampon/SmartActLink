// components/charts/LineChart.js
import ChartBase from './ChartBase.js';

/**
 * Represents a line chart component that extends ChartBase.
 * Used to render line charts for visualizing trends over a series of data points.
 */
class LineChart extends ChartBase {
  /**
   * Creates an instance of LineChart.
   * @param {Object} options - Configuration options for the chart.
   * @param {string} options.containerId - The ID of the container where the canvas will be appended.
   * @param {number} [options.width=400] - The width of the canvas in pixels.
   * @param {number} [options.height=300] - The height of the canvas in pixels.
   */
  constructor(options) {
    super(options);
  }

  /**
   * Draws the line chart on the canvas.
   * @param {number[]} data - The data points for the y-axis.
   * @param {string[]} labels - The labels for the x-axis.
   * @example
   * const lineChart = new LineChart({ containerId: 'chartContainer', width: 600, height: 400 });
   * lineChart.draw([10, 20, 15, 30, 25], ['Jan', 'Feb', 'Mar', 'Apr', 'May']);
   */
  draw(data = [], labels = []) {
    this.clearCanvas();
    const stepX = this.width / (labels.length - 1);
    const maxValue = Math.max(...data);
    const scaleY = this.height / maxValue;

    // Draw the line
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.height - data[0] * scaleY);

    data.forEach((point, index) => {
      this.ctx.lineTo(index * stepX, this.height - point * scaleY);
    });

    this.ctx.strokeStyle = '#4A90E2';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Draw labels
    this.ctx.fillStyle = '#333';
    this.ctx.font = '12px Arial';
    labels.forEach((label, index) => {
      this.ctx.fillText(label, index * stepX - 10, this.height - 5);
    });
  }
}

export default LineChart;
