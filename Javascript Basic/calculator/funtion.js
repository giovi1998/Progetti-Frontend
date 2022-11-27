

const myButtons = document.querySelectorAll(".btn.btn-warning");

for (let i = 0; i < myButtons.length; i++){
    let buttonStyle = myButtons[i];
    buttonStyle.setAttribute('class','.btnWarningStyles');
}

console.log(myButtons[0].getAttribute('class'));
console.log(myButtons[0].getAttribute('value'));

