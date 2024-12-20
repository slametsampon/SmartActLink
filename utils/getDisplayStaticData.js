import configActuator from './../data/staticData.js';
export default function getDisplayStaticData() {
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
