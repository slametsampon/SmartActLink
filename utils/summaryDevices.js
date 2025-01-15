/**
 * Membuat ringkasan perangkat berdasarkan konfigurasi lokal dan operasi perangkat.
 *
 * Fungsi ini membaca konfigurasi perangkat dari `ConfigDevicesLocal`, mengambil informasi operasi
 * dari `OperationDevicesLocal`, dan menghasilkan ringkasan perangkat dalam bentuk array JSON.
 *
 * @module summaryDevices
 * @returns {Promise<Object[]>} Ringkasan perangkat dalam bentuk array JSON.
 * Setiap objek dalam array memiliki format yang sesuai dengan hasil
 */

import ConfigDevicesLocal from '../data/configDevicesLocal.js';
import OperationDevicesLocal from '../data/operationDevicesLocal.js';
import { joinJsonGeneralized, getJsonKeys } from './jsonHelper.js';

export default async function summaryDevices() {
  const defaultValues = {
    type: 'Unknown',
    description: 'No description available',
    unit: 'N/A',
    highRange: 0,
    lowRange: 0,
    highAlarm: 0,
    lowAlarm: 0,
  };
  const keys = ['id', 'tagname', 'type', 'description', 'link'];
  const mergedJson = joinJsonGeneralized(
    ConfigDevicesLocal,
    OperationDevicesLocal,
    {
      sourceKey: 'tagname',
      targetKey: 'tagname',
      defaultValues: defaultValues,
      warnOnMissing: true,
    }
  );
  const summaryDev = getJsonKeys(mergedJson, keys);
  return summaryDev; // Kembalikan array ringkasan
}
