function solution(a, b) {
    let sum = 0
    for (let i=0;i<a.length ; i ++) {
        sum +=a[i]*b[i]
    }
    return sum
}

// 종화

function solution(a, b) {
    let sum = 0
    for (let i=0; i<a.length; i++) {
        sum += a[i]*b[i]
    } return sum
}
//정백
function solution(a, b) {
    let answer = 0;
    answer = a
            .map((val,i) => val * b[i])
            .reduce((acc, cur)=> acc + cur,0)
    return answer;
  }