//main thread e worker thread
/*codice sincrono lavora in modo sequenziale
const btn=document.querySelector('button');
btn.addEventListener('click',()=>{
    alert("ciao");

    let pElem= document.createElement('p');
    pElem.textContent= 'Creazione paragrafo';
    document.body.appendChild(pElem);
})
*/

/*codice asincrono con Callback metodo vecchio
function loadAsset(url,typeOfData,callback){
let xhr = new XMLHttpRequest ();
xhr.open ('Get',url);
xhr.responseType=typeOfData;
xhr.onload = function (){
    callback(xhr.response);
};

xhr.send();
}

function displayImage(blob){
    let objectURL =URL.createObjectURL(blob);
    let image =document.createElement('img');
    image.src=objectURL;
    document.body.appendChild(image);
}


loadAsset('https://ak.picdn.net/shutterstock/videos/11773709/thumb/10.jpg','blob',displayImage);
*/

/*promise ci permette di non utilizzare callback
chooseToppings() //promise dentro questa funzione devi mettere return new promises
.then (function(toppings){
    return placeOrder(toppings);
})
.then (function(order){
    return collectOrder(order);
})
.then (function(pizza){
    return eatPizza(pizza);
})
.catch(failureCallback);
*/

//my Promises
let timeoutPromise = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve('Success!'); //return altrimenti per avere un errore fai reject("errore fatto per qualcosa");
    }, 2000);
});

//rendo la funzione asyncrona ->restituisce promise
//await aspetta finche non ha il valore
async function hello(){
    return greeting = await Promise.resolve('ciao');
}
//hello() 

hello().then(function(value){
    console.log(value);
})
