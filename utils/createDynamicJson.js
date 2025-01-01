/**
 * Creates a JSON object summarizing development details.
 *
 * @param {string|number} id - A unique identifier for the summary.
 * @param {string} tagname - The tag name associated with the summary.
 * @param {string} type - The type or category of the summary.
 * @param {string} description - A brief description of the summary.
 * @param {string} link - A URL or link associated with the summary.
 * @returns {Object} - Returns an object containing the provided details.
 *
 * @example
 * const summary = createDevSummaryJSON(
 *   1,
 *   'feature1',
 *   'feature',
 *   'This is a description of feature1.',
 *   'https://example.com/feature1'
 * );
 * console.log(summary);
 * Output:
 *  {
 *    id: 1,
 *    tagname: 'feature1',
 *    type: 'feature',
 *    description: 'This is a description of feature1.',
 *    link: 'https://example.com/feature1'
 *  }
 */
export default function createDevSummaryJSON(
  id,
  tagname,
  type,
  description,
  link
) {
  return {
    id: id,
    tagname: tagname,
    type: type,
    description: description,
    link: link,
  };
}
