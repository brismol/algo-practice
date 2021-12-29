class MinHeap {
  constructor(array) {
    this.heap = array;
    this.buildHeap();
  }

  buildHeap() {
    const firstParent = Math.floor((this.heap.length - 1) / 2);
    for (let i = firstParent; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  //O(log(n))
  siftDown(idx) {
    const childOneIdx = idx * 2 + 1;
    const childTwoIdx = childOneIdx + 1;

    const val = this.heap[idx];
    const childOne = this.heap[childOneIdx];
    const childTwo = this.heap[childTwoIdx];

    if (val > childOne || val > childTwo) {
      if (childOne < childTwo) {
        this.swap(idx, childOneIdx);
        this.siftDown(childOneIdx);
      } else {
        this.swap(idx, childTwoIdx);
        this.siftDown(childTwoIdx);
      }
    }
  }

  //O(log(n))
  siftUp(idx) {
    const parentIdx = Math.floor((idx - 1) / 2);
    if (this.heap[parentIdx] && this.heap[parentIdx] > this.heap[idx]) {
      this.swap(idx, parentIdx);
      this.siftUp(parentIdx);
    }
  }

  //swap O(1)
  swap(idxOne, idxTwo) {
    const temp = this.heap[idxOne];
    this.heap[idxOne] = this.heap[idxTwo];
    this.heap[idxTwo] = temp;
  }

  //O(1)
  peek() {
    return this.heap[0];
  }

  //logn
  remove() {
    if (!this.heap.length) return 'The heap is empty!';
    this.swap(0, this.heap.length - 1);
    const returnVal = this.heap.pop();
    this.siftDown(0);
    return returnVal;
  }

  //logn
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }
}
