// const solution = (n, arr1, arr2) => {
    
//     let output = new Array(n).fill('');
    
//     let one = arr1.map((v) => {
//         let num = v;
//         let binary = ''
//         if(v === 0){
//             return 0;
//         }
        
//         while(num >= 1){
//             binary = num % 2 + binary;
//             num = Math.floor(num / 2);
//         }
        
//         return binary;
//     })
    
//     let mapOne = one.map((v) => {
//         return v.replaceAll('1',"#").replaceAll('0'," ")
//     })
    
//     let two = arr2.map((v) => {
//         let num = v;
//         let binary = '';
        
//         if(num === 0){
//             return 0;
//         }
        
//         while(num >= 1){
//             binary = num % 2 + binary;
//             num = Math.floor(num/2);
//         }
        
//         return binary;
//     })
    
//     let mapTwo = two.map((v) => {
//         return v.replaceAll('1','#').replaceAll('0'," ");
//     })
//     let answer = [];
    
//     for(let i = 0; i < n; i++){
//         let char = ''
//         for(let j = 0; j < n; j++){
//             if(mapOne[i][j] === '#'){
//                 char += '#'
//             }
            
//             if(mapOne[i][j] = " " && mapOne[i][j] === mapTwo[i][j]){
//                 char += " "
//             }
//         }
//         answer.push(char);
//     }
    
//     return answer;
// }

// const solution = (n, arr1, arr2) => {
//     // 이진수로 변환하고 길이를 n으로 맞추는 함수
//     const toBinaryString = (num) => {
//         let binary = num.toString(2); // 이진수 문자열로 변환
//         return binary.padStart(n, '0'); // 길이를 n으로 맞추기 위해 앞에 0을 추가
//     };

//     // 두 배열의 각 원소를 이진수 문자열로 변환
//     let binaryArr1 = arr1.map(toBinaryString);
//     let binaryArr2 = arr2.map(toBinaryString);

//     // 이진수 문자열을 '#'과 ' '으로 변환
//     let mapOne = binaryArr1.map(binary => binary.replace(/1/g, '#').replace(/0/g, ' '));
//     let mapTwo = binaryArr2.map(binary => binary.replace(/1/g, '#').replace(/0/g, ' '));

//     // 두 배열을 비교하여 결과를 생성
//     let answer = [];
//     for (let i = 0; i < n; i++) {
//         let char = '';
//         for (let j = 0; j < n; j++) {
//             // 두 배열의 해당 위치가 모두 '#'이면 '#'을 추가
//             if (mapOne[i][j] === '#' || mapTwo[i][j] === '#') {
//                 char += '#';
//             } else {
//                 // 둘 다 공백이면 공백 추가
//                 char += ' ';
//             }
//         }
//         answer.push(char);
//     }

//     return answer;
// };



// const solution = (n, arr1, arr2) => {
//     const toBinaryString = (num) => {
//         const binary = num.toString(2);
//         return binary.padStart(n,0);
//     }
    
//     let arr1Binary = arr1.map((v) => toBinaryString(v));
//     let arr2Binary = arr2.map((v) => toBinaryString(v));
    
//     let mapOne = arr1Binary.map((v) => v.replace(/0/g,' ').replace(/1/g, "#"))
//     let mapTwo = arr2Binary.map((v) => v.replace(/0/g,' ').replace(/1/g, "#"))
    
//     let answer = [];
    
//     for(let i = 0; i < n; i++){
//         let char = '';
//         for(let j = 0; j < n; j++){
//             if(mapOne[i][j] === '#' || mapTwo[i][j] === '#'){
//                 char += '#';
//             }else{
//                 char += ' '
//             }
//         }
//         answer.push(char)
//     }
    
//     return answer;
// }


// function solution(n, arr1, arr2) {
//     return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }

// const addZero = (n, s) => {
//     return '0'.repeat(n - s.length) + s;
// }





// const solution = (n, arr1, arr2) => {
    
//     return arr1.map((v,i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }
    
//     const addZero = (n,s) => {
//         return '0'.repeat(n - s.length) + s
//     }








const solution = (n, arr1, arr2) => {
    return arr1.map((v,i) => addZero(n,(v|arr2[i]).toString(2)).replace(/0|1/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}







































