from Board import Board
from Generate_word import GenerateWord
from User_Player import UserPlayer


def is_alphabet(letter) -> bool:
    if len(letter) > 1:
        return False
    return letter in "abcdefghijklmnopqrstuvwxyz"


class Hangman:
    def __init__(self):
        self.board = Board()
        self.userPlayer = UserPlayer()

    def ask_for_game(self) -> bool:
        want_game = self.userPlayer.want_game()
        return want_game

    def start_game(self) -> None:
        self.board.set_word(GenerateWord.get_random_word())
        self.run_game()

    def run_game(self) -> None:
        if self.board.has_chances():
            self.guessing()
            if self.board.guessed_it():
                print("you have guessed the word ", end="\n\n")
                return
            else:
                self.run_game()
        else:
            print("no chances left")
            print("word is ", self.board.get_word(), end="\n\n")
            return

    def guessing(self) -> None:
        print("You have {} chance ".format(self.board.get_chance()))
        letter = self.userPlayer.guess_letter()

        if not is_alphabet(letter):
            print("It is not  an alphabet try an alphabet")
        elif self.board.word_has(letter):
            print("right guess")
            for i in range(len(self.board.get_word())):
                if self.board.equal_word_at_pos(i, letter):
                    self.board.set_guessed_word_at(i, letter)
        else:
            print("wrong guess")
            if not self.board.guessed_letters_has(letter):
                self.board.decrement_chance()
                self.board.add_guessed_letter(letter)

        print("guessed word", self.board.get_guessed_word(), end="\n\n")


while True:
    print("Wanna Play Game")
    hangmanGame = Hangman()
    if hangmanGame.ask_for_game():
        hangmanGame.start_game()
    else:
        break
