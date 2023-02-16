/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputValue = document.getElementById("input-value")
const convertBtn = document.getElementById("btn-convert")
const lengthDiv = document.getElementById("length")
const VolumeDiv = document.getElementById("volume")
const MassDiv = document.getElementById("mass")

let userInput
//meter to feet
const meter = 3.2808
//liter to gallon
const liter = 0.2641
//kilogram to pound
const kilogram = 2.2046

convertBtn.addEventListener("click",function(){
    userInput = inputValue.value
    convertLength(userInput)
    convertVloume(userInput)
    convertMass(userInput)
})

function convertLength(userInput){
    const feet = (meter * userInput)
    const meters = (userInput / meter).toFixed(3)
    lengthDiv.innerHTML =`<h3>Length (Meter/Feet)</h3>
                        <p class="result">${userInput} meters = ${feet} feet | ${userInput} feet = ${meters} meters</p>`
}

function convertVloume(userInput){
    const gallons = (liter * userInput)
    const liters = userInput * 3.7854
    VolumeDiv.innerHTML = `<h3>Volume (Liters/Gallons)</h3> 
                        <p class="result">${userInput} liters = ${gallons} gallons | ${userInput} gallons = ${liters} liters</p>`
    
}

function convertMass(userInput){
    const pounds = kilogram * userInput
    const kilos = (userInput * 0.45359).toFixed(3)
    MassDiv.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>
                        <p class="result">${userInput} kilos = ${pounds} pounds | ${userInput} pounds = ${kilos} kilos</p>`
}





