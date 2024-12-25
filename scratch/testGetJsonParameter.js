import OperationDevicesLocal from '../data/operationDevicesLocal.js';
import getJsonParameter from '../utils/getJsonParameter.js';

(async () => {
  const result = await getJsonParameter(
    OperationDevicesLocal,
    'Sensor-1',
    'link'
  );
  console.log('result : ', result);
})();
