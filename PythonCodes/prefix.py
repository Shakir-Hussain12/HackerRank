from collections import deque;

def getPriority(op):
    if op == '/' or op == '*':
        return 2
    elif op == '+' or op == '-':
        return 1

    return 0

operands = deque()
operators = deque()

s = '1+2+4*5+(1+2*4)'

for elem in s:
    if elem == '*' or elem == '+' or elem == '-' or elem == '/':
        while len(operators) > 0 and getPriority(operators[-1]) >= getPriority(elem):
            op = operators.pop()
            oper1 = operands.pop()
            oper2 = operands.pop()
            operands.append(op + oper2 + oper1)
        
        operators.append(elem)
    
    elif elem == '(':
        operators.append(elem)
        
    elif elem == ')':
        while operators[-1] != '(':
            op = operators.pop()
            oper1 = operands.pop()
            oper2 = operands.pop()
            operands.append(op + oper2 + oper1)
        
        operators.pop()           
    
    else:
        operands.append(elem)

while(len(operators) > 0):
    op = operators.pop()
    oper1 = operands.pop()
    oper2 = operands.pop()
    operands.append(op + oper2 + oper1)
    

print(operands)
s = operands.pop()
print("calculating the result")
operands = []

i = len(s) - 1
while i >= 0:
    if s[i] == '+':
        operands.append(operands.pop() + operands.pop())
    elif s[i] == '-':
        operands.append(operands.pop() - operands.pop())
    elif s[i] == '*':
        operands.append(operands.pop() * operands.pop())
    elif s[i] == '/':
        operands.append(operands.pop() / operands.pop())
    else:
        operands.append(int(s[i]))
        
    i -= 1

print(operands)