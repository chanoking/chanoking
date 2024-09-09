// const solution = (id_list, reports,k) => {
//     const result = [];
//     const user = new Set()
//     id_list.forEach((id) => user[id]);
//     let receiveCount = 0;
//     const duplicateDelete = (obj, key, newV) => {
//             const set = [...new Set([...obj[key], newV])]
//             return set;
//         }
//     reports.forEach((report) => {
//         const [opponent, receiver] = report.split(' ');
        
//         user[opponent] = (duplicateDelete(user, opponent, receiver));
        
    
//     });
    
//     return user;
// }

// const solution = (id_list, reports, k) => {
//     const user = {}; // 객체로 변경
//     const countingUser = {}
//     id_list.forEach((id) => user[id] = 0); // 각 유저 id에 빈 배열 할당

//     // 고유한 신고 정보를 저장하기 위해 중복을 제거하는 함수
//     const duplicateDelete = (obj, key, newV) => {
//         if (!obj[key]) obj[key] = []; // key가 없으면 빈 배열로 초기화
//         const set = [...new Set([...obj[key], newV])];
//         return set;
//     };

//     // reports 배열에서 신고 정보를 처리
//     reports.forEach((report) => {
//         const [reporter, opponent] = report.split(' '); // 신고한 사람, 신고받은 사람
//         // user[reporter] = duplicateDelete(user, reporter, opponent); // 신고받은 사람의 배열에 신고한 사람 추가
//         countingUser[opponent] += 1;
//         if(countingUser[opponent] >= k) user[reporter] = countingUser[opponent];
//     });

//     return Object.values(user)
// };

const solution = (id_list, reports, k) => {
    const user = {}; // 각 유저가 신고된 횟수를 저장
    const countingUser = {}; // 각 유저가 신고한 목록을 저장
    const reportCount = {}; // 신고받은 사람의 신고 횟수를 저장
    
    // 유저 초기화
    id_list.forEach(id => {
        user[id] = 0; // 최종 메일을 받은 횟수
        reportCount[id] = 0; // 신고 횟수
    });

    // reports 배열에서 중복 신고를 방지하면서 신고 처리
    reports.forEach((report) => {
        const [reporter, opponent] = report.split(' '); // 신고한 사람, 신고받은 사람
        
        // 신고한 사람이 동일한 사람을 중복으로 신고했는지 확인
        if (!countingUser[reporter]) {
            countingUser[reporter] = new Set(); // 신고한 상대방 저장용 Set
        }

        // 처음 신고하는 경우만 처리
        if (!countingUser[reporter].has(opponent)) {
            countingUser[reporter].add(opponent); // 신고한 사람 기록
            reportCount[opponent] += 1; // 신고받은 사람의 신고 횟수 증가
        }
    });

    // 신고받은 횟수가 k번 이상인 유저에 대해 처리
    id_list.forEach((opponent) => {
        if (reportCount[opponent] >= k) {
            // 신고받은 유저가 k번 이상 신고되었으므로, 해당 유저를 신고한 모든 사람에게 메일 발송 처리
            id_list.forEach((reporter) => {
                if (countingUser[reporter] && countingUser[reporter].has(opponent)) {
                    user[reporter] += 1; // 메일을 받는 횟수 증가
                }
            });
        }
    });

    return Object.values(user);
};

