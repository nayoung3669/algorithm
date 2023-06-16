function solution(a, b) {
    var answer = 0;
    let i=0
    for (a>b? i=b : i=a; a>b? i<a+1 : i<b+1; i++) {
        answer += i
    }
    return answer;
}