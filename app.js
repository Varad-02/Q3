let btnRed = document.querySelector("#btn-red")
let btnBlue = document.querySelector("#btn-blue")

let txtInput = document.querySelector("#txt-input")
let outputDiv = document.querySelector("#output")



function redclickHandler() {
let input = txtInput.value;
  

    outputDiv.innerText = input;
outputDiv.style.color = "red"

}

function blueclickHandler() {
    let input = txtInput.value;
      
    
        outputDiv.innerText = input;
    outputDiv.style.color = "blue"
    
    }

btnBlue.addEventListener("click", blueclickHandler)
btnRed.addEventListener("click", redclickHandler)