class Node:
    def __init__(self, item, next):
        self.item = item
        self.next = next

class Stack:
    def __init__(self):
        self.top = None

    #push, pop, is empty
    def is_empty(self):
        return self.top is None
    
    def push(self, val):
        self.top = Node(val, self.top) # val == item, self.top == next(다음 가리키는 것))
    
    def pop(self):
        if not self.top:
            return None

        node = self.top #가장 최근 추가된 top node
        self.top = self.top.next #다음 노드
        return node.item