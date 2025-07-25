def duplicate_count(text):
    result = 0
    checked = []

    for char in text:
        if char.lower() in checked:
            continue

        count = 0
        for tested_char in text:
            if tested_char.lower() == char.lower():
                count += 1

        if count > 1:
            result += 1

        checked.append(char.lower())

    return result



print(duplicate_count("abcdeaa"))