function solution(n) {
    let sum = 0
    for (let i=0; i<String(n).split('').map(Number).length; i++) {
        sum += String(n).split('').map(Number)[i] 
    }
    return sum
}