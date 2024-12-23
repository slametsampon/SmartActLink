import GLOBAL_ENV from '../config.dev.js';
import getLocalJson from '../utils/getLocalJson.js';
const configJson = GLOBAL_ENV.JSON_CONFIG_LOCAL;
const operationJson = GLOBAL_ENV.JSON_OPERATION_LOCAL;

function isEmptyObject(data) {
  if (data === null || data === undefined) return true; // Cek null atau undefined
  if (typeof data === 'object') return Object.keys(data).length === 0; // Cek objek atau array
  return false; // Untuk tipe lain, anggap tidak kosong
}

export default async function combineJson(tagname) {
  const configData = await getLocalJson(configJson, tagname);
  const operationData = await getLocalJson(operationJson, tagname);
  if (isEmptyObject(configData) || isEmptyObject(operationData)) {
    console.log('Data Kosong');
    return;
  }
  //combine 2 json object
  const combined = { ...configData, ...operationData };
  return combined;
  //console.log('combined : ', JSON.stringify(combined, null, '\t'));
}

// Ambil argumen CLI
// const tagname = process.argv[2];

// combineJson(tagname); // Memanggil fungsi async
