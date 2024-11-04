const solution = (n, wires) => {
    const graph = new Map();
    for(let i = 1; i <= n; i++){
        graph.set(i, []);
    }
    wires.forEach(([u, v]) => {
        graph.get(u).push(v);
        graph.get(v).push(u);
    })
    const countNodes = (start, visited) => {
        const stack = [start];
        let count = 1;
        visited[start] = true;
        while(stack.length){
            const node = stack.pop();
            for(let neighbor of graph.get(node)){
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    count++;
                    stack.push(neighbor);
                }
            }
        }
        return count;
    }
    
    let minDifference = n;
    wires.forEach(([u, v]) => {
        graph.get(u).splice(graph.get(u).indexOf(v), 1);
        graph.get(v).splice(graph.get(v).indexOf(u), 1);
        const visited = Array(n + 1).fill(false);
        let count1 = countNodes(u, visited);
        let count2 = n - count1;
        minDifference = Math.min(minDifference, Math.abs(count1 - count2));
        
        graph.get(u).push(v);
        graph.get(v).push(u);
    })
    
    return minDifference;
}