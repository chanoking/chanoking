const solution = (bridge_length, weight, truck_weights) => {
    let time = 0;
    let i = 0;
    let currentWeight = 0;
    while(i < truck_weights.length){
        while(currentWeight + truck_weights[i] <= weight){
            time++;
            currentWeight += truck_weights[i++];
        }
        currentWeight = 0;
        time += bridge_length - 1;
    }
    return time;
    
}