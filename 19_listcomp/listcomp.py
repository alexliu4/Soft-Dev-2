# Alexander Liu, Brian Lee
# Softdev2 pd6
# K19 -- Ready, Set, Math!
# 2019-04-16

def union(a, b):
    return a + [n for n in b if n not in a]

print("Union of [1, 2, 3, 7] and [2, 3, 4]")
print(union([1, 2, 3, 7], [2, 3, 4] ))

def intersection(a, b):
    return [n for n in a if n in b]

print("Intersection of [1, 2, 3] and [2, 3, 4]")
print(intersection([1, 2, 3], [2, 3, 4]))

def set_difference(u, a):
    return [n for n in u if n not in a]

print("Set difference of [1, 2, 3] and [2, 3, 4]")
print(set_difference([1,2,3],[2,3,4]))
print("Set difference of [2, 3, 4] and [1, 2, 3]")
print(set_difference([2,3,4],[1,2,3]))

def sym_difference(a,b):
    return [n for n in a if n not in b] + [n for n in b if n not in a]

print("Symmetric difference of [1, 2, 3] and [2, 3, 4, 5]")
print(sym_difference([1,2,3],[2,3,4,5]))

def cart_product(a,b):
    return [(n, m) for n in a for m in b]

print("Cartesian product of [1, 2, 3] and [\"a\", \"b\", \"c\"]")
print(cart_product([1, 2, 3], ["a", "b", "c"]))
