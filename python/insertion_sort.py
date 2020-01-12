x = [2,56,3,78,5,4,1,98,41]

for i in range(1, len(x)-1):
    print("i is: ",i)
    for j in range(i,0,-1):
        print("j is: ", j)
        if x[j]<x[j-1]:
            temp = x[j]
            x[j] = x[j-1]
            x[j-1] = temp
            print(x)
        else:
            break
print("Sorted array is: ", x)