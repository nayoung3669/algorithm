#2. 1부터 n까지의 배열 nums 만듦 ( 스택, 오름차순 ) 
#3. 결과담을 스택 생성 []
#4. 반복문생성 for i in n_stack
 # => n_stack t를 같게 해야하는데 길이가 같으니까 i 같이 써도 되지 않을까요
 # ......
#5. t 수열과 같아질때 까지 push pop ...

n = int(input())
n_stack1 = [1, 2, 3, 4, 5, 6, 7, 8] #1,2,3,4,5,6,7,8
n_stack2 = [] # 8 7 6 5 4 3
orderedList = []
# char = [] # + + + + - - 
# [1,2,3,4]
# [8,7,6,5]

for i in range(n):
    val = (int(input()))
    orderedList.append(val)

j = 0
while  n_stack1[-1] != orderedList[j]:
    n_stack2.append(n_stack1.pop())
    j += 1

    print(n_stack1)
    print(n_stack2)
    print(orderedList)


# 변수 주면 그 변수까지 갔다가 그 변수 빼고

# n = int(input())
# n_stack1 = [1, 2, 3, 4, 5, 6, 7, 8] #1,2,3,4,5,6,7,8
# n_stack2 = [] # 8 7 6 5 4 3
# orderedList = []

# while True:
#     val = int(input())
#     for i in range(n):
#         if val == n_stack1[i]:
            
#             break # for 문 탈출
            
        