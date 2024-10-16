// const solution = (fees, records) => {
//     const result = [];
//     const [standard, standardPrice, unit, unitPrice] = fees;
//     const ifNotOut = 23 * 60 + 59;
//     const cal = (standardPrice, accumulatedTime, standard, unit, unitPrice) => {
//         return accumulatedTime <= standard ? standardPrice : standardPrice + Math.ceil((accumulatedTime - standard) / 10) * unitPrice;
//     }
//     const recording = {};
//     const subRecording = {};
//     const another = new Set();
//     records.forEach((record) => {
//         const [time, number, io] = record.split(' ');
//         const [hh, mm] = time.split(':').map(a => Number(a));
//         const intoM = hh * 60 + mm;
//         if (!subRecording[number]) {
//         subRecording[number] = { IN: 0, OUT: 0 };
//         }
//         subRecording[number] = {io : (subRecording[number][io] || 0 ) + 1};
//         if(io === 'IN'){
//             recording[number] = (recording[number] || 0) - intoM;
//         }else{
//             recording[number] += intoM;
//         }
//         another.add(number)
//     })
//     const another2 = [...another];
//     another2.forEach((a) => {
//         if(subRecording[a]["IN"] !== subRecording[a]["OUT"]) recording[a] += ifNotOut;
//     })
    
//     for(let record in recording){
//         const value = cal(standardPrice, recording[record], standard, unit, unitPrice);
//         result.push(value)
//     }
//     return result.sort((a,b) => b - a);
// }

const solution = (fees, records) => {
    const result = [];
    const [standard, standardPrice, unit, unitPrice] = fees;
    const ifNotOut = 23 * 60 + 59; // 출차 기록 없는 경우 23:59로 간주

    // 요금 계산 함수
    const cal = (standardPrice, accumulatedTime, standard, unit, unitPrice) => {
        if (accumulatedTime <= standard) {
            return standardPrice;
        } else {
            return standardPrice + Math.ceil((accumulatedTime - standard) / unit) * unitPrice;
        }
    }

    const recording = {}; // 누적 시간 기록
    const subRecording = {}; // 입출차 횟수 기록
    const another = new Set(); // 차량 번호 기록

    // 기록 처리
    records.forEach((record) => {
        const [time, number, io] = record.split(' ');
        const [hh, mm] = time.split(':').map(a => Number(a));
        const intoM = hh * 60 + mm; // 시간을 분 단위로 변환

        // subRecording 초기화 체크
        if (!subRecording[number]) {
            subRecording[number] = { IN: 0, OUT: 0 };
        }

        // 입출차 횟수 기록
        subRecording[number][io] += 1;

        // 시간 계산
        if (io === 'IN') {
            recording[number] = (recording[number] || 0) - intoM; // 입차 시 시간을 뺌
        } else {
            recording[number] += intoM; // 출차 시 시간을 더함
        }

        another.add(number); // 차량 번호 저장
    });

    // 출차 기록이 없는 차량 처리
    const another2 = [...another].sort(); // 차량 번호를 정렬 (번호 순)
    another2.forEach((number) => {
        if (subRecording[number]["IN"] !== subRecording[number]["OUT"]) {
            recording[number] += ifNotOut; // 출차 기록이 없으면 23:59에 출차한 것으로 처리
        }
    });

    // 요금 계산 및 결과 저장
    another2.forEach((number) => {
        const accumulatedTime = recording[number]; // 누적된 시간
        const fee = cal(standardPrice, accumulatedTime, standard, unit, unitPrice); // 요금 계산
        result.push([number, fee]); // 차량 번호와 요금 저장
    });

    // 차량 번호 기준으로 오름차순 정렬 후 요금만 반환
    return result.sort((a, b) => a[0] - b[0]).map(r => r[1]);
};
