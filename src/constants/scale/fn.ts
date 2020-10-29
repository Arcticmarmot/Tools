// 任意进制转换为10进制
export function NToX(num, scale): Array<number> {
  let sum = 0;
  // tslint:disable-next-line:forin
  for (const i in num) {
    console.log(num[i] * Math.pow(scale, num.length - 1 - Number(i)));
    sum += num[i] * Math.pow(scale, num.length - 1 - Number(i));
  }
  const sumArray: any = sum.toString().split('');
  const X: Array<number> = [];
  for (const i in sumArray) {
    if (sumArray[i].charCodeAt(0) - 48 > 10) {
      X[i] = sumArray[i].charCodeAt(0) - 87;
    } else {
      X[i] = sumArray[i].charCodeAt(0) - 48;
    }
  }
  console.log(X);
  return X;
}
// 十进制转换为任意进制
export function XToN(num: Array<number>): Array<string> {
  return [];
}
