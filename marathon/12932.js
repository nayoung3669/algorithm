function solution(n) {
    let arr = String(n).split('').map(Number)
    let l = arr.length
    let result = []
    for (let i=0; i<l; i++) {
        result.push(arr.pop())
    }
    return result
}
