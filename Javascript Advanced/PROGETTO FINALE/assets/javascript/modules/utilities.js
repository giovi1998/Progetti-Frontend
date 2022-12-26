export function createDiv(className){
    // 1. Create <div> element
    let div = document.createElement('div');
    // 2. Set its class
    div.className = className;
    //append to the body
    document.body.append(div);
    return div;
 }

 export function createP(content,className){
    // 1. Create <p> element
    let p = document.createElement('p');
    // 2. Set class and style
    p.className = className;
    // 3. Set content
    p.textContent = content;
    return p;
 }

 export function getItemFromJSON(json){
   let arrayOfTenNews=map
   return 
 }

 export function createH1(className, content){
    // 1. Create <H1> element
    let h1 = document.createElement('H1');
    let cont = document.createTextNode(content);
    // 2. Set its class
    h1.className = className;
    h1.appendChild(cont);
    return h1;
 } 
 export function appendElementToADiv(div,element){
    div.appendChild(element);
 }