function bfs(maps, start, target) {
    const rows = maps.length;
    const cols = maps[0].length;
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1] // 상, 하, 좌, 우
    ];
    const queue = [[...start, 0]]; // [x, y, 거리]
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        if (x === target[0] && y === target[1]) {
            return dist; // 목표 지점 도달
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx >= 0 && nx < rows &&
                ny >= 0 && ny < cols &&
                !visited[nx][ny] && maps[nx][ny] !== "X"
            ) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return -1; // 목표 지점에 도달할 수 없는 경우
}

function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;

    let start, lever, exit;

    // S, L, E 위치 찾기
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] === "S") start = [i, j];
            if (maps[i][j] === "L") lever = [i, j];
            if (maps[i][j] === "E") exit = [i, j];
        }
    }

    // 시작점에서 레버까지 최단 거리
    const startToLever = bfs(maps, start, lever);
    if (startToLever === -1) return -1; // 레버까지 도달 불가

    // 레버에서 출구까지 최단 거리
    const leverToExit = bfs(maps, lever, exit);
    if (leverToExit === -1) return -1; // 출구까지 도달 불가

    return startToLever + leverToExit;
}


