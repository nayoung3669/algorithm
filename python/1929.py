import sys

num1, num2 = map(int,sys.stdin.readline().split())
for i in range(num1, num2 + 1):
    if i == 0:
        continue
    for j in range(2, i**0.5):
        if (i % j) == 0:
            count += 1
    if count == 1:
        arr.append(i)

for n in arr:
    print(n)
