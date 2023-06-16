function solution(numbers) {
    s = 0
    for (let i=0; i<10; i++) {
        numbers.includes(i) === false ? s += i : null
    }
    return s
}



//소현
function solution(numbers) {
    let answer = 0
    for(let i=1; i<=9; i++){
        if(!numbers.includes(i)) answer += i
    }
    return answer
}

// 종화
function solution(numbers) {
    arr = [1,2,3,4,5,6,7,8,9]
    return arr.reduce((a, b)=>a+b) - numbers.reduce((a,b)=>a+b)
}
//정백
function notIncludes(x) {
    let output = 0;
    for (let i = 0; i <= 9; i++) {
      let notInclude = x.includes(i);
      if (!notInclude) {
        output += i;
      }
    }
    return output;  
  }


  