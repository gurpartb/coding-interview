// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor(){
        this.stackPrimary = new Stack();
        this.stackHelper = new Stack();
    }

    add(record){
        // push everything to stackHelper
        while(this.stackPrimary.peek()){
            this.stackHelper.push(this.stackPrimary.pop());
        }
        this.stackPrimary.push(record);
        // push everything to stackPrimary
        while(this.stackHelper.peek()){
            this.stackPrimary.push(this.stackHelper.pop());
        }
    }

    remove(){
        return this.stackPrimary.pop();
    }

    peek(){
        return this.stackPrimary.peek();
    }
}

module.exports = Queue;
