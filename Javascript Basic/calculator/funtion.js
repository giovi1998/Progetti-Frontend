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
            console.log( "Hai schiacciato : " + myButton.value);
            document.querySelector(".form-control").value=
            valueOfPrevious + myButton.value;
        });
    }
    myButtonFormNumbers(myButton);
}

    
    function eraseMemory(){
        let myButton=document.querySelector(".btn-outline-primary");
        myButton.addEventListener("click", function (e) {
            assignToFormEquation(0);
        });
    }



function myButtonEqualSign(equalSign){
    equalSign.addEventListener("click", function (e) {
        let num=0;
        let valueOfPrevious = document.querySelector(".form-control").value; //prendi valore precedente dentro al form
        console.log(valueOfPrevious);
        if(valueOfPrevious.includes('+') && valueOfPrevious.includes('*')){
            const myArray = valueOfPrevious.split('+'); //splita
            /*first scenario result=num1*num2+num3
            split divided num1*num2 and num3
            */
           if (myArray[0].includes('*')){
            console.log(myArray[0]);
            console.log(myArray[1]);
 
            multiplication(myArray[0],num);
            assignToFormEquation(ans+ parseInt(myArray[1]));
            console.log("numero salvato: " + ans + ' più parte dellarray ' + myArray[1] );
           }
           /*second scenario result=num1+num2*num3
            split divided num1 and num2*num3
            */
           else{
                console.log(myArray[1]);
                console.log(myArray[0]);
     
                multiplication(myArray[1],num);
                assignToFormEquation(ans+ parseInt(myArray[0]));
                console.log("numero salvato: " + ans + ' più parte dellarray ' + myArray[0] );
            }
          
            
        }else if(valueOfPrevious.includes('-') && valueOfPrevious.includes('*')){
            const myArray = valueOfPrevious.split('-'); //splita
            /*first scenario result=num1*num2+num3
            split divided num1*num2 and num3
            */
           if (myArray[0].includes('*')){
            console.log(myArray[0]);
            console.log(myArray[1]);
 
            multiplication(myArray[0],num);
            assignToFormEquation(ans - parseInt(myArray[1]));
            console.log("numero salvato: " + ans + ' meno parte dellarray ' + myArray[1] );
           }
           /*second scenario result=num1+num2*num3
            split divided num1 and num2*num3
            */
           else{
                console.log(myArray[1]);
                console.log(myArray[0]);
     
                multiplication(myArray[1],num);
                assignToFormEquation(ans - parseInt(myArray[0]));
                console.log("numero salvato: " + ans + ' meno parte dellarray ' + myArray[0] );
            }
          
            
        }
        else if(valueOfPrevious.includes('+') && valueOfPrevious.includes('-')){
            const myArray = valueOfPrevious.split('+'); //splita
            /*first scenario result=num1-num2+num3
            split divided num1-num2 and num3
            */
           console.log("Array [0]: "+ myArray[0]);
           console.log("Array [1]: "+ myArray[1]);

           if(myArray[0].includes('-')){//num1-num2 and num3
                minus(myArray[0],0);
                assignToFormEquation(ans+ parseInt(myArray[1]));
                console.log("numero salvato: " + ans);
           }else if(myArray[1].includes('-')){
            minus(myArray[1],0);//num1 and num2-num3
            assignToFormEquation(ans + parseInt(myArray[0]));
            console.log("numero salvato: " + ans);
           } 
        }else if(valueOfPrevious.includes('-') && (!valueOfPrevious.includes(('*')) || !valueOfPrevious.includes(('+')))){
            console.log(!valueOfPrevious.includes(('*')) || !valueOfPrevious.includes(('+')));
            minus(valueOfPrevious,num);
        }else  if(valueOfPrevious.includes('+') && (!valueOfPrevious.includes(('*')) || !valueOfPrevious.includes(('-')))){
            console.log(!valueOfPrevious.includes(('*')) || !valueOfPrevious.includes(('-')));
            sum(valueOfPrevious,num);
        }else if(valueOfPrevious.includes('*') && (!valueOfPrevious.includes(('+')) || !valueOfPrevious.includes(('-')))){
            console.log(!valueOfPrevious.includes(('+')) || !valueOfPrevious.includes(('-')));
            multiplication(valueOfPrevious,num);
        } else{
            alert('Errore caso non contemplato');
        }
        }); 
        console.log(ans);
}



