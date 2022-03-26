class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if (this.stack.length < this.limit) {
      this.stack.push(item);
    } else {
      throw new Error("Stack is full");
    }
  }

  // remove item from top of stack and return it
  pop() {
    return this.stack.pop();
  }

  // return item at top of stack without removing it
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    return this.stack.length === 0;
  }

  // return true if stack is full, otherwise false
  isFull() {
    return this.stack.length === this.limit;
  }

  // return number of items in stack
  size() {
    return this.stack.length;
  }

  // return -1 if item not in stack, otherwise integer representing
  // how far it is from the top
  search(target) {
    if (this.stack.includes(target)) {
      return this.stack.length - this.stack.indexOf(target) - 1;
    } else {
      return -1;
    }
  }

  // print contents of stack: do not return the stack itself!
  print() {
    console.log(this.stack);
  }
}

if (require.main === module) {
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6);
  stack.push(7);
  stack.push(8);
  stack.push(9);
  stack.push(10);
  stack.push(11);
  stack.pop();
  stack.peek();

  console.log(stack);
  console.log(stack.peek());
  console.log(stack.isEmpty());
  console.log(stack.isFull());
  console.log(stack.size());
  console.log(stack.search(1));
  stack.print();
}

module.exports = Stack;
