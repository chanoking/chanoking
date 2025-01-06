function solution(m, n, board) {
    let totalDisappeared = 0;
    const splited = board.map(v => v.split(''));
    // Function to find 2x2 matching blocks
    function findMatches() {
        let marked = Array.from({ length: m }, () => Array(n).fill(false));
        let foundMatch = false;

        for (let r = 0; r < m - 1; r++) {
            for (let c = 0; c < n - 1; c++) {
                let char = splited[r][c];
                if (char && char === splited[r][c + 1] && char === splited[r + 1][c] && char === splited[r + 1][c + 1]) {
                    marked[r][c] = marked[r][c + 1] = marked[r + 1][c] = marked[r + 1][c + 1] = true;
                    foundMatch = true;
                }
            }
        }
        return { marked, foundMatch };
    }

    // Function to remove marked blocks and count disappeared characters
    function removeBlocks(marked) {
        let count = 0;
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (marked[r][c]) {
                    splited[r][c] = null; // Mark block as removed
                    count++;
                }
            }
        }
        return count;
    }

    // Function to drop blocks down like in a Tetris game
    function dropBlocks() {
        for (let c = 0; c < n; c++) {
            let emptyRow = m - 1;
            for (let r = m - 1; r >= 0; r--) {
                if (splited[r][c] !== null) {
                    splited[emptyRow--][c] = splited[r][c];
                }
            }
            // Fill remaining rows with null
            for (let r = emptyRow; r >= 0; r--) {
                splited[r][c] = null;
            }
        }
    }

    while (true) {
        const { marked, foundMatch } = findMatches();
        if (!foundMatch) break; // Stop if no more matches are found
        
        totalDisappeared += removeBlocks(marked); // Count removed blocks
        dropBlocks(); // Drop the remaining blocks
    }

    return totalDisappeared;
}
