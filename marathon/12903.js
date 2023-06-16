function solution(s) {
    var answer = '';
    s.length % 2 !== 0 ? answer = s.charAt(s.length/2) : answer = s.slice(s.length/2-1, s.length/2+1)
    return answer;
}

//소현
function solution(s) {
    num = ~~(s.length/2)
    return s.length % 2 ? s.substr(num,1) : s.substr(num-1,2)
}

//종화
function solution(s) {
    if(s.length % 2 === 0) {
        return s[(s.length/2)-1] + s[s.length/2]
    } else return s[Math.floor(s.length/2)]
}
//정백
function stringReturn(str) {
    let wordArr = str.split("")
    let len = wordArr.length
    if (len % 2 === 0) {
      return wordArr.slice(len / 2 - 1, len / 2 + 1).join("");
    } else {
      return wordArr[Math.floor(len / 2)]
    } 
  }