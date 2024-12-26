// const solution = (phone_book) => {
//     let min = Infinity;
//     for(let phone of phone_book){
//         min = Math.min(min, phone.length)
//     }
//     for(let i = 0; i < phone_book.length; i++){
//         if(min === phone_book[i].length){
//             for(let j = i + 1; j < phone_book.length; j++){
//                 if(phone_book[j].startsWith(phone_book[i])){
//                     return false;
//                 }
//             }
//             }
//         }
//     return true;
// }


const solution = (phone_book) => {
    const sorted = phone_book.sort();
    for(let i = 0; i < phone_book.length - 1; i++){
        if(sorted[i + 1].startsWith(sorted[i])){
            return false;
        }
    }
    
    return true;
}















