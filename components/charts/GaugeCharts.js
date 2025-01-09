// components/charts/GaugeChart.js
import ChartBase from './ChartBase.js';

// {
//   "value": 70,
//   "min": 0,
//   "max": 100,
//   "color": "#F5A623"
// }

class GaugeChart extends ChartBase {
  constructor(options) {
    super(options);
  }

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
