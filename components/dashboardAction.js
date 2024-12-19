function toggleDevice() {
  const status = document.getElementById('device-status');
  const toggleBtn = document.getElementById('toggle-btn');
  if (status.innerText === 'OFF') {
    status.innerText = 'ON';
    status.classList.replace('bg-red-500', 'bg-green-500');
    toggleBtn.innerText = 'Turn OFF';
  } else {
    status.innerText = 'OFF';
    status.classList.replace('bg-green-500', 'bg-red-500');
    toggleBtn.innerText = 'Turn ON';
  }
}

function loadGraph() {
  const ctx = document.getElementById('sensor-chart').getContext('2d');
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
}

window.onload = loadGraph;
