#(cur_node, step_size)

try_time = int(input())
examples = []
for i in range(try_time):
    example = input()
    examples.append(example)

for example in examples:
    example_list = example.split(" ")
    if len(example_list) != 2:
        print("Input Error")
        exit()
    
    diff = int(example_list[1]) - int(example_list[0])
    if diff < 0:
        print("Input Error")
        exit()
    
    cur_node = 0
    my_q= [(0,0,0)]
    visited = set()
    i = 0
    while(my_q):
        cur = my_q.pop()
        child_nodes = [cur[1]-1, cur[1], cur[1]+1]
        for child in child_nodes:
            if child > 0:
                if cur[0] + child < diff:
                    elem = (cur[0] + child, child, cur[2]+1)
                    if (elem[0], elem[1]) not in visited:
                        my_q.append(elem)
                        visited.add((elem[0], elem[1]))

                elif cur[0] + child == diff:
                    if child == 1:
                        print(cur[2]+1)
                        break
        else:
            i += 1
            continue
        break

    # print(visited)
    print(f"i: {i}")