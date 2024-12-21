import fetchDataGithub from '../utils/fetchDataGithub.js';
import GLOBAL_ENV from '../config.dev.js';
async function main() {
  let jsonUrl = GLOBAL_ENV.JSON_CONFIG_URL_GITHUB;
  let jsonData = await fetchDataGithub(jsonUrl);
  if (jsonData) {
    console.log('Data:', jsonData);
    for (const key in jsonData) {
      if (typeof jsonData[key] === 'object' && !Array.isArray(jsonData[key])) {
        console.log(`${key}:`);
      } else {
        console.log(`${key}: ${data[key]}`);
      }
    }
  }
}

// Panggil Fungsi Utama
main();
