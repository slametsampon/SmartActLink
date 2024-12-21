import fetchDataGithub from '../utils/fetchDataGithub.js';
import GLOBAL_ENV from '../config.dev.js';
async function main() {
  const jsonUrl = GLOBAL_ENV.JSON_URL_GITHUB;
  const data = await fetchDataGithub(jsonUrl);
  if (data) {
    console.log('Data:', data);
  } else {
    console.log('Tidak ada data yang ditemukan.');
  }
}

// Panggil Fungsi Utama
main();
