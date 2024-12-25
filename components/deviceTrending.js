export default function DeviceTrending() {
  const wrapperDiv = document.createElement('div');
  const title = document.createElement('h2');
  title.className = 'text-lg font-bold';
  title.textContent = 'Trending';
  wrapperDiv.appendChild(title);

  const canvas = document.createElement('canvas');
  canvas.className = 'mt-4';
  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Sensor Data',
          data: [12, 19, 3, 5, 2],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });
  wrapperDiv.appendChild(canvas);
  return wrapperDiv;
}
