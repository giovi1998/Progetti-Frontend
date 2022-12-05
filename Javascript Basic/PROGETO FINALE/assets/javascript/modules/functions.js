export let helpingIntervalToStartCounting = null;
export let conditionClickAgain=true;

export function plusNumberInput(myButtonsPlus){
    myButtonsPlus.addEventListener("click", ()=> {
        updateInput(1);
    });
}

export function minusNumberInput(myButtonsMinus){
    myButtonsMinus.addEventListener("click", ()=>  {
        updateInput(-1);
    });
}

export function eraseInput(myButtonsErase){
    myButtonsErase.addEventListener("click", ()=>  {
        clearInterval(helpingIntervalToStartCounting);
        conditionClickAgain=!conditionClickAgain;
        updateInput(0);
    });
}

export function helpInput(myButtonsHelp){
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

export function updateInput(number){
    if(number==0){
        document.querySelector(".input").value= //value update to zero
        '';
    }else{
        let valueOfCounter = Number(document.querySelector(".input").value); // select old value of Input and make sure we work with number
        document.querySelector(".input").value= //value update
        valueOfCounter + number;
    }

}


