/**
 * Checks if the given input is an empty object, array, Set, or Map.
 * For `null` or `undefined`, it also returns `true`.
 * For any other data types, it assumes the input is not empty.
 *
 * @param {*} data - The input to check.
 * @returns {boolean} - Returns `true` if the input is considered empty, `false` otherwise.
 *
 * @example
 * isEmptyObject(null); // true
 * isEmptyObject({}); // true
 * isEmptyObject([]); // true
 * isEmptyObject(new Set()); // true
 * isEmptyObject(new Map()); // true
 * isEmptyObject({ key: 'value' }); // false
 * isEmptyObject([1, 2, 3]); // false
 * isEmptyObject(42); // false
 */
export default function isEmptyObject(data) {
  if (data === null || data === undefined) return true; // Check null or undefined
  if (typeof data === 'object') {
    if (data instanceof Set || data instanceof Map) {
      return data.size === 0; // Check if Set or Map is empty
    }
    return Object.keys(data).length === 0; // Check if object or array is empty
  }
  return false; // For other types, assume not empty
}
