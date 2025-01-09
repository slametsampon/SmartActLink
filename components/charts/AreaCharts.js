// components/charts/AreaChart.js
import ChartBase from './ChartBase.js';

// {
//   "labels": ["Jan", "Feb", "Mar", "Apr", "May"],
//   "data": [15, 25, 20, 30, 40],
//   "color": "#4A90E2"
// }

class AreaChart extends ChartBase {
  constructor(options) {
    super(options);
  }

  draw({ labels, data, color }) {
    this.clearCanvas();
    const stepX = this.width / (labels.length - 1);
    const maxValue = Math.max(...data);
    const scaleY = this.height / maxValue;

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

    // Line overlay
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