function myButtonEnter(){
    let valueOfForm = document.querySelector(".form-control").addEventListener("keypress", function(event) {
        let num=0;
        let valueOfPrevious = document.querySelector(".form-control").value; //prendi valore precedente dentro al form
        console.log(valueOfPrevious);
        if(valueOfPrevious.includes('+') && valueOfPrevious.includes('*')){
            const myArray = valueOfPrevious.split('+'); //splita
            /*first scenario result=num1*num2+num3
            split divided num1*num2 and num3
            */
           if (myArray[0].includes('*')){
            console.log(myArray[0]);
            console.log(myArray[1]);
 
            multiplication(myArray[0],num);
            assignToFormEquation(ans+ parseInt(myArray[1]));
            console.log("numero salvato: " + ans + ' più parte dellarray ' + myArray[1] );
           }
           /*second scenario result=num1+num2*num3
            split divided num1 and num2*num3
            */
           else{
                console.log(myArray[1]);
                console.log(myArray[0]);
     
                multiplication(myArray[1],num);
                assignToFormEquation(ans+ parseInt(myArray[0]));
                console.log("numero salvato: " + ans + ' più parte dellarray ' + myArray[0] );
            }
          
            
        }else if(valueOfPrevious.includes('-') && valueOfPrevious.includes('*')){
            const myArray = valueOfPrevious.split('-'); //splita
            /*first scenario result=num1*num2+num3
            split divided num1*num2 and num3
            */
           if (myArray[0].includes('*')){
            console.log(myArray[0]);
            console.log(myArray[1]);
 
            multiplication(myArray[0],num);
            assignToFormEquation(ans - parseInt(myArray[1]));
            console.log("numero salvato: " + ans + ' meno parte dellarray ' + myArray[1] );
           }
           /*second scenario result=num1+num2*num3
            split divided num1 and num2*num3
            */
           else{
                console.log(myArray[1]);
                console.log(myArray[0]);
     
                multiplication(myArray[1],num);
                assignToFormEquation(ans - parseInt(myArray[0]));
                console.log("numero salvato: " + ans + ' meno parte dellarray ' + myArray[0] );
            }
          
            
        }
        else if(valueOfPrevious.includes('+') && valueOfPrevious.includes('-')){
            const myArray = valueOfPrevious.split('+'); //splita
            /*first scenario result=num1-num2+num3
            split divided num1-num2 and num3
            */
           console.log("Array [0]: "+ myArray[0]);
           console.log("Array [1]: "+ myArray[1]);

           if(myArray[0].includes('-')){//num1-num2 and num3
                minus(myArray[0],0);
                assignToFormEquation(ans+ parseInt(myArray[1]));
                console.log("numero salvato: " + ans);
           }else if(myArray[1].includes('-')){
            minus(myArray[1],0);//num1 and num2-num3
            assignToFormEquation(ans + parseInt(myArray[0]));
            console.log("numero salvato: " + ans);
           }
        }else if(valueOfPrevious.includes('-') && (!valueOfPrevious.includes(('*')) || !valueOfPrevious.includes(('+')))){
            console.log(!valueOfPrevious.includes(('*')) || !valueOfPrevious.includes(('+')));
            minus(valueOfPrevious,num);
        }else  if(valueOfPrevious.includes('+') && (!valueOfPrevious.includes(('*')) || !valueOfPrevious.includes(('-')))){
            console.log(!valueOfPrevious.includes(('*')) || !valueOfPrevious.includes(('-')));
            sum(valueOfPrevious,num);
        }else if(valueOfPrevious.includes('*') && (!valueOfPrevious.includes(('+')) || !valueOfPrevious.includes(('-')))){
            console.log(!valueOfPrevious.includes(('+')) || !valueOfPrevious.includes(('-')));
            multiplication(valueOfPrevious,num);
        } else{
            alert('Errore caso non contemplato');
        }
        }); 
        console.log(ans);
}


function assignToFormEquation(ans){
    document.querySelector(".form-control").value= //value update with ans
    ans;
}

function sum(valueOfPrevious,num){
    const myArray = valueOfPrevious.split('+'); //splita
    //ans=num1+num2;
    for(let i=0; i< myArray.length; i++){
    num = parseInt(myArray[i]) + num;
    console.log('numero sommato: '+ num);
    }
    ans=num;
    assignToFormEquation(ans);
}

function minus(valueOfPrevious,num){
    const myArray = valueOfPrevious.split('-'); //splita
    //ans=num1-num2;
    for(let i=0; i< myArray.length; i++){
    if(num==0){ //if num1 =0
        num = parseInt(myArray[i]); 
    }else if(num>parseInt(myArray[i])){ //if num1 > num2 -> num1-num2
        num = num-parseInt(myArray[i]); 
    }else{ //if num1<num2 num1-num2
        num = num-parseInt(myArray[i]);
    }
    console.log('numero sottrato: '+ num);
    }
    ans=num;
    assignToFormEquation(ans);
}

function multiplication (valueOfPrevious,num){
    const myArray = valueOfPrevious.split('*'); //splita
            //ans=num1+num2;
            for(let i=0; i< myArray.length; i++){
            if(num!==0){
                num = parseInt(myArray[i]) * num;
            }else{
                num = parseInt(myArray[i]);
            }
            console.log('numero multiplicato : '+ num);
            }
            ans=num;
            assignToFormEquation(ans);
}
myButtonEqualSign(equalSign);
myButtonEnter();
eraseMemory();
console.log(assignStyleToButton(myButtonsWarning,myButtonsSecondary));

