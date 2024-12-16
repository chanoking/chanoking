// const solution = (scoville, k) => {
//      const verify = (arr) => {
//         return arr.every(v => v >= k);
//     }
//     const minHeap = scoville.sort((a, b) => a - b); // 최소 힙처럼 사용

//     let count = 0;

//     while (minHeap.length > 1) {
//         if(verify(minHeap)) return count;
//         // 가장 작은 두 개의 요소 꺼내기
//         const first = minHeap.shift();
//         const second = minHeap.shift();

//         // 스코빌 지수 계산
//         const newScoville = first + second * 2;

//         // 계산한 값을 힙에 추가하고 정렬 유지
//         minHeap.unshift(newScoville);
//         // minHeap.sort((a, b) => a - b); // 힙 정렬
//         count++;

//         // 모든 값이 K 이상인지 확인
//         if (minHeap[0] >= k) return count;
//     }

//     // 모든 경우를 섞어도 K를 달성하지 못한 경우
//     return -1;
// };

// const solution = (scoville, K) => {
//     const heap = [];
//     let count = 0;
//     const verify = (arr) => {
//         return arr.every(v => v >= K);
//     }
//     if(verify(scoville)) return count;
//     while(scoville.length > 0){
//         const firstMini = Math.min(...scoville);
//         scoville.splice(scoville.indexOf(firstMini), 1)
//         const secondMini = Math.min(...scoville);
//         scoville.splice(scoville.indexOf(secondMini), 1)
//         const newValue = firstMini + (secondMini * 2);
//         scoville.push(newValue);
//         count++;
//         if(verify(scoville)) return count;
//     }
//     return -1;
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
        const first = minHeap.pop();
        if (first >= K) return count;

        const second = minHeap.pop();
        const newScoville = first + second * 2;
        minHeap.push(newScoville);

        count++;
    }

    return minHeap.peek() >= K ? count : -1;
};
