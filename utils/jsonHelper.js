/**
 * @module jsonHelper
 */

/**
 * Searches for an object within a JSON array by matching a specific `tagname` property.
 *
 * @param {Array<Object>} jsonArray - An array of objects to search within.
 * @param {string} tagname - The value of the `tagname` property to match.
 * @returns {Object|null} - Returns the first object that matches the `tagname` property, or `null` if not found or an error occurs.
 *
 * @throws {TypeError} - Throws an error if `jsonArray` is not an array or if required parameters are missing.
 *
 * @example
 * const jsonArray = [
 *   { tagname: 'name', value: 'John' },
 *   { tagname: 'age', value: 30 }
 * ];
 * const result = await getArrayJson(jsonArray, 'name');
 * console.log(result); // { tagname: 'name', value: 'John' }
 *
 * @example
 * const result = await getArrayJson(jsonArray, 'unknown');
 * console.log(result); // null
 */
export async function getArrayJson(jsonArray, tagname) {
  try {
    if (!Array.isArray(jsonArray)) {
      throw new TypeError('Expected jsonArray to be an array.');
    }

    if (typeof tagname !== 'string') {
      throw new TypeError('Expected tagname to be a string.');
    }

    const index = jsonArray.findIndex((item) => item.tagname === tagname);

    return index !== -1 ? jsonArray[index] : null; // Return the found object or null if not found
  } catch (error) {
    console.error('Error processing JSON:', error);
    return null; // If an error occurs, return null
  }
}

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
  if (Array.isArray(json)) {
    // Jika input adalah array, terapkan fungsi pada setiap elemen
    return json.map((item) =>
      Object.fromEntries(
        Object.entries(item).filter(([key]) => !keys.includes(key))
      )
    );
  }
  // Jika input adalah objek tunggal
  return Object.fromEntries(
    Object.entries(json).filter(([key]) => !keys.includes(key))
  );
}

/**
 * Mendapatkan properti tertentu dari objek JSON.
 * @param {Object} json - Objek JSON yang akan dimodifikasi.
 * @param {string|string[]} keys - Nama properti atau array nama properti yang akan dihapus.
 * @returns {Object} Objek JSON baru tanpa properti yang dihapus.
 */
