const solution = (w, h) => {
    const gcd = (n1, n2) => {
        if(n1>=n2){
            for(let i = n2; i > 1; i--){
                if(n1 % i === 0 && n2 % i === 0){
                    return i;
                }
            }
        }else{
            for(let i = n1; i > 1; i--){
                if(n1 % i === 0 && n2 % i === 0){
                    return i;
                }
            }
        }
        return 1;
    }
    
    return w * h - ((w + h) - gcd(w, h));
}