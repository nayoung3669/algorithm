function solution(x, n) {
    let l = []    
    for (let i = 1; i< n + 1; i ++) {
        l.push(x * i)
    }
    return l
}