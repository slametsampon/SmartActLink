import getArrayJson from '../utils/getArrayJson.js';
import CardJson from './cardJson.js';
import OperationDevicesLocal from '../data/operationDevicesLocal.js';
import isEmptyObject from '../utils/isEmptyObject.js';
export default async function DeviceInfo() {
  const jsonData = await getArrayJson(OperationDevicesLocal, 'Sensor-1');
  if (isEmptyObject(jsonData)) {
    console.log('jsonData Data kosong');
    return;
  }
  const cardJson = CardJson(jsonData, 'Actuator');

  const deviceInfoComp = document.createElement('div');
  deviceInfoComp.appendChild(cardJson);
  return deviceInfoComp;
}
