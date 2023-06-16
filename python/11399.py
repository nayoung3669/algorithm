n = int(input())

arr = list(map(int, input().split()))

print(arr)
for i in range(1, len(arr)):
    arr[i] = arr[i-1] + arr[i]

print(arr)


