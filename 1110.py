n = int(input())

count = 0
val = n

while True:

    x = val // 10
    y = val % 10

    sum = x + y
    val = y * 10 + (sum % 10)
    count +=1

    if val == n:
        break

print(count)





