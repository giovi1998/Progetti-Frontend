//----------------import Funtions from httpAPI.js----------------
import {getTopNewsId,getTopNews,datas,counterOfNews} from "./modules/httpAPI.js";

//----------------import Funtions from CreateElements.js----------------
import {createCardWithoutImage} from "./modules/htmlElements.js";
import {createDiv} from "./modules/htmlElements.js";
import {createP} from "./modules/htmlElements.js";
import {createH1} from "./modules/htmlElements.js";
import {createButton} from "./modules/htmlElements.js";
import {styleButton} from "./modules/htmlElements.js";
import {appendElementToADiv} from "./modules/htmlElements.js";

await getTopNewsId();

//----------------creeate H1---------------- 
let content = "HACKER NEWS LETTER";
let className = "title is-3 has-text-white mt-5 mr-5 ml-5";
let h1= createH1(className,content);
//----------------append to the H1 to body element----------------
document.body.append(h1);

//----------------Create Div of the Header with Paragraph and title----------------
let divHeader = createDiv("mr-5 ml-5");
let content1 = "Last News of the Hacker News. Below you can see Title, link to the news and Time when it's published. For more information see the"; 
let p = createP(content1);
//----------------append p element to div element----------------
appendElementToADiv(divHeader,p);
let urlOfTheNews = document.createElement('a');
urlOfTheNews.className = "content has-text-info";
urlOfTheNews.target = "_blank";
urlOfTheNews.href="https://github.com/giovi1998/HackerNews.git";
urlOfTheNews.textContent=' GitHub repository.';
p.appendChild(urlOfTheNews);

//----------------Container with all cards----------------
let divMain = createDiv("container");
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
