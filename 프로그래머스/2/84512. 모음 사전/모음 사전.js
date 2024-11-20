const solution = (word) => {
    const list = ["A", "E", "I", "O", "U"];
    const dictionary = [];
    const generateWords = (current) => {
        if(current.length > 5) return;
        dictionary.push(current);
        
        for(let char of list){
            generateWords(current + char);
        }
    }
    
    generateWords("");
    
    return dictionary.indexOf(word);
}