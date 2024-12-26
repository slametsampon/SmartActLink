import isEmptyObject from './isEmptyObject.js';
import getArrayJson from './getArrayJson.js';
export default async function getJsonParameter(jsonArray, tagname, parameter) {
  if (isEmptyObject(jsonArray)) {
    console.log('jsonArray - kosong');
    return null;
  }
  const jsonResult = await getArrayJson(jsonArray, tagname);
  if (isEmptyObject(jsonResult)) {
    console.log('jsonResult - kosong');
    return null;
  }
  return jsonResult[parameter];
}
