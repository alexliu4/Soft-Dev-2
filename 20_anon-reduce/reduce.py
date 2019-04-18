# Alex - Jabir Chowdhury , Alex Liu
# SoftDev2 pd6
# K20: Reductio ad Absurdum
# 2019-04-18

from functools import reduce

f = open("text.txt", "r")
data = f.read()
data = data.split()

def freq(word):
    return reduce((lambda a, b: a + b), [1 if x.lower() == word.lower() else 0 for x in data])


print(freq("is"))

def all_freq(words):
    return reduce((lambda a, b: a + b), [1 if x.lower() in [y.lower() for y in words] else 0 for x in data])


print(all_freq(["you", "me", "is", "alex"]))

def most_freq():
    return reduce((lambda a, b: a if freq(a) > freq(b) else b), list(set([x.lower() for x in data])))


print(most_freq())
