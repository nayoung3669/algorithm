function solution(a, b) {
    var answer = 0;
    let i=0
    for (a>b? i=b : i=a; a>b? i<a+1 : i<b+1; i++) {
        answer += i
    }
    return answer;
}

// 종화

function solution(a, b) {
    let sum = 0
    if (a < b || a===b) {
        for (i=a; i<b+1; i++) {
            sum +=i
        } 
    } else {
        for (i=b; i<a+1; i++) {
            sum+=i
        }
    } return sum
}

function solution(a, b) {
    let answer = 0
    for (let i = Math.min(a,b); i<=Math.max(a,b); i++)
        answer += i
    return answer
}

//정백
function addAll(a, b) {
    let output = 0;
    for (let i = a; i <= b; i++) {
      output += i
    }
    return output
  }