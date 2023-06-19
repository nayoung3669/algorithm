function solution(s) {
    return (s.length == 4 || s.length == 6) && !isNaN(Number(s)) && !s.includes("e")
}
// 지수 "e" 때문에 테스트 케이스 1개가 통과 안되서.. e를 포함하는 수는 배제했습니다

//정백
function solution(s) {
    let answer = true;
    if (s.length !== 4 && s.length !== 6) {
      return false;
    }
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        return false;
      }
    }
    return answer;
  }

  // 종화

  function solution(s) {
    if(s.length===4||s.length===6) {
        return isNaN(Number(s)) ? false : true
    } else return false
}

//소현
function solution(s) {
    let bool = (s.length === 4 || s.length === 6)
    let num = s.split("").reduce((acc,cur)=>!isNaN(cur)?acc+=cur:acc,"").length
    return (num === s.length) && bool
}