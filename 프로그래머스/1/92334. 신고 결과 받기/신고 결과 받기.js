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

// const solution = (id_list, reports, k) => {
//     const user = {}; // 각 유저가 신고된 횟수를 저장
//     const countingUser = {}; // 각 유저가 신고한 목록을 저장
//     const reportCount = {}; // 신고받은 사람의 신고 횟수를 저장
    
//     // 유저 초기화
//     id_list.forEach(id => {
//         user[id] = 0; // 최종 메일을 받은 횟수
//         reportCount[id] = 0; // 신고 횟수
//     });

//     // reports 배열에서 중복 신고를 방지하면서 신고 처리
//     reports.forEach((report) => {
//         const [reporter, opponent] = report.split(' '); // 신고한 사람, 신고받은 사람
        
//         // 신고한 사람이 동일한 사람을 중복으로 신고했는지 확인
//         if (!countingUser[reporter]) {
//             countingUser[reporter] = new Set(); // 신고한 상대방 저장용 Set
//         }

//         // 처음 신고하는 경우만 처리
//         if (!countingUser[reporter].has(opponent)) {
//             countingUser[reporter].add(opponent); // 신고한 사람 기록
//             reportCount[opponent] += 1; // 신고받은 사람의 신고 횟수 증가
//         }
//     });

//     // 신고받은 횟수가 k번 이상인 유저에 대해 처리
//     id_list.forEach((opponent) => {
//         if (reportCount[opponent] >= k) {
//             // 신고받은 유저가 k번 이상 신고되었으므로, 해당 유저를 신고한 모든 사람에게 메일 발송 처리
//             id_list.forEach((reporter) => {
//                 if (countingUser[reporter] && countingUser[reporter].has(opponent)) {
//                     user[reporter] += 1; // 메일을 받는 횟수 증가
//                 }
//             });
//         }
//     });

//     return Object.values(user);
// };


// const solution = (id_list, reports, k) => {
//     const reportCount = {};
//     const user = {};
//     const list = {};
    
//     id_list.forEach((id) => {
//         user[id] = 0;
//         reportCount[id] = 0;
//     });
    
//     reports.forEach((report) => {
//         const [reporter, opponent] = report.split(' ');
        
//         if(!list[reporter]){
//             list[reporter] = new Set();
//         };
        
//         if(!list[reporter].has(opponent)){
//             list[reporter].add(opponent);
//             reportCount[opponent] += 1;
//         };
//     })
        
//         id_list.forEach((report) => {
//             if(reportCount[report] >= k){
//                 id_list.forEach((opponent) => {
//                     if(list[opponent] && list[opponent].has(report)){
//                         user[opponent] += 1
//                     }
//                 })
//             }
//     })
    
//     return Object.values(user);
// }

// const solution = (id_list, reports, k) => {
//     const mailCount = {};
//     const reportCount = {};
//     const reporters = {};
    
//     id_list.forEach((id) => {
//         reportCount[id] = 0;
//         mailCount[id] = 0;
//     });
    
//     reports.forEach((report) => {
//         const [reporter, opponent] = report.split(' ');
        
//         if(!reporters[reporter]){
//             reporters[reporter] = new Set();
//         };
        
//         if(!reporters[reporter].has(opponent)){
//             reporters[reporter].add(opponent);
//             reportCount[opponent] += 1; 
//         };
        
//     });
    
//     id_list.forEach((opponent) => {
//         if(reportCount[opponent] >= k){
//             id_list.forEach((reporter) => {
//                 if(reporters[reporter] && reporters[reporter].has(opponent)){
//                     mailCount[reporter] += 1;
//                 };
//             });
//         };
//     });
    
//     return Object.values(mailCount);
// };

// const solution = (user_id, reports, k) => {
//     const mailToUser = {};
//     const reportCount = {};
//     const reporters = {};
    
//     user_id.forEach((user) => {
//         mailToUser[user] = 0;
//         reportCount[user] = 0;
//     });
    
