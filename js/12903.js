function solution(s) {
    var answer = '';
    s.length % 2 !== 0 ? answer = s.charAt(s.length/2) : answer = s.slice(s.length/2-1, s.length/2+1)
    return answer;
}