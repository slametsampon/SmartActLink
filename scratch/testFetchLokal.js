import { readFile } from 'fs/promises';
import GLOBAL_ENV from '../config.dev.js';
const localJson = GLOBAL_ENV.JSON_CONFIG_LOCAL;

const filePath = localJson; // Jalur relatif ke file

readFile(filePath, 'utf8')
  .then((data) => JSON.parse(data)) // Mengonversi string JSON ke objek JavaScript
  .then((parsedData) => {
    console.log(parsedData); // Output: Objek JavaScript
  })
  .catch((error) => console.error('Error reading JSON:', error));
