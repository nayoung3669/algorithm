import math
T = int(input())

def hotel(H,W,N):
  ch=N%H
  ho=int(math.ceil(N//H))
  return (ch*100) + ho

for i in range(T):
  a,b,c= input().split()
  print(hotel(int(a),int(b),int(c)))

