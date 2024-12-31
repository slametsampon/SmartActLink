import DetailFitur from '../data/detailFitur.js';

/**
 * Retrieves the detail of a specific feature based on its key.
 *
 * @param {string} fitur - The key of the feature to retrieve (e.g., 'mandiri', 'aksesHP', 'kompatibel').
 * @returns {Object} - Returns an object containing the feature's details with `title` and `description` properties.
 *                      If the feature key is not found, returns a default object with title 'Unknown' and an appropriate description.
 *
 * @example
 * const detail = getFiturDetail('mandiri');
 * console.log(detail);
 * // Output: { title: 'Mandiri Feature Title', description: 'Details about Mandiri feature' }
 *
 * @example
 * const detail = getFiturDetail('unknownKey');
 * console.log(detail);
 * // Output: { title: 'Unknown', description: 'Fitur tidak ditemukan' }
 */
export default function getFiturDetail(fitur) {
  const fiturMap = {
    mandiri: DetailFitur.mandiri,
    aksesHP: DetailFitur.aksesHP,
    kompatibel: DetailFitur.kompatibel,
  };

  return (
    fiturMap[fitur] || {
      title: 'Unknown',
      description: 'Fitur tidak ditemukan',
    }
  );
}
