const solution = (dirs) => {
    const control = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    }
    let x = 0;
    let y = 0;
    const map = new Set();
    for(let dir of dirs){
        const [dx, dy] = control[dir];
        const nx = x + dx;
        const ny = y + dy;
        
        if(nx <= 5 && nx >= -5 & ny <= 5 && ny >= -5){
            const path = `${x}${y}${nx}${ny}`;
            const reversed = `${nx}${ny}${x}${y}`;
            map.add(path);
            map.add(reversed);
            x = nx;
            y = ny;
        }
    }
    return map.size / 2;
}