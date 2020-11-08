// 任意进制转换为10进制
export function NToX(num, scale): Array<number> {
  let sum = 0;
  // 获取整数和小数部分
  let integers;
  let decimals;
  const index = num.indexOf('.');
  if (index !== -1) {
    integers = num.slice(0, index);
    decimals = num.slice(index + 1);
  } else {
    integers = num;
  }
  // tslint:disable-next-line:forin
  for (const i in integers) {
    sum += integers[i] * Math.pow(scale, integers.length - 1 - Number(i));
  }
  if (decimals) {
    // tslint:disable-next-line:forin
    for (const i in decimals) {
      sum += decimals[i] * Math.pow(scale, -(Number(i) + 1));
    }
  }
  return stringsToNumbers(sum.toString().split(''));
}
// 十进制转换为任意进制
export function XToN(num: Array<number>): Array<string> {
  const result = [];
  const [integers, decimals] = num.join('').split('.');
  const integersValue = Number(integers);
  if (decimals) {
    const decimalsValue = Number('.' + decimals);
    function decimalCompute(computeScale) {
      const subResult = [];
      const temps = [];
      let v = decimalsValue;
      while (temps.indexOf(v) === -1) {
        temps.push(v);
        subResult.push(Math.floor((v * computeScale)));
        v = (v * computeScale) % 1;
      }
      subResult.pop();
      return numbersToStrings(subResult).join('');
    }
    result.push(integerCompute(2) + '.' + decimalCompute(2));
    result.push(integerCompute(8) + '.' + decimalCompute(8));
    result.push(num.join(''));
    result.push(integerCompute(16) + '.' + decimalCompute(16));
  } else {
    result.push(integerCompute(2));
    result.push(integerCompute(8));
    result.push(num.join(''));
    result.push(integerCompute(16));
  }
  function integerCompute(computeScale) {
    const subResult = [];
    let v = integersValue;
    while (Math.floor(v / computeScale)) {
      subResult.push(v % computeScale);
      v = Math.floor(v / computeScale);
    }
    subResult.push(v % computeScale);
    // reverse
    for (const i in subResult) {
      if ((Number(i) + 1) <= (subResult.length / 2)) {
        const temp = subResult[subResult.length - 1 - Number(i)];
        subResult[subResult.length - 1 - Number(i)] = subResult[i];
        subResult[i] = temp;
      }
    }
    return numbersToStrings(subResult).join('');
  }
  console.log(result);
  return result;
}
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
    }
  }
  return arrs;
}
function numbersToStrings(arrs) {
  for (const i in arrs) {
    console.log(typeof(arrs[i]), arrs[i]);
    if (arrs[i] > 9) {
      arrs[i] = String.fromCharCode(arrs[i] + 87);
    } else {
      arrs[i] = Number(arrs[i]);
    }
  }
  return arrs;
}
