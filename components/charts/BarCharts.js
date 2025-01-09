// components/charts/BarChart.js
import ChartBase from './ChartBase.js';

// {
//   "labels": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//   "data": [120, 150, 180, 130, 170],
//   "colors": ["#4A90E2", "#50E3C2", "#F5A623", "#B8E986", "#7B92E9"]
// }
class BarChart extends ChartBase {
  constructor(options) {
    super(options);
  }

  draw({ labels, data, colors }) {
    this.clearCanvas();
    const barWidth = this.width / data.length;
    const maxValue = Math.max(...data);
    const scaleY = this.height / maxValue;

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
