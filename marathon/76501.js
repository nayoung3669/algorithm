function solution(absolutes, signs) {
    var cnt = 0;
    for (let i=0;i<absolutes.length; i++) {
        signs[i] === false ? cnt -=absolutes[i] : cnt +=absolutes[i]
    }
    return cnt
}

//소현
const solution = (abs, sig) => abs.reduce((acc,cur,i)=>sig[i]?acc+=cur:acc-=cur,0)


// 종화
function solution(absolutes, signs) {
    let sum = 0;
    for (i=0; i<absolutes.length; i++) {
        signs[i] ? sum +=absolutes[i] : sum -=absolutes[i]
    } return sum
}
//정백
function add(ab, si) {
    let output = 0;
    for (let i = 0; i < ab.length; i++) {
      if(si[i]) {
        output += ab[i]
      } else {
        output -= ab[i]
      }
    }
    return output
  }