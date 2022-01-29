// BlackJack
let listcards = []
let hasBlackJack = false;
let isAlive = false;
//let sum = firstcard + secondcard;
let sum = 0
let msg=""
let msgEl1 = document.getElementById("msgEl")
let sumel = document.getElementById("sum-el")
//let sumel = document.querySelector(".sum-el")
let cardEl = document.getElementById("cards-el");
let player = {
    name : "Paulina",
    chips : 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+ player.chips;

function getRandomCard() {
    let randcard = Math.floor((Math.random()*11))+1
    // if 1 -> return 11
    // if 11-13 -> return 10
    if (randcard > 10) {
        return 10
    }
    else if (randcard === 1 ){ return 11}
    else { return randcard; }
}
function startGame(){
    isAlive = true;
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    listcards = [firstcard,secondcard]
    sum = firstcard + secondcard;
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: ";
    for (let  i = 0; i < listcards.length; i++)
    {cardEl.textContent += listcards[i] + " "; }

    if (sum <= 20) {
        msg = "Do you want to draw a new card ?";
    }
    else if (sum === 21) {
        msg = "You have got blackjack";
        hasBlackJack = true
    }
    else if ( sum > 21) {
        msg = "You have out of the game ";
        isAlive = false;
    }
    console.log("OK")
    msgEl1.textContent = msg;
    sumel.textContent = "Sum: " + sum;
    }


function newCard(){
    if((isAlive===true) && (hasBlackJack===false)){
    let nextCard = getRandomCard();
    sum += nextCard
    listcards.push(nextCard); 
    renderGame()
}  
}

