class LRU {
  constructor(size) {
    this.head = null;
    this.tail = null;
    this.maxSize = size;
    this.currentSize = 0;
    this.map = {};
  }

  add(value) {
    if (map[value]) {
      //remove then add to back
      const foundNode = map[value];

      //size doesn't change
    } else {
      //create new node
      //add to back and to map
      //size++
      //if size > max dequeue oldest value and remove from hash. currentSize--
    }
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
