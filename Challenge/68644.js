function solution(nums) {
    var answer = new Set()
    nums.map((n,i) => {
        for (let j=i+1; j<nums.length; j++) { 
            answer.add(n + nums[j])
        }
    })
    return [...answer].sort((a,b) => a - b)
}