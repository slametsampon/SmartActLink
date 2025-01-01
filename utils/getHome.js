import GLOBAL_ENV from '../config.env.js';

/**
 * Returns the appropriate home URL based on the current environment.
 *
 * @returns {string} The home URL for the current environment.
 */
const getHome = () =>
  GLOBAL_ENV.ENV === 'production'
    ? GLOBAL_ENV.GITHUB_HOME
    : GLOBAL_ENV.LOCAL_HOME;

export default getHome;
