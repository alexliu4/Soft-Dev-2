# Tangerines- Alexander Liu, Michelle Tang
# Softdev2 pd6
# K18 -- Getting Clever with List Comprehensions
# 2019-04-12

def triples(n):
    return [(x,y,z) for x in range(1,n) for y in range(1,n) for z in range(1,n) if x*x+y*y == z*z ]

print triples(100)

def quickSort(l):
    return ((quickSort([y for y in l if y < l[0]]) + [l[0]] + quickSort([x for x in l if x > l[0]])) if len(l) > 2 else l)

print(quickSort([9,42359,7,6,4895,4,4350834,1,12]))
