import random


class GenerateWord:
    with open("sowpods.txt", "r") as f:
        line = f.readlines()

    @classmethod
    def get_random_word(cls) -> str:
        word = random.choice(cls.line).strip()
        word = word.lower()
        return word
