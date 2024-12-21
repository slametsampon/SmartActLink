//import configActuator from './../data/staticData.js';
import fetchDataGithub from './fetchDataGithub.js';
export default async function getDisplayStaticData() {
  const jsonUrl =
    'https://raw.githubusercontent.com/slametsampon/SmartActLink/refs/heads/main/data/staticData.json';
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
