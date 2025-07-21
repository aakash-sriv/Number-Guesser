let randomnumber = parseInt(Math.random()*100 +1);

const guess1 = document.querySelector('.guess');//subt
const button = document.querySelector('.button');//guessfield
const records = document.querySelector('.records');//resultpara
const previousguess = document.querySelector('.previous');//guessslot
const loworhi = document.querySelector('.loworhi');
const remaining = document.querySelector('.remaining');

const p = document.createElement('p');
previous = [];
let guessnum = 10;
let message ='';
let playgame = true;

if(playgame){
    button.addEventListener('click' , function(event){
        event.preventDefault();
        const guess = parseInt(guess1.value);
        validateguess(guess);
    });
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1){
        alert('Please enter a number greater than zero');
    }
    else if(guess>100){
        alert('Please enter a number lower than 100');
    }
    else{
        previous.push(guess);
        //we gotta check if this is not last guess
        if(guessnum<1){
            displayguess(guess);
            displaymessage(`Game over. Answer was ${randomnumber} , you lost bitch xd`)
            endgame();
        }else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess===randomnumber){
        displaymessage(`Congratulations starboy , you freaking win it!`);
        endgame();
    }
    else if(guess<randomnumber){
        displaymessage(`You can get to ur answer if u just slightly increase it🥺`);
    }
    else if(guess>randomnumber){
        displaymessage(`You can get to ur answer if u just slightly decrease it🥺`);
    }
}

function displayguess(guess){
    guess1.value = '';
    previousguess.innerHTML += ` ${guess}    `;
    guessnum--;
    remaining.innerHTML = `${guessnum}`;
}

function displaymessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    guess1.value = '';
    guess1.setAttribute('disabled' , '');
    //important and creative
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game?</h2>`;
    records.appendChild(p);
    playgame = false;
    startnewgame();
}

function startnewgame(){
    const newgamebutton = document.querySelector('#newGame');
    newgamebutton.addEventListener('click' , function(e){
        randomnumber = parseInt(Math.random()*100 +1);
        previous = [];
        guessnum = 10;
        previousguess.innerHTML = '';
        remaining.innerHTML = 10;
        guess1.removeAttribute('disabled');
        records.removeChild(p);
        displaymessage('');
        playgame = true;

    });
}
