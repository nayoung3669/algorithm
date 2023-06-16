function solution(arr) {
    let result = 0
    for (let i=0; i<arr.length; i++) {
        result +=arr[i]
    }
    return result/arr.length
}

//소현
function solution(arr) {
    return arr.reduce((acc,cur)=>acc+=cur,0)/arr.length
}

//종화
function solution(arr) {
    return arr.reduce((a,b)=>a+b)/arr.length
}

//정백
const average = function (x) {
    let sum = 0
    for (let i = 0; i < x.length; i++) {
      sum += x[i]
    }
    let ave = sum / x.length
    return ave
  }