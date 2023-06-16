function solution(s) {
    return (s.length == 4 || s.length == 6) && !isNaN(Number(s)) && !s.includes("e")
}


// 지수 "e" 때문에 테스트 케이스 1개가 통과 안되서.. e를 포함하는 수는 배제했습니다