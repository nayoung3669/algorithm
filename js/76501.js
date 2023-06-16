function solution(absolutes, signs) {
    var cnt = 0;
    for (let i=0;i<absolutes.length; i++) {
        signs[i] === false ? cnt -=absolutes[i] : cnt +=absolutes[i]
    }
    return cnt
}