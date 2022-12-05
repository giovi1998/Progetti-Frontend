export function createDiv(className){
    // 1. Create <div> element
    let div = document.createElement('div');
    // 2. Set its class
    div.className = className;
    //append to the body
    document.body.append(div);
    return div;
 }

 export function createP(content){
    // 1. Create <div> element
    let p = document.createElement('p');
    // 2. Set content
    p.textContent = content;
    return p;
 }

 export function createH1(className, content){
    // 1. Create <div> element
    let h1 = document.createElement('H1');
    let cont = document.createTextNode(content);
    // 2. Set its class
    h1.className = className;
    h1.appendChild(cont);
    return h1;
 }

 export function appendH1(h1){
    document.body.append(h1);
 }
 

export function createButton(innerOfButton){
    // 1. Create the button
    let button = document.createElement("button");
    button.innerHTML = innerOfButton;
    return button;
 }

 export function createInput(){
    let inputForm = document.createElement("input");
    inputForm.setAttribute("type", "text");
    inputForm.setAttribute("class", "input is-loading is-dark mb-6");
    inputForm.setAttribute("placeholder", "0");
    return inputForm;
 }
 
 export function styleButton(button, value){
    //Set its class and style
    button.className = ''+value;

 }

 export function appendElementToADiv(div,element){
    div.appendChild(element);
 }


 

 

 