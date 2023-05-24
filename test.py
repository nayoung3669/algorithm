
# list_1 = []
# for i in range(n, 2*n):
#   if i 가 소수이면:
#     list_1.append(i)


# result = len(list_1)
# print(result)

# for i in range(2, n):
#   if n % i == 0:
#     return False
#   return True


# n = int(input())
# def func(n):
#     count_s = 0 #소수 세는 카운트
#     for i in range(n,2*n):
#         count = 0 #소수인지 판별하는 카운트 (자기 자신만으로만 나누어 떨어지는지)
#         for j in range(1, i):
#             if (i%j == 0):
#                 count +=1
#         if count == 1:  #소수이면
#             count_s +=1 #소수 세는 카운트 +1
#     return count_s

n = int(input())
def func(n):
    l = []
    for i in range(n + 1, 2 * n + 1):
        count = 0
        for j in range(2, i):
            if (i % j) == 0:
                count += 1
        l.append(count)
    return l.count(0)

print(func(n))

