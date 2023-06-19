function solution(arr, divisor) {
    let result = arr.filter(n => n % divisor == 0)
    result.sort(function (a,b) { return a-b })
    return result.length > 0 ? result : [-1]
} 