const solution = (n, wires) => {
    const g = Array.from({length: n}, () => []);
    const p = new Array(n).fill(-1);
    const q = [0];
    for(let e of wires){
        g[e[1] - 1].push(e[0] - 1);
        g[e[0] - 1].push(e[1] - 1);
    }
    for(let i = 0; i < q.length; i++){
        const u = q[i];
        for(let v of g[u])if(v !== p[u]){
            p[v] = u;
            q.push(v);
        }
    }
    
    let ans = n;
    const dp = Array(n).fill(1);
    for(let i = q.length; --i > 0;){
        const v = q[i];
        dp[p[v]] += dp[v];
        const a = Math.abs(n - dp[v] * 2)
        if(ans > a) ans = a;
    }
    return ans;
}