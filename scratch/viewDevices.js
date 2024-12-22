import fetchDataGithub from '../utils/fetchDataGithub.js';
import GLOBAL_ENV from '../config.dev.js';
function printData(data) {
  let arrayIndex = 0;
  for (const key in data) {
    if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
      arrayIndex = key;
      console.log(`${key}:`);
      printData(data[key]); // Rekursi
    } else {
      console.log(`${key}: ${data[key]}`);
    }
  }
}

function findArrayIndex(data, tagname) {
  let arrayIndex = 0;
  for (const key in data) {
    if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
      arrayIndex = key;
      console.log(`arrayIndex : ${arrayIndex}:`);
      findArrayIndex(data[key], tagname); // Rekursi
    } else {
      // console.log(`${key}: ${data[key]}`);
      if (key === 'tagname') {
        if (data['tagname'] === tagname) {
          console.log('arrayIndex : ', arrayIndex);
          console.log('tagname : ', data['tagname']);
          return arrayIndex;
        }
      }
    }
  }
}
export default async function viewDevices(tagname) {
  //const jsonUrl = GLOBAL_ENV.JSON_OPERATION_URL_GITHUB;
  const jsonUrl = GLOBAL_ENV.JSON_OPERATION_LOCAL;
  const jsonData = await fetchDataGithub(jsonUrl);
  console.log('tagname : ', tagname);
  const index = jsonData.findIndex((item) => item.tagname === tagname);
  console.log(index); // Output: 1
}
