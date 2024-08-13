const solution = (order) => {
    const americano = [];
    const cafelatte = [];
    const menu = {
        americano: 4500,
        cafelatte: 5000
    }
    order.forEach(e => e.includes("anything") || e.includes("americano") ? americano.push(e) :cafelatte.push(e))
    
    return americano.length * menu.americano + cafelatte.length * menu.cafelatte;
}