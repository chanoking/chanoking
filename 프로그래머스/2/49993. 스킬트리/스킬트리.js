// const solution = (skill, skill_trees) => {
//     let whether = true;
//     let count = 0;
//         for(let sk of skill_trees){
//             whether = true;
//             const arr = [];
//             for(let s of skill) {
//                 const i = sk.indexOf(s);
//                 if(arr.length === 0){
//                     arr.push(i)
//                 }else{
//                     if(arr.pop() > i){
//                         arr.push(i)
//                         whether = false;
//                         break;
//                     }
//                 }
//             }
//             if(whether === true) count++;
//         }
//     return count;
// }

const solution = (skill, skill_trees) => {
    let count = 0;
    let switching;
    for(let skills of skill_trees){
        const reversed = skill.split('').reverse();
        switching = true;
        const reverse = skills.split('').reverse();
        const deleted = reverse.filter(v => reversed.includes(v));
        for(let i = 0; i < deleted.length;){
            if(reversed.pop() !== deleted.pop()){
                switching = false;
                break;
            }
        }
        if(switching === true) count++;
    }
        return count;
}