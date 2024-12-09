const solution = (dirs) => {
    // 현재 좌표와 방문 기록 초기화
    let x = 0, y = 0;
    const visited = new Set();

    // 방향별 좌표 변화 정의
    const moves = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0]
    };

    // 이동 범위 제한 (-5 <= x, y <= 5)
    for (let dir of dirs) {
        const [dx, dy] = moves[dir];
        const nx = x + dx;
        const ny = y + dy;

        // 이동이 범위를 벗어나지 않는 경우만 처리
        if (nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5) {
            // 현재 길과 반대 길을 기록
            const path = `${x},${y},${nx},${ny}`;
            const reversePath = `${nx},${ny},${x},${y}`;

            // 방문 기록에 추가
            visited.add(path);
            visited.add(reversePath);

            // 좌표 갱신
            x = nx;
            y = ny;
        }
    }

    // 방문한 고유 길의 개수 반환
    return visited.size / 2;
};
