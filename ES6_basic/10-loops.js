export default function appendToEachArrayValue(array, appendString) {
    const array = [];
    for (const idx of array) {
      array.push(appendString + idx);
    }
  
    return array;
  }