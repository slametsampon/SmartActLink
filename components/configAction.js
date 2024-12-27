let currentData = {
  tagname: 'Pompa-1',
  type: 'Pompa',
  description: 'Pompa sirkulasi hidroponik',
  unit: 'Detik',
  highRange: 100,
  lowRange: 0,
  highAlarm: 80,
  lowAlarm: 30,
};

const populateForm = (data) => {
  document.getElementById('tagname').value = data.tagname || '';
  document.getElementById('type').value = data.type || 'Pompa';
  document.getElementById('description').value = data.description || '';
  document.getElementById('unit').value = data.unit || '';
  document.getElementById('highRange').value = data.highRange || '';
  document.getElementById('lowRange').value = data.lowRange || '';
  document.getElementById('highAlarm').value = data.highAlarm || '';
  document.getElementById('lowAlarm').value = data.lowAlarm || '';
};

const clearForm = () => {
  populateForm({});
};

document.getElementById('btnNew').addEventListener('click', () => {
  clearForm();
});

document.getElementById('btnEdit').addEventListener('click', () => {
  populateForm(currentData);
});

document.getElementById('btnDelete').addEventListener('click', () => {
  if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
    currentData = {};
    clearForm();
    alert('Data berhasil dihapus.');
  }
});

document.getElementById('jsonForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    tagname: document.getElementById('tagname').value,
    type: document.getElementById('type').value,
    description: document.getElementById('description').value,
    unit: document.getElementById('unit').value,
    highRange: parseInt(document.getElementById('highRange').value, 10),
    lowRange: parseInt(document.getElementById('lowRange').value, 10),
    highAlarm: parseInt(document.getElementById('highAlarm').value, 10),
    lowAlarm: parseInt(document.getElementById('lowAlarm').value, 10),
  };
  currentData = data;
  alert('Data berhasil disimpan.');
  console.log('Data terkini:', JSON.stringify(currentData, null, 2));
});

// Populate the form with default data on page load
window.addEventListener('DOMContentLoaded', () => {
  populateForm(currentData);
});
