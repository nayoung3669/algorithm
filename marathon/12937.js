function solution(num) {
    var answer = '';
    num % 2 == 0 ? answer = "Even" : answer = "Odd"
    return answer;
}

// 종화

function solution(num) {
    return num % 2 === 0 ? 'Even' : 'Odd' 
}


//소현
function solution(num) {
    return num % 2 ? "Odd" : "Even"
}
//정백
function returnOddEven(x) {
    const oe = x % 2 ? "Odd" : "Even";
    return console.log(oe)
  }
  returnOddEven(4);
  