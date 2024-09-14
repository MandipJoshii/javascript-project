document.getElementById("display")




let num1 = 2
let num2 = 5


document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2


function add(){

    let sum = num1 + num2
   display.textContent = sum
}


function sub(){
    let diff = num1 - num2
    display.textContent = diff
}


function multi(){
    let multi = num1 * num2
    display.textContent = multi
}


function div(){
    let div = num1 / num2
    display.textContent = div
}
