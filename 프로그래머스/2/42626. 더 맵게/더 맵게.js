// class MiniHeap {
//     constructor(){
//         this.heap = [];
//     }
//     heapifyUp(){
//         let index = this.heap.length - 1;
//         while(index > 0){
//             let parentIndex = Math.floor((index - 1)/ 2);
//             if(this.heap[index] >= this.heap[parentIndex]) break;
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//             index = parentIndex;
//         }
//     }
//     heapifyDown(){
//         let index = 0;
//         let length = this.heap.length;
//         while(true){
//             let leftChild = index * 2 + 1;
//             let rightChild = index * 2 + 2;
//             let smallest = index;
//             if(this.heap[smallest] > this.heap[leftChild] && length > leftChild) smallest = leftChild;
//             if(this.heap[smallest] > this.heap[rightChild] && length > rightChild) smallest = rightChild;
//             if(smallest === index) break;
//             [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//             index = smallest;
//         }
//     }
//     pop(){
//         if(this.heap.length === 1) return this.heap[0];
//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown();
//         return root;
//     }
//     push(value){
//         this.heap.push(value);
//         this.heapifyUp();
//     }
//     size(){
//         return this.heap.length;
//     }
//     peak(){
//         return this.heap[0];
//     }
// }

// const solution = (scoville, K) => {
//     let count = 0;
//     const miniHeap = new MiniHeap();
//     scoville.forEach(v => miniHeap.push(v));
//     while(miniHeap.size() > 1){
//         let first = miniHeap.pop();
//         if(first >= K) return count;
//         let second = miniHeap.pop();
//         let newScoville = first + second * 2;
//         miniHeap.push(newScoville);
//         count++;
//     }
//     return miniHeap.peak() >= K ? count : -1;
// }

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return root;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }

            if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }

            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

const solution = (scoville, K) => {
    const minHeap = new MinHeap();
    
    scoville.forEach((num) => minHeap.push(num));

    let count = 0;
    
    while (minHeap.size() > 1) {
        // console.log(minHeap);
        const first = minHeap.pop();
        if (first >= K) return count;

        const second = minHeap.pop();
        const newScoville = first + second * 2;
        minHeap.push(newScoville);

        count++;
    }    
    return minHeap.peek() >= K ? count : -1;
};
