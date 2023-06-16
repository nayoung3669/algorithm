function solution(s) {
    let result = s.split(' ')
    let final = []
    for (let i=0; i<result.length; i++) {
        let str =''
        for (let j=0; j<result[i].length; j++) {
            j % 2 === 0 ? str += result[i][j].toUpperCase() : str += result[i][j].toLowerCase()
        }
        final.push(str)
    }
    return final.join(" ")
}