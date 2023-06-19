function solution(n) {
    return Number(String(n).split('').sort(function(a,b) {return b - a}).join(''))
}

//소현
function solution(n) {
  return Number(String(n).split("").sort((a,b)=>b-a).join(""))
}

function solution (n) {
  let s = n.toString()
  return Number(s.split('').map((a)=>Number(a)).sort((x,y)=>y-x).join(''))
}
//ㅈㅂ
function solution(n) {
  var answer = 0;
  answer  = (n+'')
            .split('')
            .sort((a,b) => b - a)
            .map(val => parseInt(val))
            .join('')
  return Number(answer)
}