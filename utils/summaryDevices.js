/**
 * Membuat ringkasan perangkat berdasarkan konfigurasi lokal dan operasi perangkat.
 *
 * Fungsi ini membaca konfigurasi perangkat dari `ConfigDevicesLocal`, mengambil informasi operasi
 * dari `OperationDevicesLocal`, dan menghasilkan ringkasan perangkat dalam bentuk array JSON.
 *
 * @module summaryDevices
 * @returns {Promise<Object[]>} Ringkasan perangkat dalam bentuk array JSON.
 * Setiap objek dalam array memiliki format yang sesuai dengan hasil dari `createDevSummaryJSON`.
 */

import ConfigDevicesLocal from '../data/configDevicesLocal.js';
import OperationDevicesLocal from '../data/operationDevicesLocal.js';
import getJsonParameter from './getJsonParameter.js';
import createDevSummaryJSON from './createDynamicJson.js';

export default async function summaryDevices() {
  /**
   * Array untuk menyimpan ringkasan perangkat.
   * @type {Object[]}
   */
  const summaryDev = [];

  /**
   * ID unik untuk setiap perangkat dalam ringkasan.
   * @type {number}
   */
  let id = 0;

  // Iterasi melalui konfigurasi perangkat
  for (const configDev of ConfigDevicesLocal) {
    /**
     * Mengambil status link perangkat dari `OperationDevicesLocal`.
     * @type {string|null}
     */
    const resultLink = await getJsonParameter(
      OperationDevicesLocal,
      configDev.tagname,
      'link'
    );

    // Jika perangkat memiliki link, tambahkan ke ringkasan
    if (resultLink !== null) {
      /**
       * Objek JSON hasil ringkasan untuk satu perangkat.
       * @type {Object}
       */
      const jsonResult = createDevSummaryJSON(
        id,
        configDev.tagname,
        configDev.type,
        configDev.description,
        resultLink
      );

      id++; // Increment ID
      summaryDev.push(jsonResult); // Tambahkan ke array ringkasan
    }
  }

  return summaryDev; // Kembalikan array ringkasan
}
