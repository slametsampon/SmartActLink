// utils/api.js

export async function sendDataToServer(data) {
  try {
    const response = await fetch('/api/save-config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    alert(result.message || 'Data berhasil disimpan!');
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    alert('Gagal menyimpan data. Silakan coba lagi.');
  }
}

export async function fetchDataFromServer() {
  try {
    const response = await fetch('/api/get-config');
    if (!response.ok) throw new Error('Gagal mengambil data');
    return await response.json();
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    alert('Gagal memuat data konfigurasi.');
    return null;
  }
}
