const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const humanImg = document.querySelector('#human-img');
const machineImg = document.querySelector('#machine-img');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    playTheGame(humanChoice, machineChoice);
    displayChoices(humanChoice, machineChoice);
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = 'Deu empate!';
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você ganhou!";
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Você perdeu!";
    }
}

const displayChoices = (human, machine) => {
    humanImg.src = `./src/${getImageName(human)}`; // Atualiza a imagem da escolha do jogador
    machineImg.src = `./src/${getImageName(machine)}`; // Atualiza a imagem da escolha da máquina
}

const getImageName = (choice) => {
    switch (choice) {
        case 'rock':
            return 'oncoming fist.png';
        case 'paper':
            return 'hand with fingers splayed.png';
        case 'scissors':
            return 'victory hand.png';
        default:
            return '';
    }
}

const resetGame = () => {
    humanScoreNumber = 0;
    machineScoreNumber = 0;
    humanScore.innerHTML = humanScoreNumber;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = '';
    humanImg.src = './src/img/giragira1.gif'; // Imagem padrão
    machineImg.src = './src/img/giragira1.gif'; // Imagem padrão
}
