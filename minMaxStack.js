class MinMaxStack {
  constructor() {
    this.vals = [];
    this.min = [];
    this.max = [];
  }

  peek() {
    return this.vals[this.vals.length - 1];
  }

  pop() {
    const val = this.vals.pop();
    this.min.pop();
    this.max.pop();
    return val;
  }

  push(number) {
    this.vals.push(number);
    let newMin = number;
    let newMax = number;

    if (this.min.length) {
      newMin = Math.min(this.min[this.min.length - 1], number);
      newMax = Math.max(this.max[this.max.length - 1], number);
    }
    this.min.push(newMin);
    this.max.push(newMax);
  }

  getMin() {
    return this.min[this.min.length - 1];
  }

  getMax() {
    return this.max[this.max.length - 1];
  }
}
