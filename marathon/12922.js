function solution(n) {
    let i=1
    let myStr = ''
    while (i < n + 1) {
        i % 2 !== 0 ? myStr += "수" : myStr += "박" 
        i++
    }
    return myStr
}