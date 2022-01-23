class LRU {
  constructor(cacheSize) {
    this.maxSize = cacheSize;
    this.head = null;
    this.tail = null;
    this.currentSize = 0;
    this.storedPages = {};
  }

  requestpage(val) {
    if (this.storedPages[val]) {
      this.movePageToBack(val);
    } else {
      this.enqueue(val);
    }

    return this.storedPages[val];
  }

  movePageToBack(val) {
    if (this.currentSize === 1) return;

    if (this.tail === val) return;
    const page = this.storedPages[val];
    if (this.head === page) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      page.prev.next = page.next;
      page.next.prev = page.prev;
    }

    this.tail.next = page;
    page.prev = this.tail;
    page.next = null;
    this.tail = page;
    return;
  }

  enqueue(val) {
    const page = new pageNode(val);
    this.storedPages[val] = page;

    if (this.head === null) {
      this.head = page;
      this.tail = page;
    } else {
      this.tail.next = page;
      page.prev = this.tail;
      this.tail = page;
    }
    this.currentSize++;

    if (this.currentSize > this.maxSize) {
      this.dequeue();
    }
  }

  dequeue() {
    if (this.head === null) {
      console.log('the queue is empty');
    } else {
      const returnNode = this.head;
      delete this.storedPages[returnNode.val];
      this.currentSize--;
      if (this.head === this.tail) {
        this.tail = null;
        this.head = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      return returnNode;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log('***' + current.val + '***');
      current = current.next;
    }
  }
}

class pageNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}
