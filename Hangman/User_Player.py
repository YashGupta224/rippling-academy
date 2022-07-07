class UserPlayer:
    @staticmethod
    def guess_letter() -> str:
        guessed_letter = input("guess a letter -> ")
        guessed_letter = guessed_letter.lower()
        return guessed_letter

    @staticmethod
    def want_game() -> bool:
        want_game = input("Press y to start game else press any thing for exit ")
        return want_game == "y"


