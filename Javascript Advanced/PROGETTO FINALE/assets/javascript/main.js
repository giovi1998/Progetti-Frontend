//----------------import Funtions from httpAPI.js----------------
import {getTopNewsId,getTopNews,datas,counterOfNews} from "./modules/httpAPI.js";

//----------------import Funtions from CreateElements.js----------------
import {createCardWithoutImage} from "./modules/createElementsHTML.js";
import {createDiv} from "./modules/createElementsHTML.js";
import {createP} from "./modules/createElementsHTML.js";
import {createH1} from "./modules/createElementsHTML.js";
import {createButton} from "./modules/createElementsHTML.js";
import {styleButton} from "./modules/createElementsHTML.js";
import {appendElementToADiv} from "./modules/createElementsHTML.js";

await getTopNewsId();

//----------------creeate H1---------------- 
let content = "HACKER NEWS LETTER";
let className = "title is-1 mt-5 has-text-white";
let h1= createH1(className,content);
//----------------append to the H1 to body element----------------
document.body.append(h1);

//----------------Create Div of the Header with Paragraph and title----------------
let divHeader = createDiv("mr-5 ml-5");
let content1 = "Last News of the Hacker News. Below you can see Title - Time when it's public"+
"I tried to create an Automatic pictures from OpenAI DELL-EI.";
let content2 = "For more information see the GitHub repository.";
let p = createP(content1);
let p1 = createP(content2);
//----------------append p element to div element----------------
appendElementToADiv(divHeader,p);
appendElementToADiv(divHeader,p1);

//----------------Container with all cards----------------
let divMain = createDiv("container is-flex");
//----------------Get info----------------
await getTopNews(10);
//----------------Create Card image----------------
for(let i=0;i<10;i++){
    createCardWithoutImage(i,divMain,datas[i].url,datas[i].title,datas[i].time);
}
//Create Load More News
let myButtonsLoad = createButton('Load More News');
styleButton(myButtonsLoad,'button buttonMinus is-info is-light mt-2 mb-6');
document.body.append(myButtonsLoad);


    
myButtonsLoad.addEventListener("click", ()=>loadNews(),false);
    
async function loadNews(){
    //nel mentre che carica
    myButtonsLoad.className='button is-warning is-loading mt-2 mb-6';
    let start=datas.length;
    let end =datas.length+10;
    console.log("Start is"+start);
    console.log("End is"+ end);
    //debugger;
    await getTopNews(end);
    for(let i=start;i<end;i++){
        createCardWithoutImage(i,divMain,datas[i].url,datas[i].title,datas[i].time);
    }
    styleButton(myButtonsLoad,'button buttonMinus is-info is-light mt-2 mb-6');
    
}