export function getJsonKeys(json, keys) {
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  if (Array.isArray(json)) {
    // Jika input adalah array, terapkan fungsi pada setiap elemen
    return json.map((item) =>
      Object.fromEntries(
        Object.entries(item).filter(([key]) => keys.includes(key))
      )
    );
  }
  // Jika input adalah objek tunggal
  return Object.fromEntries(
    Object.entries(json).filter(([key]) => keys.includes(key))
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

/**
 * Perform a generalized one-to-one join between two JSON data sets.
 * Supports both arrays and objects, with flexible key mapping and merge logic.
 * @param {Array|Object} json1 - The first data set (source).
 * @param {Array|Object} json2 - The second data set (target).
 * @param {Object} options - Configuration options for the join.
 * @param {string} options.sourceKey - Key in json1 to match on.
 * @param {string} options.targetKey - Key in json2 to match on.
 * @param {Object} [options.defaultValues={}] - Default values for unmatched data.
 * @param {Function} [options.mergeCallback=null] - Custom merge logic (receives json1Item and json2Item).
 * @param {boolean} [options.warnOnMissing=false] - Whether to log warnings for missing matches.
 * @returns {Array} - An array of merged objects.
 * @throws {Error} - If inputs are invalid.
 */
export function joinJsonGeneralized(json1, json2, options = {}) {
  const {
    sourceKey = 'id', // Default to 'id' for generic use
    targetKey = 'id',
    defaultValues = {},
    mergeCallback = null,
    warnOnMissing = false,
  } = options;

  // Convert objects to arrays if necessary
  const json1Array = Array.isArray(json1) ? json1 : Object.values(json1);
  const json2Array = Array.isArray(json2) ? json2 : Object.values(json2);

  // Perform the join
  return json1Array.map((item1, index) => {
    if (!(sourceKey in item1)) {
      throw new Error(
        `Missing key "${sourceKey}" in json1 item: ${JSON.stringify(item1)}`
      );
    }

    const matchingItem2 = json2Array.find(
      (item2) => item2[targetKey] === item1[sourceKey]
    );

    const mergedItem = matchingItem2
      ? mergeCallback
        ? mergeCallback(item1, matchingItem2)
        : { ...item1, ...matchingItem2 }
      : { ...item1, ...defaultValues };

    // Add unique `id` key as an integer starting from 0
    return {
      id: index, // Add incremental integer ID
      ...mergedItem,
    };
  });
}

/**
 * Combines two JSON arrays into one. Optionally removes duplicates based on a unique key.
 * @param {Array} json1 - The first JSON array.
 * @param {Array} json2 - The second JSON array.
 * @param {Object} [options] - Additional options for the union operation.
 * @param {string} [options.uniqueKey] - A key to enforce uniqueness. If provided, duplicates are removed based on this key.
 * @throws {Error} - If inputs are not arrays.
 * @returns {Array} - The combined JSON array. If `uniqueKey` is specified, duplicates are removed.
 */
export function unionJson(json1, json2, options = {}) {
  const { uniqueKey } = options;

  // Validate input types
  if (!Array.isArray(json1)) {
    throw new Error('Invalid input: json1 must be an array.');
  }
  if (!Array.isArray(json2)) {
    throw new Error('Invalid input: json2 must be an array.');
  }

  // Combine the arrays
  let combined = [...json1, ...json2];

  // Remove duplicates if a unique key is specified
  if (uniqueKey) {
    const seen = new Set();
    combined = combined.filter((item) => {
      const key = item[uniqueKey];
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  return combined;
}

/**
 * Finds the intersection of two JSON arrays based on a specific key.
 * @param {Array} json1 - The first JSON array.
 * @param {Array} json2 - The second JSON array.
 * @param {string} key - The key used to determine matching elements.
 * @throws {Error} - If inputs are not arrays or key is not specified.
 * @returns {Array} - A JSON array containing the intersection of json1 and json2.
 */
export function intersectJson(json1, json2, key) {
  if (!Array.isArray(json1) || !Array.isArray(json2)) {
    throw new Error('Both inputs must be arrays.');
  }
  if (typeof key !== 'string' || !key.trim()) {
    throw new Error('A valid key must be specified.');
  }

  return json1.filter((item1) =>
    json2.some((item2) => item1[key] === item2[key])
  );
}

/**
 * Finds the difference of two JSON arrays based on a specific key.
 * @param {Array} json1 - The first JSON array.
 * @param {Array} json2 - The second JSON array.
 * @param {string} key - The key used to determine matching elements.
 * @throws {Error} - If inputs are not arrays or key is not specified.
 * @returns {Array} - A JSON array containing elements from json1 not in json2.
 */
export function differenceJson(json1, json2, key) {
  if (!Array.isArray(json1) || !Array.isArray(json2)) {
    throw new Error('Both inputs must be arrays.');
  }
  if (typeof key !== 'string' || !key.trim()) {
    throw new Error('A valid key must be specified.');
  }

  return json1.filter(
    (item1) => !json2.some((item2) => item1[key] === item2[key])
  );
}

/**
 * Groups elements of a JSON array based on a specific key.
 * @param {Array} json - The JSON array to group.
 * @param {string} key - The key used to group the elements.
 * @throws {Error} - If the input is not an array or key is not specified.
 * @returns {Object} - An object where each key is a group and the value is an array of elements in that group.
 */
export function groupBy(json, key) {
  if (!Array.isArray(json)) {
    throw new Error('Input must be an array.');
  }
  if (typeof key !== 'string' || !key.trim()) {
    throw new Error('A valid key must be specified.');
  }

  return json.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}

/**
 * Merges two JSON arrays with priority, updating matching elements based on a unique key.
 * @param {Array} json1 - The first JSON array.
 * @param {Array} json2 - The second JSON array.
 * @param {string} key - The key used to determine matching elements.
 * @throws {Error} - If inputs are not arrays or key is not specified.
 * @returns {Array} - A JSON array with merged elements. `json2` has priority over `json1`.
 */
export function mergeWithPriority(json1, json2, key) {
  if (!Array.isArray(json1) || !Array.isArray(json2)) {
    throw new Error('Both inputs must be arrays.');
  }
  if (typeof key !== 'string' || !key.trim()) {
    throw new Error('A valid key must be specified.');
  }

  const merged = [...json1];
  json2.forEach((item2) => {
    const index = merged.findIndex((item1) => item1[key] === item2[key]);
    if (index > -1) {
      merged[index] = { ...merged[index], ...item2 };
    } else {
      merged.push(item2);
    }
  });
  return merged;
}

/**
 * Flattens a nested JSON array into a single level.
 * @param {Array} json - The JSON array to flatten.
 * @param {string} [prefix=''] - Optional prefix for the keys in the flattened JSON.
 * @throws {Error} - If the input is not an array.
 * @returns {Array} - A flattened JSON array.
 */
export function flattenJson(json, prefix = '') {
  if (!Array.isArray(json)) {
    throw new Error('Input must be an array.');
  }

  return json.map((item) =>
    Object.keys(item).reduce((acc, key) => {
      const flatKey = prefix ? `${prefix}.${key}` : key;
      acc[flatKey] = item[key];
      return acc;
    }, {})
  );
}

/**
 * Aggregates numerical values from a JSON array based on a specific key.
 * @param {Array} json - The JSON array to aggregate.
 * @param {string} key - The key whose values will be aggregated.
 * @param {string} operation - The aggregation operation to perform ('sum', 'average', 'max', 'min').
 * @throws {Error} - If the input is not an array or operation is not supported.
 * @returns {number} - The result of the aggregation.
 */
export function aggregateJson(json, key, operation = 'sum') {
  if (!Array.isArray(json)) {
    throw new Error('Input must be an array.');
  }
  if (typeof key !== 'string' || !key.trim()) {
    throw new Error('A valid key must be specified.');
  }

  const values = json.map((item) => item[key] || 0);

  switch (operation) {
    case 'sum':
      return values.reduce((acc, val) => acc + val, 0);
    case 'average':
      return values.reduce((acc, val) => acc + val, 0) / values.length;
    case 'max':
      return Math.max(...values);
    case 'min':
      return Math.min(...values);
    default:
      throw new Error(
        'Unsupported operation. Use "sum", "average", "max", or "min".'
      );
  }
}
