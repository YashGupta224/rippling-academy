from Generate_word import GenerateWord


class Hangman:
    def __init__(self, word="default"):
        self.chance = 6
        self.guessed_word = "-"*len(word)
        self.guessed_letters = []
        self.word = word

    def guessing(self):
        letter = input("guess a letter   ")
        if letter not in self.word:
            print("worng guess")
            if letter not in self.guessed_letters:
                self.chance = self.chance-1
        else:
            for i in range(len(self.word)):
                if self.word[i] == letter:
                    self.guessed_word = self.guessed_word[:i] + \
                        letter + self.guessed_word[i+1:]

        self.guessed_letters.append(letter)
        print("gussed word", self.guessed_word)
        print("left chance ", self.chance)

    def run_game(self):
        if self.chance > 0:
            self.guessing()
            if self.guessed_word == self.word:
                print("u have guessed it ")
                return
            else:
                self.run_game()
        else:
            print("no chances left")
            return


def start_game():
    new_word = GenerateWord()
    print(new_word.get_word())
    obj = Hangman(new_word.get_word())
    obj.run_game()


def ask_for_game():
    want_game = input(" press y to start game else press any thing ")
    if want_game == "y":
        start_game()
        print("game has finished ")
        ask_for_game()


ask_for_game()
