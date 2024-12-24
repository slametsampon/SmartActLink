import getLocalJson from '../utils/getLocalJson.js';
import ConfigDevicesLocal from '../data/configDevicesLocal.js';
import OperationDevicesLocal from '../data/operationDevicesLocal.js';

function isEmptyObject(data) {
  if (data === null || data === undefined) return true; // Cek null atau undefined
  if (typeof data === 'object') return Object.keys(data).length === 0; // Cek objek atau array
  return false; // Untuk tipe lain, anggap tidak kosong
}

export default async function combineJson(tagname) {
  const configData = await getLocalJson(ConfigDevicesLocal, tagname);
  const operationData = await getLocalJson(OperationDevicesLocal, tagname);
  if (isEmptyObject(configData) || isEmptyObject(operationData)) {
    console.log('Data Kosong');
    return;
  }
  //combine 2 json object
  const combined = { ...configData, ...operationData };
  //console.log('combined : ', JSON.stringify(combined, null, '\t'));
  return combined;
}

// Ambil argumen CLI
// const tagname = process.argv[2];

// combineJson(tagname); // Memanggil fungsi async
