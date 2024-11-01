const solution = (n, wires) => {
    // 그래프 생성 (인접 리스트 방식)
    const graph = new Map();
    for (let i = 1; i <= n; i++) {
        graph.set(i, []);
    }
    wires.forEach(([u, v]) => {
        graph.get(u).push(v);
        graph.get(v).push(u);
    });

    // 두 개의 서브그래프 노드 개수를 계산하는 함수
    const countNodes = (start, visited) => {
        const stack = [start];
        visited[start] = true;
        let count = 1;

        while (stack.length) {
            const node = stack.pop();
            for (const neighbor of graph.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                    count++;
                }
            }
        }
        return count;
    };

    // 최소 노드 차이 찾기
    let minDifference = n;
    for (const [u, v] of wires) {
        // 임시로 간선 (u, v) 제거
        graph.get(u).splice(graph.get(u).indexOf(v), 1);
        graph.get(v).splice(graph.get(v).indexOf(u), 1);

        // 노드 개수 차이 계산
        const visited = Array(n + 1).fill(false);
        const count1 = countNodes(u, visited);
        const count2 = n - count1;
        minDifference = Math.min(minDifference, Math.abs(count1 - count2));

        // 간선 (u, v) 복구
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    return minDifference;
};
 
