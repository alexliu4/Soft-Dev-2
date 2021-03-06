import random

def make_HTML_heading(f):
    txt = f()
    def inner():
        return "<h1>" + txt + "</h1>"
    return inner

@make_HTML_heading  # equiv to greet = make_HTML_heading(greet)
def greet():
    greetings = [ 'Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greetings)

# greet_heading = make_HTML_heading(greet)
# print(greet_heading())

print(greet())

def memoize(f):
    memo = {}
    def helper(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return helper

def fib(n):
    if n == 0:
        return 0
    elif n  == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)

fib = memoize(fib)
print (fib(1))
print (fib(5))
print (fib(7))
print (fib(10))
print (fib(40))
