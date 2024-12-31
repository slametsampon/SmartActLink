import isEmptyObject from './isEmptyObject.js';
import getArrayJson from './getArrayJson.js';

/**
 * Retrieves a specific parameter value from a JSON array based on a given tag name.
 *
 * @param {Array} jsonArray - The input JSON array to search within.
 * @param {string} tagname - The tag name to search for in the JSON array.
 * @param {string} parameter - The parameter key whose value is to be retrieved.
 * @returns {Promise<*>} - Returns the value of the specified parameter if found, or `null` if the array or result is empty.
 *
 * @throws {TypeError} - Throws an error if `jsonArray` is not an array or if required parameters are missing.
 *
 * @example
 * const jsonArray = [
 *   { tag: 'name', value: 'John' },
 *   { tag: 'age', value: 30 }
 * ];
 * const tagname = 'name';
 * const parameter = 'value';
 * const result = await getJsonParameter(jsonArray, tagname, parameter);
 * console.log(result); // 'John'
 */
export default async function getJsonParameter(jsonArray, tagname, parameter) {
  if (!Array.isArray(jsonArray)) {
    throw new TypeError('Expected jsonArray to be an array.');
  }

  if (isEmptyObject(jsonArray)) {
    console.log('jsonArray - kosong');
    return null;
  }

  const jsonResult = await getArrayJson(jsonArray, tagname);

  if (isEmptyObject(jsonResult)) {
    console.log('jsonResult - kosong');
    return null;
  }

  return jsonResult[parameter] || null;
}
