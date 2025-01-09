// components/charts/BarChart.js
import ChartBase from './ChartBase.js';

/**
 * Represents a bar chart component that extends ChartBase.
 * Used to render bar charts based on provided data and labels.
 */
class BarChart extends ChartBase {
  /**
   * Creates an instance of BarChart.
   * @param {Object} options - Configuration options for the chart.
   * @param {string} options.containerId - The ID of the container where the chart will be rendered.
   * @param {number} [options.width=400] - The width of the chart canvas.
   * @param {number} [options.height=300] - The height of the chart canvas.
   */
  constructor(options) {
    super(options);
  }

  /**
   * Draws the bar chart on the canvas.
   * @param {Object} data - Data for the bar chart.
   * @param {string[]} data.labels - The labels for the x-axis.
   * @param {number[]} data.data - The data points for the bars.
   * @param {string[]} data.colors - The colors for each bar.
   * @example
   * const barChart = new BarChart({ containerId: 'chartContainer', width: 600, height: 400 });
   * barChart.draw({
   *   labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
   *   data: [120, 150, 180, 130, 170],
   *   colors: ["#4A90E2", "#50E3C2", "#F5A623", "#B8E986", "#7B92E9"]
   * });
   */
  draw({ labels, data, colors }) {
    this.clearCanvas();
    const barWidth = this.width / data.length;
    const maxValue = Math.max(...data);
    const scaleY = this.height / maxValue;

    // Draw bars
    data.forEach((value, index) => {
      this.ctx.fillStyle = colors[index] || '#333';
      const barHeight = value * scaleY;
      this.ctx.fillRect(
        index * barWidth,
        this.height - barHeight,
        barWidth - 10,
        barHeight
      );
    });

    // Draw labels
    this.ctx.fillStyle = '#333';
    this.ctx.font = '12px Arial';
    labels.forEach((label, index) => {
      this.ctx.fillText(
        label,
        index * barWidth + barWidth / 4,
        this.height - 5
      );
    });
  }
}

export default BarChart;
