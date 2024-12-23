//import { readFile } from 'fs/promises';
const { readFile } = require('fs').promises;

export default async function getLocalJson(path, tagname) {
  try {
    const data = await readFile(path, 'utf8'); // Membaca file secara asynchronous
    const parsedData = JSON.parse(data); // Mengonversi string JSON ke objek
    const index = parsedData.findIndex((item) => item.tagname === tagname);

    return parsedData[index]; // Mengembalikan data yang ditemukan
  } catch (error) {
    console.error('Error reading JSON:', error);
    return null; // Jika terjadi error, kembalikan null
  }
}
