// 任意进制转换为10进制
export function NToX(num, scale): Array<number> {
  let sum = 0;
  // tslint:disable-next-line:forin
  for (const i in num) {
    sum += num[i] * Math.pow(scale, num.length - 1 - Number(i));
  }
  return stringsToNumbers(sum.toString().split(''));
}
// 十进制转换为任意进制
export function XToN(num: Array<number>): Array<string> {
  console.log(num);
  const result = [];
  const value = Number(num.join(''));
  console.log(value);
  function compute(scale) {
    const subResult = [];
    let v = value;
    while (Math.floor(v / scale)) {
      subResult.push(v % scale);
      v = Math.floor(v / scale);
      console.log('hello', Math.floor(v / scale));
    }
    subResult.push(v % scale);
    return numbersToStrings(subResult).join('');
  }
  result.push(compute(2));
  result.push(compute(8));
  result.push(compute(10));
  result.push(compute(16));
  console.log(result);
  return result;
}
export function stringsToNumbers(arrs) {
  for (const i in arrs) {
    if (arrs[i].charCodeAt(0) > 58) {
      arrs[i] = arrs[i].charCodeAt(0) - 87;
    } else {
      arrs[i] = arrs[i].charCodeAt(0) - 48;
    }
  }
  return arrs;
}
function numbersToStrings(arrs) {
  for (const i in arrs) {
    if (arrs[i] > 9) {
      arrs[i] = String.fromCharCode(arrs[i] + 87);
    } else {
      arrs[i] = Number(arrs[i]);
    }
  }
  return arrs;
}
