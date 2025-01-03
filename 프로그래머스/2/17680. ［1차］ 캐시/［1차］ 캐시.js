// const solution = (cacheSize, cities) => {
//     let lowercase = cities.map(city => city.toLowerCase());
//     let cache = new Set();
//     let time = 0;
//     for(let i = 0; i < cities.length; i++){
//         const city = lowercase[i];
//         if(cache.has(city)){
//             time++;
//         }else{
//             cache.add(city);
//             time += 5;
//             if(cache.size > cacheSize){
//                 let copyCache = [...cache];
//                 copyCache.shift();
//                 cache = new Set(copyCache);
//             }
//         }
//     }
//     return time;
// }

const solution = (cacheSize, cities) => {
    if (cacheSize === 0) return cities.length * 5;  // Handle cache size 0 case

    let lowercase = cities.map(city => city.toLowerCase());
    let cache = [];
    let time = 0;

    for (let city of lowercase) {
        const index = cache.indexOf(city);
        if (index !== -1) {
            // Cache hit: Move city to the end to mark it as recently used
            cache.splice(index, 1);
            cache.push(city);
            time += 1;
        } else {
            // Cache miss: Add city to the cache
            cache.push(city);
            time += 5;
            if (cache.length > cacheSize) {
                // Remove the least recently used (first element)
                cache.shift();
            }
        }
    }

    return time;
};
