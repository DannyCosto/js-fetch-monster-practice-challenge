// Deliverable 1
//show 50 first monsters, age, descriptions
let monsDiv = document.querySelector('#create-monster')
let monsterForm = document.createElement('form')


fetch("http://localhost:3000/monsters/?_limit=50")
.then(response => response.json())
.then(monstersArr => monstersArr.forEach(monsterObj => postMonsters(monsterObj)))

function postMonsters(monsObj) {
    let monsDiv = document.createElement("div")
    let monsName = document.createElement("h2")
    monsName.innerText = monsObj.name
    let monsAge = document.createElement("h4")
    monsAge.innerText = monsObj.age
    let monsDescription = document.createElement("p")
    monsDescription.innerText = monsObj.description
    let monsContainer = document.querySelector('#monster-container');
    
    monsterForm.append(monsDiv, monsName, monsDescription)
    monsContainer.append(monsterForm)
}
//deliverable 2
// add monster forms 
function createMonster() {
    
    let createName = document.createElement('input')
        createName.id = "name"
        createName.placeholder = "name..."
        createName.type = 'text'

    let createAge = document.createElement('input')
        createAge.id = "age"
        createAge.placeholder = "age.."
        createAge.type = "text"

    let createDescription = document.createElement('input')
        createDescription.id = "description"
        createDescription.placeholder = "description..."
        createDescription.type = "text"

    let button = document.createElement('input')
        button.id = "button"
        button.value = "Create"
        button.type = "submit"

    monsterForm.append(createName, createAge, createDescription, button)
}
createMonster()
//add event listeners for unstable elements outside function
monsterForm.addEventListener("submit",function(evt){
evt.preventDefault()
let monObj = {   
    name: evt.target.name.value,
    age: evt.target.age.value,
    description: evt.target.description.value
}
renderMon(monObj)
})
//event handler for event listener
function renderMon(monObj) {
    fetch("http://localhost:3000/monsters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(monObj),
    })
    .then(response => response.json())
    .then(mon => postMonsters(mon))
}

//deliverable 3
