const myButtonsPlus = document.querySelector(".button.buttonPlus"); //select button plus +
const myButtonsMinus = document.querySelector(".button.buttonMinus"); //select button minus -

function plusNumberInput(myButtonsPlus){
    myButtonsPlus.addEventListener("click", ()=> {
        updateInput(1);
    });
}

function minusNumberInput(myButtonsMinus){
    myButtonsMinus.addEventListener("click", ()=>  {
        updateInput(-1);
    });
}

function updateInput(number){
    let valueOfCounter = Number(document.querySelector(".input").value); // select old value of Input and make sure we work with number
    document.querySelector(".input").value= //value update
    valueOfCounter + number;
}

plusNumberInput(myButtonsPlus);
minusNumberInput(myButtonsMinus);
