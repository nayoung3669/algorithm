
function solution(participant, completion) {
    for (let i=0; i< completion.length; i++) {
        let idx = participant.findIndex(item => item == completion[i])
        participant.splice(idx,1)
    }
    return String(participant)
}

participant = participant.sort()
completion = completion.sort()

for(let i=0; i<participant.length; i++){
    if(participant[i] !== completion[i])
        return participant[i]
}