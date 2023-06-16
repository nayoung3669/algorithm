from collections import deque
import sys

n = int(sys.stdin.readline())
queue = deque()

for i in range(n):
    command = sys.stdin.readline().split()

    if command[0] == "push":
        queue.append(command[1])

    if command[0] == "pop":
        if len(queue):
            print(queue.popleft())
        else:
            print(-1)

    if command[0] == "size":
        print(len(queue))

    if command[0] == "empty":
        if len(queue):
            print(0)
        else:
            print(1)

    if command[0] == "front":
        if len(queue):
            print(queue[0])
        else:
            print(-1)

    if command[0] == "back":
        if len(queue):
            print(queue[-1])
        else:
            print(-1)


# 앞자리 => 나누기로 구하기
# 뒷자리 => 나머지로 구하기