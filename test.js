class myArray {
  constructor() {
    this.length = 0;
    this.arr = {};
  }

  push(item) {
    this.arr[this.length] = item;
    this.length++;
    return this;
  }
  get(index) {
    return this.arr[index];
  }
  pop() {
    const lastIndex = this.arr[this.length - 1];
    delete this.arr[this.length - 1];
    this.length--;
    return lastIndex;
  }
  shift() {
    const firstIndex = this.arr[0];
    for (let index = 0; index < this.length; index++) {
      this.arr[index] = this.arr[index + 1];
    }
    delete this.arr[this.length - 1];
    this.length--;
    return firstIndex;
  }
}

// const newArray = new myArray();
// newArray.push("apple");
// newArray.push("orange");
// newArray.push("orange");
// newArray.push("banana");
// console.log(newArray);
// newArray.shift();
// console.log(newArray);

const arr = [11, 500, 575, 13, 245, 228, 749, 475];

let newArr = arr.sort();
let t = newArr.reverse()[arr.length - 2];
console.log(t);
