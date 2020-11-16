export function stringsToNumbers(arrs) {
  // tslint:disable-next-line:forin
  for (const i in arrs) {
    arrs[i] = arrs[i].toLowerCase();
    if (arrs[i] !== '.') {
      if (arrs[i].charCodeAt(0) > 58) {
        arrs[i] = arrs[i].charCodeAt(0) - 87;
      } else {
        arrs[i] = arrs[i].charCodeAt(0) - 48;
      }
    } else {
      arrs[i] = -1;
    }
  }
  return arrs;
}
export function numbersToStrings(arrs) {
  // tslint:disable-next-line:forin
  for (const i in arrs) {
    console.log('arr[i]', arrs[i]);
    if (arrs[i] > 9) {
      arrs[i] = String.fromCharCode(arrs[i] + 87);
    } else {
      arrs[i] = Number(arrs[i]);
    }
    console.log('arr[i]2', arrs[i]);
  }
  return arrs;
}
