def sum():
    a=int(input())
    b=int(input())
    c=int(a+b)
    print("before")
    print(int(c))
    print("after")
    
sum()

def multi():
    num1=10
    num2=20
    num3=num1*num2
    print("before")
    return num3
    print("after")
result=multi()
print(result)