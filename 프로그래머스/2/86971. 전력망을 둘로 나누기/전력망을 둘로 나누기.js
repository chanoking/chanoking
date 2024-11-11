const solution = (n, wires) => {
    const g = Array.from({length: n}, () => []);
    wires.forEach((v) => {
        g[v[0] - 1].push(v[1] - 1);
        g[v[1] - 1].push(v[0] - 1);
    })
    const p = new Array(n).fill(-1);
    const q = [0];
    for(let i = 0; i < q.length; i++){
        const u = q[i];
        for(let v of g[u])if(v !== p[u]){
            p[v] = u;
            q.push(v);
        }
    }
    
    let ans = n;
    let dp = new Array(n).fill(1);
    for(let i = q.length; --i > 0;){
        const v = q[i];
        dp[p[v]] += dp[v];
        let a = Math.abs(n - dp[v] * 2);
        if(a < ans) ans = a;
    }
    return ans;
}