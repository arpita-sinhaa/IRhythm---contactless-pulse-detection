const bpmValue = document.getElementById("bpmValue");
const ctx = document.getElementById("pulseChart").getContext("2d");

const pulseChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: Array(30).fill(""),
    datasets: [
      {
        label: "Pulse Signal",
        data: Array(30).fill(75),
        borderColor: "#4a90e2",
        borderWidth: 2,
        fill: false,
        tension: 0.3,
      },
    ],
  },
  options: {
    animation: false,
    scales: {
      y: {
        beginAtZero: false,
        suggestedMin: 60,
        suggestedMax: 100,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: { display: false },
    },
  },
});

// Simulate data update every second
setInterval(() => {
  const fakeBPM = 70 + Math.floor(Math.random() * 10);
  pulseChart.data.datasets[0].data.shift();
  pulseChart.data.datasets[0].data.push(fakeBPM);
  pulseChart.update();
  bpmValue.innerText = fakeBPM;
}, 1000);
