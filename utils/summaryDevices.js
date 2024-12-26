/**
 * Membuat daftar rangkuman peralatan:
 * Baca dan pilih configDevicesLocal.js (tagname, Description, type)
 * gabung dengan operationDevicesLocal.local (link)
 * const devices = [
 * { id: 1, tagname: 'Pompa Air', type: 'Pompa', status: 'Aktif' },
 * { id: 2, tagname: 'Sensor Suhu', type: 'Sensor', status: 'Tidak Aktif' },
 * ];
 */

import ConfigDevicesLocal from '../data/configDevicesLocal.js';
import OperationDevicesLocal from '../data/operationDevicesLocal.js';
import getJsonParameter from './getJsonParameter.js';
import createDevSummaryJSON from './createDynamicJson.js';
export default async function summaryDevices() {
  const summaryDev = [];
  let id = 0;

  for (const configDev of ConfigDevicesLocal) {
    const resultLink = await getJsonParameter(
      OperationDevicesLocal,
      configDev.tagname,
      'link'
    );

    if (resultLink !== null) {
      const jsonResult = createDevSummaryJSON(
        id,
        configDev.tagname,
        configDev.type,
        configDev.description,
        resultLink
      );
      id++;
      summaryDev.push(jsonResult);
    }
  }

  return summaryDev;
}

// (async () => {
//   const resultSum = await summaryDevices();
//   console.log('resultSum : ', resultSum);
// })();
