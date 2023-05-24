class Node:
    def __init__(self, item, next):
        self.item = item
        self.next = next

class Stack:
    def __init__(self):
        self.front = None

    #push, pop, is empty
    def is_empty(self):
        return self.front is None
    
    def push(self, val):
        if not self.front:
            self.front = Node(val  ,None)
            return

        node = self.front
        while node.next:
            node = node.next
        node.next = Node(val, None)

    def pop(self):
        if not self.front:
            return None
        
        node = self.front
        self.front = self.front.next
        return node.item