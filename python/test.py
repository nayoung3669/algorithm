
#리스트 노드
class ListNode:
    def __init__(self, val, next):
        self.val = val
        self.next = next


class LlinkedList:

    def __init__ (self):
        #리스트 가장 첫번째 요소
        self.head = None

    #삽입
    def append(self, val):
        if not self.head:
            self.head = ListNode(val, None)
            return
        
        node = self.head
        #가장 마지막 노드로 가는 코드 (next 가 있는 동안 쭉 )
        while node.next:
            node = node.next
        node.next = ListNode(val, None)