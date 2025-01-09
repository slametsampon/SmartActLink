// components/charts/PieChart.js
import ChartBase from './ChartBase.js';

class PieChart extends ChartBase {
  constructor(options) {
    super(options);
  }

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
