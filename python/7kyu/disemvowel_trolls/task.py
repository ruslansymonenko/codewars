def disemvowel(string_):
    array_without_vowels = []
    vowels = ['a', 'e', 'i', 'o', 'u']

    for char in string_:
        if not char.lower() in vowels:
            array_without_vowels.append(char)

    return ''.join(array_without_vowels)

print(disemvowel('This website is for losers LOL!'))