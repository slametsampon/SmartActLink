// CDD Approach: Component Definition
const steps = [
  'step-info',
  'step-schedule',
  'step-sensor',
  'step-relay',
  'step-summary',
];
let currentStep = 0;

// Component Functions
function showStep(stepIndex) {
  steps.forEach((step, index) => {
    document
      .getElementById(step)
      .classList.toggle('hidden', index !== stepIndex);
  });
  updateNavButtons();
}

function updateNavButtons() {
  document
    .getElementById('prevBtn')
    .classList.toggle('hidden', currentStep === 0);
  document.getElementById('nextBtn').textContent =
    currentStep === steps.length - 1 ? 'Simpan' : 'Berikutnya';
}

// Event Listeners
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentStep > 0) currentStep--;
  showStep(currentStep);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentStep < steps.length - 1) currentStep++;
  else alert('Konfigurasi disimpan!');
  showStep(currentStep);
});

// Initialize
showStep(currentStep);
