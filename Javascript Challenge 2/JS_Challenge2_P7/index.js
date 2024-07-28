let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    let rand1 = Math.floor(Math.random() * fighters.length)
    let rand2 = Math.floor(Math.random() * fighters.length)
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    stageEl.textContent = fighters[rand1] + " vs " + fighters[rand2]
})
