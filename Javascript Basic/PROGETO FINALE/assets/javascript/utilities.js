const myButtonsPlus = document.querySelector(".button.buttonPlus"); //select button plus +
const myButtonsMinus = document.querySelector(".button.buttonMinus"); //select button minus -
const myButtonsErase = document.querySelector(".button.buttonErase"); //select button Erase
const myButtonsHelp = document.querySelector(".button.buttonHelp"); //select button Help
let helpingIntervalToStartCounting = null;
let conditionClickAgain=true;


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

function eraseInput(myButtonsErase){
    myButtonsErase.addEventListener("click", ()=>  {
        updateInput(0);
    });
}

function helpInput(myButtonsHelp){
    myButtonsHelp.addEventListener("click", ()=>  {
        conditionClickAgain=!conditionClickAgain;
        if(conditionClickAgain==false){
            helpingIntervalToStartCounting= setInterval(function() {
                updateInput(1);
                console.log("1");
              }, 1000);  
        }else{
            console.log("I'M in the stop condition");
            clearInterval(helpingIntervalToStartCounting);
        }
    });
}

function updateInput(number){
    if(number==0){
        document.querySelector(".input").value= //value update to zero
        0;
    }else{
        let valueOfCounter = Number(document.querySelector(".input").value); // select old value of Input and make sure we work with number
        document.querySelector(".input").value= //value update
        valueOfCounter + number;
    }

}

plusNumberInput(myButtonsPlus);
minusNumberInput(myButtonsMinus);
eraseInput(myButtonsErase);
helpInput(myButtonsHelp);
