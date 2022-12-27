//-------import Funtions from httpAPI.js-------
import {setImageFromTitle,getTopNewsId,getTopNews} from "./modules/httpAPI.js";
import {getNewFromID} from "./modules/httpAPI.js";

//-------import Funtions from CreateElements.js-------
import {createDiv} from "./modules/createElementsHTML.js";
import {createP} from "./modules/createElementsHTML.js";
import {createH1} from "./modules/createElementsHTML.js";
import {createButton} from "./modules/createElementsHTML.js";
import {createInput} from "./modules/createElementsHTML.js";
import {styleButton} from "./modules/createElementsHTML.js";
import {appendElementToADiv} from "./modules/createElementsHTML.js";

//-------import Funtions from API_KEY.js-------
import {OPENAI_API_KEY} from "./modules/API_KEY.js";

//getNewFromID(8863);

let arrayOfNewsID =  await getTopNewsId();
await getTopNews(10);
//creeate H1 
let content = "HACKER NEWS LETTER";
let className = "title is-1 mt-5";
let h1= createH1(className,content);

//append to the H1 to body element
document.body.append(h1);

//Create a new container
let divContent = createDiv("mr-5 ml-5");

let content1 = "Last News of the Hacker News. Below you can see Title - Time when it's public"+
"I tried to create an Automatic pictures from OpenAI DELL-EI.";
let content2 = "For more information see the GitHub repository.";
let p = createP(content1);
let p1 = createP(content2);
//append p element to div element
appendElementToADiv(divContent,p);
appendElementToADiv(divContent,p1);
setImageFromTitle(OPENAI_API_KEY,"Tree",1,"256x256");
await getTopNews(20);