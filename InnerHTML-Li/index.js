let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLead()
    inputEl.value = ""
})

function renderLead() {
    let listItem = "<li>" + inputEl.value + "</li>"
    ulEl.innerHTML += listItem
}

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }
//     ulEl.innerHTML = listItems  
// }
