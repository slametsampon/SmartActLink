// {
//   "data": [
//     { "x": 10, "y": 20 },
//     { "x": 15, "y": 35 },
//     { "x": 20, "y": 25 },
//     { "x": 25, "y": 40 }
//   ],
//   "color": "#50E3C2"
// }
// components/charts/ScatterPlot.js
import ChartBase from './ChartBase.js';

class ScatterPlot extends ChartBase {
  constructor(options) {
    super(options);
  }

  draw({ data, color }) {
    this.clearCanvas();
    data.forEach((point) => {
      this.ctx.beginPath();
      this.ctx.arc(point.x, this.height - point.y, 5, 0, 2 * Math.PI);
      this.ctx.fillStyle = color || '#333';
      this.ctx.fill();
    });
  }
}

export default ScatterPlot;
