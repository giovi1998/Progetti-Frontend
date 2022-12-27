//----------------import Funtions from httpAPI.js----------------
import {setImageFromTitle,getTopNewsId,getTopNews} from "./modules/httpAPI.js";
import {getNewFromID} from "./modules/httpAPI.js";

//----------------import Funtions from CreateElements.js----------------
import {createDiv} from "./modules/createElementsHTML.js";
import {createP} from "./modules/createElementsHTML.js";
import {createH1} from "./modules/createElementsHTML.js";
import {createButton} from "./modules/createElementsHTML.js";
import {createCard} from "./modules/createElementsHTML.js";
import {styleButton} from "./modules/createElementsHTML.js";
import {appendElementToADiv} from "./modules/createElementsHTML.js";

//----------------import Funtions from API_KEY.js----------------
import {OPENAI_API_KEY} from "./modules/API_KEY.js";

await getTopNewsId();
await getTopNews(10);
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

createCard(divMain,"https://i.imgur.com/qLKO9VM.jpeg","www.google.com","Ciao a tutti sono il titolo",450);
createCard(divMain,"https://source.unsplash.com/user/c_v_r","www.google.com","Ciao a tutti sono il titolo",450);
createCard(divMain,"https://source.unsplash.com/user/c_v_r","www.google.com","Ciao a tutti sono il titolo",450);
createCard(divMain,"https://source.unsplash.com/user/c_v_r","www.google.com","Ciao a tutti sono il titolo",450);
createCard(divMain,"https://source.unsplash.com/user/c_v_r","www.google.com","Ciao a tutti sono il titolo",450);
createCard(divMain,"https://source.unsplash.com/user/c_v_r","www.google.com","Ciao a tutti sono il titolo",450);
createCard(divMain,"https://source.unsplash.com/user/c_v_r","www.google.com","Ciao a tutti sono il titolo",450);
createCard(divMain,"https://source.unsplash.com/user/c_v_r","www.google.com","Ciao a tutti sono il titolo",450);
createCard(divMain,"https://source.unsplash.com/user/c_v_r","www.google.com","Ciao a tutti sono il titolo",450);
createCard(divMain,"https://source.unsplash.com/user/c_v_r","www.google.com","Ciao a tutti sono il titolo",450);

//Create Load More News
let myButtonsLoad = createButton('Load More News');
styleButton(myButtonsLoad,'button buttonMinus is-danger is-light mt-2 mb-6');
document.body.append(myButtonsLoad);
setImageFromTitle(OPENAI_API_KEY,"Tree",1,"256x256");
await getTopNews(20);