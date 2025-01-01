import fetchDataGithub from './fetchDataGithub.js';
import GLOBAL_ENV from '../config.env.js';
export default async function getDisplayStaticData() {
  const jsonUrl = GLOBAL_ENV.JSON_URL_GITHUB;
  const data = await fetchDataGithub(jsonUrl);
  const configActuator = data.config;
  console.log('Run populateForm()');
  if (configActuator) {
    document.getElementById('tagname').value = configActuator.tagname || '';
    document.getElementById('type').value = configActuator.type || 'Pompa';
    document.getElementById('description').value =
      configActuator.description || '';
    document.getElementById('automationMode').value =
      configActuator.automationMode || 'Manual';
    document.getElementById('settings').value = configActuator.settings || 1;
  }
}
