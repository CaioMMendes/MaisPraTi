/* eslint-disable @typescript-eslint/no-explicit-any */
export function invertObject(obj: Record<string, any>): Record<string, any> {
  const invertedObj: Record<string, any> = {};
  for (const key in obj) {
    if (obj[key]) {
      invertedObj[obj[key]] = key;
    }
  }
  return invertedObj;
}
