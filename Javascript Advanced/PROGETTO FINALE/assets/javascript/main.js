//-------import Funtions from httpAPI.js-------
import {getDataID} from "./modules/httpAPI.js";
import {getDataNews} from "./modules/httpAPI.js";getDataNews
//-------import Funtions from utilities.js-------
import {appendElementToADiv, createP} from "./modules/utilities.js";
import {createDiv} from "./modules/utilities.js";

//globali
let dataId;

let divMain=createDiv();
let divMain1=createDiv();
getDataNews('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')
.then(res => res.json())
.then(function(json){
    dataId=json;
    console.log(dataId);
});
/*
getDataID('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
.then(res => res.json())
.then(function(json){
    dataId=json;
    console.log(dataId);
})
.then(function(res){
    
    
});

*/

/*
getDataID('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
.then(res => res.json())
.then(function(json){
    dataId=json;
    console.log(dataId);
    /*let title = data.products[1].title;
    let desc = data.products[1].description;
    let p1 = createP(title,"mb-2 mr-6 ml-6");
    let p2 = createP(desc,"mb-6 mr-6 ml-6");
    let title2 = data.products[2].title;
    let desc2 = data.products[2].description;
    let p12 = createP(title2,"mb-2 mr-6 ml-6");
    let p22 = createP(desc2,"mb-6 mr-6 ml-6");
    per andare altra riga
    appendElementToADiv(divMain,p1);
    appendElementToADiv(divMain,p2)
    appendElementToADiv(divMain1,p12);
    appendElementToADiv(divMain1,p22)
    appendElementToADiv(divMain,p1);
    appendElementToADiv(divMain,p2)
    appendElementToADiv(divMain,p12);
    appendElementToADiv(divMain,p22)
})*/