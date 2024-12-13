const solution = (numbers) => {
    const digits = numbers.split('');
    const result = new Set();
    const isPrime = (num) => {
        if(num <= 1) return false;
        
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    const search = (path, used) => {
        if(path.length > 0){
            const num = Number(path.join(''));
            if(isPrime(num)) result.add(num);
        }
        for(let i = 0; i < digits.length; i++){
            if(!used[i]){
                used[i] = true;
                search([...path, digits[i]], used);
                used[i] = false;
            }
        }
    }
    search([], Array(digits.length).fill(false));
    return result.size;
}