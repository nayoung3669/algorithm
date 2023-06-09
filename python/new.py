# 더하기 사이클

# 0 ~ 99 의 정수
# 수가 10보다 작다면 0을 붙여 두자리수로 만든다
# 두자리 수로 만들고 각 자리의 숫자를 더한다.

'''
26
2 + 6 = 8
6 + 8 = 14
8 + 4 = 12
4 + 2 = 6
26
'''
# 두자리수

n = int(input())

count = 0
val = n
sum = 0

while True:
    a = val // 10 # 앞자리 사이클 1 : 2, 사이클 2 : 6, 사이클 3 : 8, 사이클 4 : 4
    b = val % 10 # 맨뒷자리 사이클 1 : 6, 사이클 2 : 8, 사이클 3 : 4, 사이클 4 : 2

    sum = a + b # 앞뒷자리 더한 값 사이클 1 :8, 사이클 2 : 14, 사이클 3 : 12, 사이클 4 : 6
    val = b * 10 + (sum % 10)
    # 사이클 1 : b * 10 = 60
    # 사이클 1 : sum % 10 = 8 나누어 떨어지지 않기때문에
    # 사이클 1 : 60 + 8 = 68
    # 사이클 2 : b * 10 = 80
    # 사이클 2 : sum % 10 = 4
    # 사이클 2 : 80 + 4 = 84
    # 사이클 3 : b * 10 = 40
    # 사이클 3 : sum % 10 = 2
    # 사이클 3 : 40 + 2 = 42
    # 사이클 4 : 2 * 10 = 20
    # 사이클 4 : 6 % 10 = 6
    # 사이클 $ : 20 + 6 = 26 ===========종료

    count += 1
    if val == n:
        break

print(count)