//     reports.forEach((report) => {
//         const [reporter, opponent] = report.split(' ');
        
//         if(!reporters[reporter]){
//             reporters[reporter] = new Set();
//         };
        
//         if(!reporters[reporter].has(opponent)){
//             reporters[reporter].add(opponent);
//             reportCount[opponent] += 1;
//         };
//     });
    
//     user_id.forEach((opponent) => {
//         if(reportCount[opponent] >= k){
//             user_id.forEach((reporter) => {
//                 if(reporters[reporter] && reporters[reporter].has(opponent)){
//                     mailToUser[reporter] += 1;
//                 };
//             });
//         };
//     });
    
//     return Object.values(mailToUser);
// }

// const solution = (id_list, reports, k) => {
//     const mailCount = {}; // 각 유저가 받을 메일 수
//     const reporters = {}; // 각 유저가 신고한 목록
//     const reportedCount = {}; // 각 유저가 신고당한 횟수
    
//     // 유저 초기화
//     id_list.forEach(id => {
//         mailCount[id] = 0; // 최종 메일을 받은 횟수
//         reportedCount[id] = 0; // 신고당한 횟수
//     });

//     // reports 배열에서 중복 신고를 방지하면서 신고 처리
//     reports.forEach((report) => {
//         const [reporter, opponent] = report.split(' '); // 신고한 사람, 신고받은 사람
        
//         // 신고한 사람이 동일한 사람을 중복으로 신고했는지 확인
//         if (!reporters[reporter]) {
//             reporters[reporter] = new Set(); // 신고한 상대방 저장용 Set
//         }

//         // 처음 신고하는 경우만 처리
//         // if (!reporters[reporter].has(opponent)) {
//             reporters[reporter].add(opponent); // 신고한 사람 기록
//             reportedCount[opponent] += 1; // 신고받은 사람의 신고 횟수 증가
//         // }
//     });

//     // 신고받은 횟수가 k번 이상인 유저에 대해 처리
//     id_list.forEach((opponent) => {
//         if (reportedCount[opponent] >= k) {
//             // 신고받은 유저가 k번 이상 신고되었으므로, 해당 유저를 신고한 모든 사람에게 메일 발송 처리
//             id_list.forEach((reporter) => {
//                 if (reporters[reporter] && reporters[reporter].has(opponent)) {
//                     mailCount[reporter] += 1; // 메일을 받는 횟수 증가
//                 }
//             });
//         }
//     });

//     return Object.values(mailCount); // 메일 받은 횟수를 배열로 반환
// };


// const solution = (id_list, reports, k) => {
//     const mailToUser = {};
//     const reportCount = {};
//     const reporters = {};
    
//     id_list.forEach((id) => {
//         mailToUser[id] = 0;
//         reportCount[id] = 0;
//     });
    
//     reports.forEach((report) => {
//         const [reporter, opponent] = report.split(' ');
        
//         if(!reporters[reporter]){
//             reporters[reporter] = new Set();
//         };
        
//         if(!reporters[reporter].has(opponent)){
//             reporters[reporter].add(opponent);
//             reportCount[opponent] += 1;
//         };
//     });
    
//     id_list.forEach((opponent) => {
//         if(reportCount[opponent] >= k){
//             id_list.forEach((reporter) => {
//                 if(reporters[reporter] && reporters[reporter].has(opponent)){
//                     mailToUser[reporter] += 1;
//                 };
//             });
//         };
//     });
    
//     return Object.values(mailToUser);
// };

const solution = (id_list, report, k) => {
    const reports = [...new Set(report)].map((v) =>{return v.split(' ')});
    
    const counts = new Map();
    
    for(const bad of reports){
        counts.set(bad[1], counts.get(bad[1])+1||1);
    };
    
    const good = new Map();
    
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1);
        };
    };
    
    let answer = id_list.map(a => good.get(a)||0);
    
    return answer;
    
    
    
}























