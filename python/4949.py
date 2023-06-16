# 1978, 10866, 11866


T = list(input())

list_1 = []
answer = 'yes'

# A rope may form )( a trail in a maze.

for i in T:
    if i == "(":
        list_1.append(0)
    elif i == "[":
        list_1.append(1)
    elif i == ")":
        if list_1:
            a = list_1.pop()
            if a != 0:
                answer = 'no'
                break
        answer = 'no'    
        break
    elif i == "]":
        if list_1:
            a = list_1.pop()
            if a != 1:
                answer = 'no'
                break
        answer = 'no'    
        break
print(answer)# 1. 문자열 입력 받기
# 2. 짝확인하기
# 3. yes or no 출력하기
# https://docs.python.org/3/library/collections.html#collections.deque

# list = ["(", "(", "[", "]", ")", ")"]
# 리스트에 괄호친구들을 다 넣고 하나씩 뺴보는데 
# list = ["(", "(", "]", ")", "[", ")"]
# "(input.split('.')
# "{"
# ([ (([( [ ] ) ( ) (( ))] )) ])
T = list(input())

list_1 = []
answer = 'yes'

# A rope may form )( a trail in a maze.

for i in T:
    if i == "(":
        list_1.append(0)
    elif i == "[":
        list_1.append(1)
    elif i == ")":
        if list_1:
            a = list_1.pop()
            if a != 0:
                answer = 'no'
                break
        answer = 'no'    
        break
    elif i == "]":
        if list_1:
            a = list_1.pop()
            if a != 1:
                answer = 'no'
                break
        answer = 'no'
        break
print(answer)


# ([ (([( [ ] ) ( ) (( ))] )) ]).

# import re

# str_text = 'apple_banana_pineapple_april'

# list_result = re.findall(r'apple', str_text)
# print(list_result)




# -- Result
# ['apple', 'apple']