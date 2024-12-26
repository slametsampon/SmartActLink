import getArrayJson from '../utils/getArrayJson.js';
import ConfigDevicesLocal from '../data/configDevicesLocal.js';
import CardJson from '../components/cardJson.js';

async function App() {
  const resulDev = await getArrayJson(ConfigDevicesLocal, 'Pompa-1');
  const detailDev = document.getElementById('detail-device');
  detailDev.appendChild(CardJson(resulDev));
  return detailDev;
}

document.addEventListener('DOMContentLoaded', App);
