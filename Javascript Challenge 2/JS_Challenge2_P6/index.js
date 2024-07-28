let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getRandomNumber(){
    return  Math.floor(Math.random() * 3)  
}

let randomNum = getRandomNumber()
console.log(hands[randomNum])
