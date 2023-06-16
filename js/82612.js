function solution(price, money, count) {
    let s = 0
    for (let i=1; i<count + 1; i++) {
        s += price*i
    }
    return s - money > 0 ? s - money : 0
}