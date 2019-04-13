# Tangerines- Alexander Liu, Michelle Tang, Tim Marder
# Softdev2 pd6
# K16 -- Do You Even List?
# 2019-04-12

# 1a
def loopyOne():
    var = 0
    num = []
    while (len(num) < 5):
        num.append( str(var) + str(var) )
        var += 2
    return num


print(loopyOne())

# 1b
def listcompOne():
    nums = "02468"
    array = [x + x for x in nums]
    return array


print(listcompOne())


# 2a
def loopyTwo():
    var = 0
    num = [7]
    while (len(num) < 5):
        num.append( 10 + num[len(num) - 1] )
        var += 1
    return num


print(loopyTwo())

# 2b
def listcompTwo():
    nums = "01234"
    array = [ int(x + "7") for x in nums]
    return array


print(listcompTwo())

# 3a
def loopyThree():
    var = 0
    i = 0
    num = [0]
    while (len(num) < 9):
        while (i < 2):
            num.append( num[len(num) - 1] + var )
            i += 1
        num.append(0)
        i = 0
        var += 1
    num.pop()
    return num


print(loopyThree())

# 3b
def listcompThree():
    nums = "000"
    array0 = [ int(x + "0") for x in nums]
    array1 = [ int(x + "1") for x in nums]
    array2 = [ int(x + "2") for x in nums]

    return array


print(listcompThree())
