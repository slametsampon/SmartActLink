/**
 * @module jsonHelper
 */

/**
 * Mendapatkan parameter dari JSON array berdasarkan tagname dan parameter.
 * @async
 * @param {Array<Object>} jsonArray - Array JSON yang akan diproses.
 * @param {string} tagname - Nama tag untuk mencari objek.
 * @param {string} parameter - Nama parameter yang ingin diambil.
 * @returns {Promise<*>} Nilai dari parameter jika ditemukan, atau null jika tidak ditemukan.
 */
export async function getJsonParameter(jsonArray, tagname, parameter) {
  if (isEmptyObject(jsonArray)) {
    console.log('jsonArray - kosong');
    return null;
  }
  const jsonResult = await getArrayJson(jsonArray, tagname);
  if (isEmptyObject(jsonResult)) {
    console.log('jsonResult - kosong');
    return null;
  }
  return jsonResult[parameter];
}

/**
 * Memperbarui parameter dalam JSON array berdasarkan tagname.
 * @async
 * @param {Array<Object>} jsonArray - Array JSON yang akan diproses.
 * @param {string} tagname - Nama tag untuk mencari objek.
 * @param {string} parameter - Nama parameter yang ingin diperbarui.
 * @param {*} value - Nilai baru untuk parameter.
 * @returns {Promise<boolean>} True jika parameter berhasil diperbarui, false jika tidak.
 */
export async function updateJsonParameter(
  jsonArray,
  tagname,
  parameter,
  value
) {
  if (isEmptyObject(jsonArray)) {
    console.log('jsonArray - kosong');
    return false;
  }

  const jsonResult = await getArrayJson(jsonArray, tagname);
  if (isEmptyObject(jsonResult)) {
    console.log('jsonResult - kosong');
    return false;
  }

  if (jsonResult.hasOwnProperty(parameter)) {
    jsonResult[parameter] = value;
    return true;
  } else {
    console.log(`Parameter "${parameter}" tidak ditemukan.`);
    return false;
  }
}

/**
 * Menambahkan entri baru ke JSON array.
 * @param {Array<Object>} jsonArray - Array JSON tempat entri akan ditambahkan.
 * @param {Object} newJson - Objek JSON baru yang akan ditambahkan.
 * @returns {boolean} True jika entri berhasil ditambahkan, false jika tidak.
 */
export function addJsonEntry(jsonArray, newJson) {
  if (!Array.isArray(jsonArray)) {
    console.log('jsonArray harus berupa array.');
    return false;
  }

  jsonArray.push(newJson);
  return true;
}

/**
 * Menghapus entri dari JSON array berdasarkan tagname.
 * @async
 * @param {Array<Object>} jsonArray - Array JSON tempat entri akan dihapus.
 * @param {string} tagname - Nama tag untuk mencari entri.
 * @returns {Promise<boolean>} True jika entri berhasil dihapus, false jika tidak.
 */
export async function removeJsonEntry(jsonArray, tagname) {
  if (isEmptyObject(jsonArray)) {
    console.log('jsonArray - kosong');
    return false;
  }

  const index = jsonArray.findIndex((item) => item.tagname === tagname);
  if (index === -1) {
    console.log(`tagname "${tagname}" tidak ditemukan.`);
    return false;
  }

  jsonArray.splice(index, 1);
  return true;
}

/**
 * Mendapatkan daftar JSON berdasarkan parameter tertentu.
 * @param {Array<Object>} jsonArray - Array JSON yang akan diproses.
 * @param {string} parameter - Nama parameter untuk dicocokkan.
 * @param {*} value - Nilai parameter yang dicocokkan.
 * @returns {Array<Object>} Array berisi objek JSON yang cocok.
 */
export function getJsonListByParameter(jsonArray, parameter, value) {
  if (!Array.isArray(jsonArray)) {
    console.log('jsonArray harus berupa array.');
    return [];
  }

  return jsonArray.filter((item) => item[parameter] === value);
}

