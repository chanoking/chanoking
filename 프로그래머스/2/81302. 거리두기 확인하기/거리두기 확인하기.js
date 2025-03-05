const solution = (places) => {

    const checkDistancing = (place) => {
        const people = [];

        // Collect all 'P' positions
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(place[i][j] === "P"){
                    people.push([i, j]);
                }
            }
        }

        for(let i = 0; i < people.length; i++){
            for(let j = i + 1; j < people.length; j++){
                const [x1, y1] = people[i];
                const [x2, y2] = people[j];

                const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);

                if (distance > 2) continue;

                if(distance === 1){
                    return 0;
                }else if(distance === 2){
                    if(x1 === x2) {
                        if(place[x1][(y1 + y2) / 2]  !== 'X') return 0;
                    } else if(y1 === y2){
                        if(place[(x1 + x2) / 2][y1] !== 'X') return 0;
                    } else{
                        if(!(place[x1][y2] === 'X' && place[x2][y1] === 'X')){
                            return 0;
                        }
                    }
                }
            }
        }
        return 1;
    }

    return places.map(checkDistancing);
}