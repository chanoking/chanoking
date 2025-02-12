const solution = (r1, r2) => {
    let answer = 0;
    for(let x = 1; x <= r2; x++){
        const maxY = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
        let minY;
        if(x < r1){
            minY = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2));
        }else{
            minY = 0;
        }
        answer += (maxY - minY + 1);
    }
    
    return answer * 4;
}