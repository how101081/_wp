def classify_even_odd(numbers):
    result = {'even': [], 'odd': []}
    for num in numbers:
        if num % 2 == 0:
            result['even'].append(num)
        else:
            result['odd'].append(num)
    return result


print(classify_even_odd([1, 2, 3, 4, 5]))
 輸出: {'even': [2, 4], 'odd': [1, 3, 5]}
