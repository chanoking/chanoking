// const solution = (fees, records) => {
//     const calculation = (standardPrice, accumulated, standard, unit, unitPrice) => {
//         return standard >= accumulated ? standardPrice : standardPrice + Math.ceil((accumulated - standard) / unit) * unitPrice;
//     }
//     const [standard, standardPrice, unit, unitPrice] = fees;
//     const condition = 23 * 60 + 59;
//     const tracking = {};
//     const sub = {};
//     const result = [];
//     const another = new Set();
//     records.forEach((record) => {
//         const [time, num, io] = record.split(' ');
//         const [hh, mm] = time.split(":").map(a => Number(a));
//         const intoM = hh * 60 + mm;
//         if(!sub[num]) sub[num] = {"IN" : 0, "OUT" : 0};
//         sub[num][io]++;
//         if(io === "IN") tracking[num] = (tracking[num] || 0) - intoM;
//         else tracking[num] += intoM
//         another.add(num);
//     })
//     const another2 = [...another].sort();
//     another2.forEach((num) => {
//         if(sub[num]["IN"] !== sub[num]["OUT"]) tracking[num] += condition;
//         const fee = calculation(standardPrice, tracking[num], standard, unit, unitPrice);
//         result.push(fee);
//     })
    
//     return result;
// }

const solution = (fees, records) => {
    const history = {};
    const box = [];
    records.forEach((record) => {
        const [t, n, w] = record.split(' ');
        const [h, m] = t.split(':').map(a => Number(a));
        const intoM = h * 60 + m;
        if(!history[n]) history[n] = 0;
        if(w === "IN"){
            history[n] += (1439 - intoM);
        }else{
            history[n] -= (1439 - intoM);
        }
    })
    
    for(let [n,t] of Object.entries(history)){
        if(t <= fees[0]) t = fees[1];
        else t = fees[1] + Math.ceil((t - fees[0]) / fees[2]) * fees[3];
        box.push([n, t]);
    }
    
    return box.sort((a, b) => a[0] - b[0]).map(a => a[1])
}