function solution(arr, divisor) {
    let result = arr.filter(item => item % divisor == 0)
    result.sort(function (a,b) { return a-b })
    result.length > 0 ? result : result.push(-1)
    return result
}