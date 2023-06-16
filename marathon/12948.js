function solution(phone_number) {
    let digits = phone_number.split('').map(Number).splice(-4).join('')
    return "*".repeat(phone_number.length - 4).concat(digits)
}