// components/charts/GaugeChart.js
import ChartBase from './ChartBase.js';

/**
 * Represents a gauge chart component that extends ChartBase.
 * Used to render a semi-circular gauge to display a value within a range.
 */
class GaugeChart extends ChartBase {
  /**
   * Creates an instance of GaugeChart.
   * @param {Object} options - Configuration options for the chart.
   * @param {string} options.containerId - The ID of the container where the canvas will be appended.
   * @param {number} [options.width=400] - The width of the canvas in pixels.
   * @param {number} [options.height=300] - The height of the canvas in pixels.
   */
  constructor(options) {
    super(options);
  }

  /**
   * Draws the gauge chart on the canvas.
   * @param {Object} data - Data for the gauge chart.
   * @param {number} data.value - The current value to display on the gauge.
   * @param {number} data.min - The minimum value of the gauge.
   * @param {number} data.max - The maximum value of the gauge.
   * @param {string} [data.color='#333'] - The color of the gauge's foreground arc.
   * @example
   * const gaugeChart = new GaugeChart({ containerId: 'chartContainer', width: 400, height: 300 });
   * gaugeChart.draw({
   *   value: 70,
   *   min: 0,
   *   max: 100,
   *   color: '#F5A623'
   * });
   */
  draw({ value, min, max, color }) {
    this.clearCanvas();
    const angleStart = Math.PI;
    const angleEnd = 2 * Math.PI;
    const valueAngle = angleStart + ((value - min) / (max - min)) * Math.PI;

    // Background arc
    this.ctx.beginPath();
    this.ctx.arc(
      this.width / 2,
      this.height,
      this.width / 3,
      angleStart,
      angleEnd
    );
    this.ctx.strokeStyle = '#ddd';
    this.ctx.lineWidth = 10;
    this.ctx.stroke();

    // Foreground arc
    this.ctx.beginPath();
    this.ctx.arc(
      this.width / 2,
      this.height,
      this.width / 3,
      angleStart,
      valueAngle
    );
    this.ctx.strokeStyle = color || '#333';
    this.ctx.lineWidth = 10;
    this.ctx.stroke();

    // Value text
    this.ctx.fillStyle = '#333';
    this.ctx.font = '20px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`${value}`, this.width / 2, this.height - 20);
  }
}

export default GaugeChart;
