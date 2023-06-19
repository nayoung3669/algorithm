function solution(price, money, count) {
    let s = 0
    for (let i=1; i<count + 1; i++) {
        s += price*i
    }
    return s - money > 0 ? s - money : 0
}

//소현
function solution(price, money, count) {
    num = count*((price + price*count)/2) - money
    return num >= 0 ? num : 0
}
//ㅈㅂ
function solution(price, money, count) {
    let answer = 0;
    for (let i = 1; i <= count; i++) {
      answer += price * i;
    }
    answer = answer - money;
    return answer < 0 ? 0 : answer;
  }
  


// 종화
function solution(price, money, count) {
    sum = 0
    for (let i=0; i<count+1; i++) {
        sum += price*i
    } return sum > money ? (sum-money) : 0
}