function solution(N, roads, K) {
    // Step 1: Build an adjacency list
    const graph = Array.from({ length: N + 1 }, () => []); // Towns are 1-indexed
    for (const [town1, town2, time] of roads) {
        graph[town1].push([town2, time]);
        graph[town2].push([town1, time]); // Since the roads are bidirectional
    }

    // Step 2: Use Dijkstra's algorithm to find shortest times
    const minTime = Array(N + 1).fill(Infinity);
    minTime[1] = 0; // Starting from town 1
    const priorityQueue = [[1, 0]]; // [current town, time so far]

    while (priorityQueue.length > 0) {
        const [currentTown, currentTime] = priorityQueue.shift();

        for (const [nextTown, travelTime] of graph[currentTown]) {
            const newTime = currentTime + travelTime;
            if (newTime < minTime[nextTown]) {
                minTime[nextTown] = newTime;
                priorityQueue.push([nextTown, newTime]);
            }
        }

        // Keep the queue sorted by time (for Dijkstra's greedy approach)
        priorityQueue.sort((a, b) => a[1] - b[1]);
    }

    // Step 3: Count reachable towns within time K
    return minTime.filter(time => time <= K).length;
}
