function solution(phone_number) {
    let digits = phone_number.split('').map(Number).splice(-4).join('')
    return "*".repeat(phone_number.length - 4).concat(digits)
}
//정백
function solution(x) {
    const len = x.length;
    const star = "*".repeat(len - 4) + x.slice(len - 4);
    return String(star)
  }

  // 종화

function solution(phone_number) {
    for (let i=0; i<phone_number.length; i++) {
        phone_number = phone_number.replace(p_n[i-4], '*')
    } return p_n
}

//소현
function solution(phone_number) {
    return "*".repeat(phone_number.length-4) + phone_number.slice(-4)
}


function solution(phone_number) {
    const len = phone_number.length;
    const star = "*".repeat(len - 4) + phone_number.slice(len - 4);
    return String(star)
  }