const myButtonsWarning = document.querySelectorAll(".btn.btn-warning");
const myButtonsSecondary = document.querySelectorAll(".btn.btn-secondary");
const equalSign = document.querySelector(".btn.btn-dark");
let ans; //risultato

function assignStyleToWButton (myButtonsWarning){
    for (let i = 0; i < myButtonsWarning.length; i++){
        let buttonStyle = myButtonsWarning[i];
        buttonStyle.setAttribute('class','myButtonsWarning');
    }
}

function assignStyleToSButton (myButtonsSecondary){
    for (let i = 0; i < myButtonsSecondary.length; i++){
        let buttonStyle = myButtonsSecondary[i];
        buttonStyle.setAttribute('class','myButtonsSecondary');
    }
}

function assignStyleToButton(myButtonsWarning,myButtonsSecondary){
    assignStyleToSButton(myButtonsSecondary);
    assignStyleToWButton(myButtonsWarning);
    console.log('Set Styles');
}

for (var i = 0; i < myButtonsWarning.length; i++) {
let myButton=myButtonsWarning[i];
console.log(myButton.value);

function myButtonFormNumbers(myButton){//takes values of the Numbers and put in the input for the user
    myButton.addEventListener("click", function (e) {
        let valueOfPrevious = document.querySelector(".form-control").value; 
        console.log(myButton.value);
        document.querySelector(".form-control").value=
        valueOfPrevious + myButton.value;
    });
}
myButtonFormNumbers(myButton);
}

for (var i = 0; i < myButtonsSecondary.length; i++) { //takes values of the buttons and put in the input for the user
    let myButton=myButtonsSecondary[i];
    console.log(myButton.value);
    
    function myButtonFormNumbers(myButton){
        myButton.addEventListener("click", function (e) {
            let valueOfPrevious = document.querySelector(".form-control").value; 
            console.log(myButton.value);
            document.querySelector(".form-control").value=
            valueOfPrevious + myButton.value;
        });
    }
    myButtonFormNumbers(myButton);
}
    

function myButtonEqualSign(equalSign){
    let resultOfEquetions=0;
    equalSign.addEventListener("click", function (e) {

        let valueOfPrevious = document.querySelector(".form-control").value; 
        valueOfPrevious = valueOfPrevious;
        console.log(valueOfPrevious);
        for(let i=0; valueOfPrevious[i]=='/n';i++){
            switch (valueOfPrevious[i]){
                case '+':
                    if(valueOfPrevious[0]){
                        alert("Hai messo un segno meno,più o di divisione. Riprova!")
                        break;
                    }else{
                        resultOfEquetions=valueOfPrevious[i-1]+valueOfPrevious[i+1];
                        console.log(resultOfEquetions);
                        break;
                    }
                case '-':
                resultOfEquetions=valueOfPrevious[i-1]-valueOfPrevious[i+1];
                console.log(resultOfEquetions);
                break;
                case '/':
                resultOfEquetions=valueOfPrevious[i-1]/valueOfPrevious[i+1];
                console.log(resultOfEquetions);
                break;
            }
        }
        console.log(resultOfEquetions);
    });
}
myButtonEqualSign(equalSign);
console.log(assignStyleToButton(myButtonsWarning,myButtonsSecondary));

