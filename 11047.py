
n, money = map(int, input().split())

arr= []
for i in range(n):
    arr.append(int(input()))

arr.sort(reverse=True)

count = 0
for j in arr:
    if money // j > 0:
        count += money//j
        money -= (j * (money // j) )

print(count)