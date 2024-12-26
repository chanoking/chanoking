// const solution = (bridge_length, weight, truck_weights) => {
//     let time = 0;
//     let i = 0;
//     let currentWeight = 0;
//     while(i < truck_weights.length){
//         while(currentWeight + truck_weights[i] <= weight){
//             time++;
//             currentWeight += truck_weights[i++];
//         }
//         time += bridge_length - 1;
//         currentWeight = 0;
//     }
//     return time + 1;
    
// }

// const solution = (bridge_length, weight, truck_weights) => {
//     let time = 0;
//     let bridge = Array(bridge_length).fill(0); // Array representing trucks on the bridge
//     let currentWeight = 0;
    
//     while(truck_weights.length > 0 || currentWeight > 0) {
//         // Move all trucks forward on the bridge
//         currentWeight -= bridge.shift();
        
//         // Check if the next truck can enter the bridge
//         if (truck_weights.length > 0 && currentWeight + truck_weights[0] <= weight) {
//             let truck = truck_weights.shift();
//             bridge.push(truck);
//             currentWeight += truck;
//         } else {
//             bridge.push(0); // Add a placeholder if no truck can move forward
//         }

//         time++;
//     }
    
//     return time;
// };
const solution = (bridge_length, weight, truck_weights) => {
    let time = 0;
    const bridge = Array(bridge_length).fill(0);
    let currentWeight = 0;
    while(truck_weights.length > 0 || currentWeight > 0){
        currentWeight -= bridge.shift();
        if(truck_weights.length > 0 && currentWeight + truck_weights[0] <= weight){
            let truck = truck_weights.shift();
            bridge.push(truck);
            currentWeight += truck;
        }else{
            bridge.push(0)
        }
        time++;
    }
    return time;
}















