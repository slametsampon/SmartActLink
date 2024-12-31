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
export default async function getArrayJson(jsonArray, tagname) {
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
