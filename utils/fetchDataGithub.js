// Fungsi untuk Mengambil Data
export default async function fetchDataGithub(url) {
  try {
    const response = await fetch(url); // Tunggu respons
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Tunggu parsing JSON
    return data; // Kembalikan data
  } catch (error) {
    console.error('Gagal memuat data:', error);
    return null; // Kembalikan null jika ada kesalahan
  }
}
