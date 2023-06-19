
function solution(x, n) {
    let l = []    
    for (let i = 1; i< n + 1; i ++) {
        l.push(x * i)
    }
    return l
}


//소현
function solution(x, n) {
  return Array(n).fill(x).map((n,i)=>n*(i+1))
}


//정백
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
     answer.push(x * i)
  }
  return answer;
}

// 종화

function solution(x, n) {
    let arr = []
    for (let i=1; i<=n; i++) {
        arr.push(i*x)
    } return arr
}