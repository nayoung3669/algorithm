function solution(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr1[0].length; j++) {
            arr1[i][j] += arr2[i][j]
        }
    }
    return arr1;
}

function solution(arr1, arr2) {
    let answer = []
    for (let i = 0; i<arr1.length; i++){
        answer[i] = []
        for(let j=0; j<arr1[i].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer
}

// 종화
function solution(arr1, arr2) {
    let sum = [];
    for (let i = 0; i < arr1.length; i++) {
      sum[i] = [];
      for (let j = 0; j < arr1[i].length; j++) {
        sum[i][j] = arr1[i][j] + arr2[i][j];
      }
    }
    return sum;
  }
  //정백
  function solution(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
      arr[i] = []
      for (let j = 0; j < arr1[0].length; j++) {
         arr[i][j] = arr1[i][j] + arr2[i][j];
      }
    }
    return arr;
  }