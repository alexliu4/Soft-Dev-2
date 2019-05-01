def repeat(v):
	def nest(n):
		return v * n
	return nest

print (repeat("cool")(3) )
r1 = repeat("hello")
r2 = repeat("goodbye")
print (r1(2))
print (r2(2))

def make_counter():
	x = 0
	def inner():
		nonlocal x
		x += 1
		return x
	def access():
		nonlocal x
		return x
	return inner, access


ctrl1, acc1 = make_counter()

print ("CTRL1: ")
print (ctrl1())
print (ctrl1())
print (ctrl1())
print("\nACC1: ")
print(acc1())
print(acc1())
print(acc1())

ctrl2, acc2 = make_counter()

print ("\nCTRL2: ")
print (ctrl2())
print (ctrl2())
print (ctrl2())

###########################CLASSWORK###########################

# def inc(x):
# 	return x + 1
#
#
# f = inc
# print (f(10)) # 11
#
#
# def adder(a, b):
# 	return a + b
#
# def caller(c):
# 	print(c(2,4))
# 	print(c(3,5))
#
#
# caller(adder) # 6 and 8
#
#
# def outer(x):
# 	def contains(l):
# 		return x in l
# 	return contains
#
# contains_15 = outer(15)
#
# print (contains_15([1,2,3,4,5]))
# print (contains_15([13,14,15,16,17]))
# print (contains_15(range(1,20)))
#
# # deletes function outer
# del outer
# # outer(42)
#
# # the function created on the inside stays
# print (contains_15(range(15,20)))
#
#
# def outer():
# 	x = "foo"
# 	def inner():
# 		x = "bar"
# 	inner()
# 	return x
#
# print (outer())
#
# del outer
#
# def outer():
# 	x = "foo"
# 	def inner():
# 		nonlocal x
# 		x = "bar"
# 	inner()
# 	return x
