const arrayRPS = ['rock', 'paper', 'scissor'];

const inputAll = document.querySelectorAll('input');
const imagesAll = document.querySelectorAll('img');
const button = document.querySelector('button');
const h2All = document.querySelectorAll('h2');
const h1All = document.querySelectorAll('h1');

const playerName = h1All[0];
const result = h1All[1];

const rock = inputAll[1];
const paper = inputAll[2];
const scissor = inputAll[3];

const rockAI = imagesAll[0];
const paperAI = imagesAll[1];
const scissorAI = imagesAll[2];

const playerPH2 = h2All[0];
const aiPointsPH2 = h2All[1];

let finish = 0;
button.addEventListener('click', event => {
    event.preventDefault();

    if (finish != 1 && inputAll[0].value != '') {
        playerName.innerText = inputAll[0].value;
        finish++;
        const form = document.querySelector('form');
        form.classList.remove('namePrompt');
        result.innerText = '';
    }
    inputAll[0].value = '';
});

let playerPoints = 0;
let aiPoints = 0;

rock.addEventListener('click', event => {
    event.preventDefault();
    rock.toggleAttribute('disabled');
    result.innerText = '';

  const  random = Math.round(Math.random() * 2);

    if (playerPoints < 3 && aiPoints < 3) {
        rockIfElse(random);
    }

    if (playerPoints == 3 || aiPoints == 3) {
        if (playerPoints > aiPoints) {
            result.innerText = `${playerName.innerText} has won ${playerPoints} to ${aiPoints}\nTo play again just choose a weapon.`;
        } else {
            result.innerText = `Computer has won ${aiPoints} to ${playerPoints}\nTo play again just choose a weapon.`;
        }
        playerPoints = 0;
        aiPoints = 0;
    }
    playerPH2.innerText = playerPoints;
    aiPointsPH2.innerText = aiPoints;
});

paper.addEventListener('click', event => {
    event.preventDefault();
    paper.toggleAttribute('disabled');

    result.innerText = '';

   const random = Math.round(Math.random() * 2);

    if (playerPoints < 3 && aiPoints < 3) {
        paperIfElse(random);
    }

    if (playerPoints == 3 || aiPoints == 3) {
        if (playerPoints > aiPoints) {
            result.innerText = `${playerName.innerText} has won ${playerPoints} to ${aiPoints}\nTo play again just choose a weapon.`;
        } else {
            result.innerText = `Computer has won ${aiPoints} to ${playerPoints}\nTo play again just choose a weapon.`;
        }
        playerPoints = 0;
        aiPoints = 0;
    }
    playerPH2.innerText = playerPoints;
    aiPointsPH2.innerText = aiPoints;
});

scissor.addEventListener('click', event => {
    event.preventDefault();
    scissor.toggleAttribute('disabled');

   const random = Math.round(Math.random() * 2);

    result.innerText = '';

    if (playerPoints < 3 && aiPoints < 3) {
        scissorIfElse(random);
    }
    if (playerPoints == 3 || aiPoints == 3) {
        if (playerPoints > aiPoints) {
            result.innerText = `${playerName.innerText} has won ${playerPoints} to ${aiPoints}\nTo play again just choose a weapon.`;
        } else {
            result.innerText = `Computer has won ${aiPoints} to ${playerPoints}\nTo play again just choose a weapon.`;
        }
        playerPoints = 0;
        aiPoints = 0;
    }
    playerPH2.innerText = playerPoints;
    aiPointsPH2.innerText = aiPoints;
});

function rockIfElse(random) {
    if (arrayRPS[random] == 'scissor') {
        rock.style.background = 'green';
        scissorAI.style.background = 'red';
        playerPoints++;
    } else if (arrayRPS[random] == 'paper') {
        rock.style.background = 'red';
        paperAI.style.background = 'green';
        aiPoints++;
    } else {
        rock.style.background = 'orange';
        rockAI.style.background = 'orange';
    }
    reverseColor(1);
}

function paperIfElse(random) {
    if (arrayRPS[random] == 'rock') {
        paper.style.background = 'green';
        rockAI.style.background = 'red';
        playerPoints++;
    } else if (arrayRPS[random] == 'scissor') {
        paper.style.background = 'red';
        scissorAI.style.background = 'green';
        aiPoints++;
    } else {
        paper.style.background = 'orange';
        paperAI.style.background = 'orange';
    } reverseColor(2);
}

function scissorIfElse(random) {
    if (arrayRPS[random] == 'paper') {
        scissor.style.background = 'green';
        paperAI.style.background = 'red';
        playerPoints++;
    } else if (arrayRPS[random] == 'rock') {
        scissor.style.background = 'red';
        rockAI.style.background = 'green';
        aiPoints++;
    } else {
        scissor.style.background = 'orange';
        scissorAI.style.background = 'orange';
    }reverseColor(3);
}

function reverseColor(number) {

    setTimeout(function background() {

        rock.style.backgroundColor = 'rgb(10, 173, 228)';
        paper.style.backgroundColor = 'rgb(10, 173, 228)';
        scissor.style.backgroundColor = 'rgb(10, 173, 228)';

        rockAI.style.backgroundColor = 'rgb(10, 173, 228)';
        paperAI.style.backgroundColor = 'rgb(10, 173, 228)';
        scissorAI.style.backgroundColor = 'rgb(10, 173, 228)';
        if(number == 1){
            rock.toggleAttribute('disabled');
        }else if(number == 2){
            paper.toggleAttribute('disabled');
        }else if(number == 3){
            scissor.toggleAttribute('disabled');
        }
        
        
    }, 1000);
}