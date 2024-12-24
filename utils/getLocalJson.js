// import { readFile } from 'fs/promises';

export default async function getLocalJson(jsonArray, tagname) {
  try {
    // const data = await readFile(path, 'utf8'); // Membaca file secara asynchronous
    // const parsedData = JSON.parse(data); // Mengonversi string JSON ke objek
    const index = jsonArray.findIndex((item) => item.tagname === tagname);

    return jsonArray[index]; // Mengembalikan data yang ditemukan
  } catch (error) {
    console.error('Error reading JSON:', error);
    return null; // Jika terjadi error, kembalikan null
  }
}
