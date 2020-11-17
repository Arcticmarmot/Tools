import {numbersToStrings, stringsToNumbers} from '../fns/fn';
import {ComputedResult} from '../types/data';

export class ScaleNumber {
  private readonly scale: number;
  private readonly inputNumber: string;
  private isDecimals: boolean;
  private dotPosition: number;
  private transferNumber: number[];
  private integers: number[];
  private decimals: number[];
  private integersSum = 0;
  private decimalsSum = 0;
  result: ComputedResult = {
    scale2: null,
    scale8: null,
    scale10: null,
    scale16: null
  };
  constructor(inputNumber: string, scale: number) {
    this.inputNumber = inputNumber;
    this.scale = scale;
    this.init();
  }
  private init() {
    this.transferNumber = stringsToNumbers(this.inputNumber.split(''));
    this.dotPosition = this.transferNumber.indexOf(-1);
    this.isDecimals = this.dotPosition !== -1 && this.transferNumber.length > (this.dotPosition + 1);
    this.result['scale' + this.scale] = this.inputNumber;
    this.apartNumber();
    this.xToN();
  }
  private apartNumber() {
    if (this.isDecimals) {
      this.integers = this.transferNumber.slice(0, this.dotPosition);
      this.decimals = this.transferNumber.slice(this.dotPosition + 1);
    } else {
      this.integers = this.transferNumber;
    }
    if (this.scale !== 10) {
      // tslint:disable-next-line:forin
      for (const i in this.integers) {
        this.integersSum += this.integers[i] * Math.pow(this.scale, this.integers.length - 1 - Number(i));
      }
      if (this.isDecimals) {
        // tslint:disable-next-line:forin
        for (const i in this.decimals) {
          this.decimalsSum += this.decimals[i] * Math.pow(this.scale, -(Number(i) + 1));
        }
      }
    } else {
      const apartNumber = this.transferNumber.join('').split('-1');
      this.integersSum = Number(apartNumber[0]);
      this.decimalsSum = Number('.' + apartNumber[1]);

    }
  }
  private decimalCompute(computeScale) {
    const subResult = [];
    const temps = [];
    let v = this.decimalsSum;
    while (temps.indexOf(v) === -1) {
      temps.push(v);
      subResult.push(Math.floor((v * computeScale)));
      v = (v * computeScale) % 1;
    }
    subResult.pop();
    return numbersToStrings(subResult).join('');
  }
  private integerCompute(computeScale) {
    const subResult = [];
    let v = this.integersSum;
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
  xToN() {
    for (const i in this.result) {
      if (!this.result[i]) {
        if (this.isDecimals) {
          switch (i) {
            case 'scale2':
              this.result.scale2 = this.integerCompute(2) + '.' + this.decimalCompute(2);
              break;
            case 'scale8':
              this.result.scale8 = this.integerCompute(8) + '.' + this.decimalCompute(8);
              break;
            case 'scale10':
              this.result.scale10 = this.integersSum + this.decimalsSum + '';
              break;
            case 'scale16':
              this.result.scale16 = this.integerCompute(16) + '.' + this.decimalCompute(16);
              break;
          }
        } else {
          switch (i) {
            case 'scale2':
              this.result.scale2 = this.integerCompute(2);
              break;
            case 'scale8':
              this.result.scale8 = this.integerCompute(8);
              break;
            case 'scale10':
              this.result.scale10 = this.integersSum + '';
              break;
            case 'scale16':
              this.result.scale16 = this.integerCompute(16);
              break;
          }
        }
      }
    }
  }
}
