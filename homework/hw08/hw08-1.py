def fm(numbers):
    mn = numbers[0]
    for n in numbers:
        if n > mn:
            mn = n
    return mn

print(fm([3, 7, 2, 9, 5]))
