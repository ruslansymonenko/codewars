def multiply(n):
    power = len(str(abs(n)))

    result = n * pow(5, power)

    return result


multiply_result = multiply(15)

print(multiply_result)
