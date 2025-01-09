// components/charts/AreaChart.js
import ChartBase from './ChartBase.js';

/**
 * Represents an area chart component that extends ChartBase.
 * Used to render area charts based on provided data and labels.
 */
class AreaChart extends ChartBase {
  /**
   * Creates an instance of AreaChart.
   * @param {Object} options - Configuration options for the chart.
   * @param {string} options.containerId - The ID of the container where the chart will be rendered.
   * @param {number} [options.width=400] - The width of the chart canvas.
   * @param {number} [options.height=300] - The height of the chart canvas.
   */
  constructor(options) {
    super(options);
  }

  /**
   * Draws the area chart on the canvas.
   * @param {Object} data - Data for the area chart.
   * @param {string[]} data.labels - The labels for the x-axis.
   * @param {number[]} data.data - The data points for the y-axis.
   * @param {string} [data.color='#4A90E2'] - The color for the area fill and line.
   * @example
   * const areaChart = new AreaChart({ containerId: 'chartContainer', width: 600, height: 400 });
   * areaChart.draw({
   *   labels: ["Jan", "Feb", "Mar", "Apr", "May"],
   *   data: [15, 25, 20, 30, 40],
   *   color: "#4A90E2"
   * });
   */
  draw({ labels, data, color }) {
    this.clearCanvas();
    const stepX = this.width / (labels.length - 1);
    const maxValue = Math.max(...data);
    const scaleY = this.height / maxValue;

    // Draw filled area
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.height - data[0] * scaleY);
    data.forEach((point, index) => {
      this.ctx.lineTo(index * stepX, this.height - point * scaleY);
    });
    this.ctx.lineTo(this.width, this.height);
    this.ctx.lineTo(0, this.height);
    this.ctx.closePath();

    this.ctx.fillStyle = color || 'rgba(74, 144, 226, 0.5)';
    this.ctx.fill();

    // Draw line overlay
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.height - data[0] * scaleY);
    data.forEach((point, index) => {
      this.ctx.lineTo(index * stepX, this.height - point * scaleY);
    });
    this.ctx.strokeStyle = color || '#4A90E2';
    this.ctx.stroke();
  }
}

export default AreaChart;
