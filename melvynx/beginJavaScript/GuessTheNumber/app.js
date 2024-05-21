document.addEventListener('DOMContentLoaded', initializeGame);

let randomNumber;
const maxAttemps = 20;
let attempCount = 0;

var userNumber = document.getElementById("userInput");
var attempIndication = document.getElementById("resultat")

function initializeGame() {
    const minNumber = 0;
    const maxNumber = 100;
    userNumber.value = '';
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    attempCount = 0;
    document.getElementById("attempCount").innerText = attempCount;
    attempIndication.innerText = 'Entre un nombre pour commencer à jouer';
}

document.getElementById("submitBtn").addEventListener("click", verifyNumber);
document.getElementById("resetBtn").addEventListener("click", initializeGame);

function verifyNumber() {
    const userValue = parseInt(userNumber.value, 10);
    if (!isNaN(userValue)) {
        if (attempCount < maxAttemps) {
            attempCount++;
            document.getElementById("attempCount").innerText = attempCount;
            if (userValue < randomNumber) {
                attempIndication.innerText = "Trop petit nombre";
            } else if (userValue > randomNumber) {
                attempIndication.innerText = "Trop grand nombre";
            } else if (userValue === randomNumber) {
                attempIndication.innerText = `Bien joué ! Vous avez trouvé le numéro en ${attempCount} essais.`;
                setTimeout(initializeGame, 10000);
            }
        } else {
            attempIndication.innerText = `Game Over ! Le numéro était ${randomNumber}.`;
            setTimeout(initializeGame, 10000);
        }
    } else {
        attempIndication.innerText = "Veuillez entre un nombre valide !";
    }
}

initializeGame();

