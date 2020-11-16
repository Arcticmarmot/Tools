import {numbersToStrings} from '../../../../constants/scale/fn';

export class ScaleNumber {
  private isDecimals: boolean;
  private dotPosition: number;
  private readonly scale: number;
  private readonly inputNumber: number[];
  private integers: number[];
  private decimals: number[];
  private integersSum = 0;
  private decimalsSum = 0;
  result: Array<string> = [];
  constructor(inputNumber: Array<number>, scale: number) {
    this.inputNumber = inputNumber;
    this.scale = scale;
    this.init();
    this.apartNumber();
    this.xToN();
  }
  private init() {
    this.dotPosition = this.inputNumber.indexOf(-1);
    this.isDecimals = this.dotPosition !== -1 && this.inputNumber.length > (this.dotPosition + 1);
  }
  private apartNumber() {
    if (this.isDecimals) {
      this.integers = this.inputNumber.slice(0, this.dotPosition);
      this.decimals = this.inputNumber.slice(this.dotPosition + 1);
    } else {
      this.integers = this.inputNumber;
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
      const apartNumber = this.inputNumber.join('').split('-1');
      this.integersSum = Number(apartNumber[0]);
      this.decimalsSum = Number(apartNumber[1]);
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
    this.result = [];
    if (this.isDecimals) {
      this.result.push(this.integerCompute(2) + '.' + this.decimalCompute(2));
      this.result.push(this.integerCompute(8) + '.' + this.decimalCompute(8));
      this.result.push(this.integersSum + this.decimalsSum + '');
      this.result.push(this.integerCompute(16) + '.' + this.decimalCompute(16));
    } else {
      this.result.push(this.integerCompute(2));
      this.result.push(this.integerCompute(8));
      this.result.push(this.integersSum + '');
      this.result.push(this.integerCompute(16));
    }
  }
}