/**
 * Membaca file JSON dari URL.
 * @async
 * @param {string} url - URL file JSON yang akan dibaca.
 * @returns {Promise<Object|null>} Objek JSON yang dibaca, atau null jika terjadi kesalahan.
 */
export async function readJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch JSON from ${url}: ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Membaca file JSON dari file lokal.
 * @param {File|HTMLInputElement|string} filePathOrInput - Path file lokal (Node.js) atau input file (browser).
 * @returns {Promise<Object|null>} Objek JSON yang dibaca, atau null jika terjadi kesalahan.
 */
export function readJSONLocal(filePathOrInput) {
  if (isNodeEnvironment()) {
    const fs = require('fs');
    try {
      const data = fs.readFileSync(filePathOrInput, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading JSON file from ${filePathOrInput}:`, error);
      return null;
    }
  } else if (isBrowserEnvironment()) {
    return new Promise((resolve, reject) => {
      const file = filePathOrInput.files[0];
      if (!file) {
        reject('No file selected');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          resolve(data);
        } catch (error) {
          reject(`Error parsing JSON: ${error.message}`);
        }
      };

      reader.onerror = () => reject('Error reading file');
      reader.readAsText(file);
    });
  } else {
    throw new Error('Unknown environment');
  }
}

/**
 * Menulis file JSON ke lokal.
 * @param {string|Object} filePathOrData - Path file (Node.js) atau data JSON (browser).
 * @param {Object} [data] - Objek JSON yang akan ditulis (browser).
 * @returns {boolean} True jika berhasil menulis, false jika tidak.
 */
export function writeJSONLocal(filePathOrData, data) {
  if (isNodeEnvironment()) {
    const fs = require('fs');
    try {
      fs.writeFileSync(filePathOrData, JSON.stringify(data, null, 2), 'utf-8');
      console.log(`Successfully wrote JSON data to ${filePathOrData}`);
      return true;
    } catch (error) {
      console.error(`Error writing JSON file to ${filePathOrData}:`, error);
      return false;
    }
  } else if (isBrowserEnvironment()) {
    const blob = new Blob([JSON.stringify(filePathOrData, null, 2)], {
      type: 'application/json',
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = data || 'data.json';
    link.click();
    return true;
  } else {
    throw new Error('Unknown environment');
  }
}

/**
 * Menghapus properti tertentu dari objek JSON.
 * @param {Object} json - Objek JSON yang akan dimodifikasi.
 * @param {string|string[]} keys - Nama properti atau array nama properti yang akan dihapus.
 * @returns {Object} Objek JSON baru tanpa properti yang dihapus.
 */
export function removeJsonKeys(json, keys) {
  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  return Object.fromEntries(
    Object.entries(json).filter(([key]) => !keys.includes(key))
  );
}

/**
 * Membuat objek JSON dari objek input.
 * @param {Object} input - Objek key-value.
 * @returns {Object} Objek JSON yang sama.
 */
export function createJSONFromObject(input) {
  if (typeof input !== 'object' || input === null) {
    throw new Error('Input harus berupa objek.');
  }
  return { ...input };
}

/**
 * Membuat objek JSON secara dinamis berdasarkan pasangan key-value.
 * @param {...[string, any]} pairs - Array pasangan key-value berupa [key, value].
 * @returns {Object} Objek JSON yang dihasilkan dari pasangan key-value.
 * @throws {Error} Jika pasangan tidak valid (key bukan string atau tidak berpasangan).
 */
export function createDynamicJSON(...pairs) {
  const result = {};

  for (const pair of pairs) {
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error(
        'Setiap pasangan harus berupa array dengan dua elemen: [key, value].'
      );
    }

    const [key, value] = pair;

    if (typeof key !== 'string') {
      throw new Error('Key harus berupa string.');
    }

    result[key] = value;
  }

  return result;
}
