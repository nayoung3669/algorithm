
n = int(input())

arr = list(map(int,input().split()))
print(arr)

range(2, 2)

count = len(arr)
for i in arr:
    if i == 1:
        count -= 1
    # elif i == 2:      
    #     continue
    for j in range(2,i): 
        print("i :", i)
        if i % j == 0:
            count -= 1
            break

print(count)


# n = int(input())
# numbers = list(map(int, input().split())
# print((numbers))
# # map은 반복문에 들어간다

# my_list = numbers
# print(isinstance(numbers, list))

# sosu = 0
# print(numbers)
# for num in numbers:
#     print(num)
