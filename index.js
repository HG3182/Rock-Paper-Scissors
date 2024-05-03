var wins = 0;
var losses = 0;
var ties = 0;

        function play(userChoice) {
            const options = ["rock", "paper", "scissors"];
            const computerChoice = options[Math.floor(Math.random() * options.length)];

            compare(userChoice, computerChoice);
        }

        function compare(user, computerChoice) {
            var result;
            var computerTaunt;
            if (user === computerChoice) {
                ties++;
                result = "It's a tie!";
            } else if (
                (user === "rock" && computerChoice === "scissors") ||
                (user === "paper" && computerChoice === "rock") ||
                (user === "scissors" && computerChoice === "paper")
            ) {
                wins++;
                result = "You win!";
                const taunts = " ";
                computerTaunt = taunts;
            } else {
                losses++;
                result = "You lose!";
                const taunts = [
                    "Haha, better luck next time! 😂",
                    "You can't beat me! 🤣",
                    "I'm too good for you! 😂",
                    "Try harder! 😂",
                    "Looks like I'm the winner! 😎"
                ];
                computerTaunt = taunts[Math.floor(Math.random() * taunts.length)];
            }

            document.getElementById("wins").textContent = wins;
            document.getElementById("losses").textContent = losses;
            document.getElementById("ties").textContent = ties;

            document.querySelector(".computer-choice").textContent =`Computer chose: ${computerChoice}`;
            document.querySelector(".result").textContent = result;

            if (computerTaunt) {
                setTimeout(function() {
                    document.querySelector(".computer-taunt").textContent = computerTaunt;
                }, 1000);
            }

        }

        
