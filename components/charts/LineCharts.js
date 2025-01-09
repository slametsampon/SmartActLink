// components/charts/LineChart.js
import ChartBase from './ChartBase.js';

class LineChart extends ChartBase {
  constructor(options) {
    super(options);
  }

  draw(data = [], labels = []) {
    this.clearCanvas();
    const stepX = this.width / (labels.length - 1);
    const maxValue = Math.max(...data);
    const scaleY = this.height / maxValue;

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
