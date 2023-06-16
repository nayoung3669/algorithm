function solution(x) {
    let arr = String(x).split('').map(Number)
    let sum = 0
    for (let i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    return x % sum === 0
}