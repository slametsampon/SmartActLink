import fetchDataGithub from '../utils/fetchDataGithub.js';
async function main() {
  const jsonUrl =
    'https://raw.githubusercontent.com/slametsampon/SmartActLink/refs/heads/main/data/staticData.json';
  const data = await fetchDataGithub(jsonUrl);

  if (data) {
    console.log('Data:', data);
    // console.log('data.tagname:', data.tagname);
    // console.log('data.type:', data.type);
    // console.log('data.description:', data.description);
  } else {
    console.log('Tidak ada data yang ditemukan.');
  }
}

// Panggil Fungsi Utama
main();
