const solution = (fees, records) => {
    const calculation = (standardPrice, accumulated, standard, unit, unitPrice) => {
        return standard >= accumulated ? standardPrice : standardPrice + Math.ceil((accumulated - standard) / unit) * unitPrice;
    }
    const [standard, standardPrice, unit, unitPrice] = fees;
    const condition = 23 * 60 + 59;
    const tracking = {};
    const sub = {};
    const result = [];
    const another = new Set();
    records.forEach((record) => {
        const [time, num, io] = record.split(' ');
        const [hh, mm] = time.split(":").map(a => Number(a));
        const intoM = hh * 60 + mm;
        if(!sub[num]) sub[num] = {"IN" : 0, "OUT" : 0};
        sub[num][io]++;
        if(io === "IN") tracking[num] = (tracking[num] || 0) - intoM;
        else tracking[num] += intoM
        another.add(num);
    })
    const another2 = [...another].sort();
    another2.forEach((num) => {
        if(sub[num]["IN"] !== sub[num]["OUT"]) tracking[num] += condition;
        const fee = calculation(standardPrice, tracking[num], standard, unit, unitPrice);
        result.push(fee);
    })
    
    return result;
}