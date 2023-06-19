function solution(s){
    let cnt_p = 0;
    let cnt_y = 0;
    for (let i = 0; i<s.length; i++) {
        if (s.toUpperCase()[i] === 'P') cnt_p +=1
        else if(s.toUpperCase()[i] === 'Y') cnt_y +=1
    }
    return cnt_p === cnt_y;
}


// 종화

function solution(s) {
    s = s.toLowerCase()
    let count = 0

    for (let i=0; i<s.length; i++) {
        if(s[i] === 'p') count++
        if(s[i] ==='y') count--
    }
    let answer = count === 0
    return answer
}
//정백
function solution(s){
    let answer = true;
    s = s.toLowerCase()
    let p = s.split("").filter(word => word === "p").length
    let y = s.split("").filter(word => word === "y").length
    return p === y ? answer : answer = false
  }

  //소현
  const solution = s => s.toLowerCase().split('p').length - 1 === s.toLowerCase().split('y').length - 1