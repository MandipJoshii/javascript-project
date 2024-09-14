let count = document.getElementById("counter");
let savedata = document.getElementById("save-btn");
let saveel = document.getElementById("save-el");

let counter = 0;
function increment(){
    counter++;
count.innerText = counter
    
}


function save(){
let data =" " + counter + " - "

saveel.innerText += data
// saveel.innerText = 0

counter = 0
}

