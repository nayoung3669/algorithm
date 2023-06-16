function solution(numbers) {
    s = 0
    for (let i=0; i<10; i++) {
        numbers.includes(i) === false ? s += i : null
    }
    return s
}