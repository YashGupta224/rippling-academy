class Board:
    def __init__(self, word="default"):
        self.chance = 6  # Starting Chances
        self.guessed_word = "-" * len(word)
        self.guessed_letters = []
        self.word = word

    def has_chances(self) -> bool:
        return self.chance > 0

    def decrement_chance(self) -> None:
        self.chance -= 1

    def get_chance(self) -> int:
        return self.chance

    def guessed_it(self) -> bool:
        return self.word == self.guessed_word

    def get_guessed_word(self) -> str:
        return self.guessed_word

    def guessed_letters_has(self, letter) -> bool:
        return letter in self.guessed_letters

    def set_guessed_word_at(self, index, letter) -> None:
        self.guessed_word = self.guessed_word[:index] + letter + self.guessed_word[index + 1:]

    def add_guessed_letter(self, letter) -> None:
        self.guessed_letters.append(letter)

    def get_word(self) -> str:
        return self.word

    def set_word(self, word) -> None:
        self.word = word
        self.guessed_word = "-" * len(word)

    def word_has(self, letter) -> bool:
        return letter in self.word

    def equal_word_at_pos(self, index, letter) -> bool:
        return self.word[index] == letter
