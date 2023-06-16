function solution(s){
    let cnt_p = 0;
    let cnt_y = 0;
    s = s.toUpperCase()
    for (let i = 0; i<s.length; i++) {
        s[i] === 'P' ? cnt_p +=1 : null
        s[i] === 'Y' ? cnt_y +=1 : null
    }
    return cnt_p === cnt_y;
}