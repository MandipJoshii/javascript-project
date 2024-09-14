let cards = [12,1,3]
let isAlive = true
let message = " "
let display = document.getElementById("continue")
let displaySum = document.getElementById("total")
let displayCard = document.getElementById("deck")

let sum = cards[0] + cards[1] + cards[2]

console.log(false);

 
function startgame(){
    rendergame()
}

function rendergame(){
    if (sum <= 20) {

        message = "DO YOU WANT TO DRAW THE CARD"
    } else if (sum === 21) {
        message = "YOU HAVE WON THE BLACKJACK"
    } else {
        message = "YOU LOSE"
        isAlive = false
    }
    display.textContent = message
    displaySum.textContent = "SUM: " + sum
    displayCard.textContent ="CARD: " +  cards
}

function newcard(){
let newcard = 5
cards.push(newcard)

sum += newcard
rendergame()
}


