n = int(input())
t = list(map(int, input().split()))

t.sort()
                
if len(t) % 2 == 0:   
    answer = t[0] * t[-1]    
else:                                             
    num = len(t) // 2               
    answer = t[num] ** 2
print(answer)


# O(nlogn)
# len(a)//2
# 홀수 -> index(n) 가운데거 ^ 2
# 짝수 -> sort 해서 맨앞, 맨 뒤 곱하기