def filter_list(list):
    result = []

    for item in list:
        if type(item) == int:
            result.append(item)

    return result

print(filter_list([1,2,'a','b']))