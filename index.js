const computer = document.querySelector(".computer img");

const player = document.querySelector(".player img");

const computerPoints = document.querySelector(".computerPoints");

const playerPoints = document.querySelector(".playerPoints");

const chooseOption = document.querySelectorAll(".chooseOption button");

chooseOption.forEach((chooseOption) => {
    chooseOption.addEventListener("click", () => {
        computer.classList.add("shakeComputer");
        player.classList.add("shakePlayer");

        setTimeout(() => {
            computer.classList.remove("shakeComputer");
            player.classList.remove("shakePlayer");

            let playerChoice = chooseOption.textContent.trim().toUpperCase();
            player.src = `./image/${playerChoice}-P.png`;

            const choice = ["STONE", "PAPER", "SCISSORS"];
            let arrayNo = Math.floor(Math.random() * 3);

            let computerChoice = choice[arrayNo];
            computer.src = `./image/${computerChoice}-C.png`;

            let cPoints = parseInt(computerPoints.innerHTML);
            let pPoints = parseInt(playerPoints.innerHTML);

            if (playerChoice === "STONE") {
                if (computerChoice === "PAPER")
                    computerPoints.innerHTML = cPoints + 1;
                else if (computerChoice === "SCISSORS")
                    playerPoints.innerHTML = pPoints + 1;
            } else if (playerChoice === "PAPER") {
                if (computerChoice === "SCISSORS")
                    computerPoints.innerHTML = cPoints + 1;
                else if (computerChoice === "STONE")
                    playerPoints.innerHTML = pPoints + 1;
            } else if (playerChoice === "SCISSORS") {
                if (computerChoice === "STONE")
                    computerPoints.innerHTML = cPoints + 1;
                else if (computerChoice === "PAPER")
                    playerPoints.innerHTML = pPoints + 1;
            }
        }, 900);
    });
});