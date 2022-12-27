//-------import Funtions from httpAPI.js-------
import {setImageFromTitle,getTopNewsId,getTopNews} from "./modules/httpAPI.js";
import {getNewFromID} from "./modules/httpAPI.js";
//-------import Funtions from utilities.js-------

//-------import Funtions from API_KEY.js-------
import {OPENAI_API_KEY} from "./modules/API_KEY.js";

//getNewFromID(8863);

let topTenNews =  await getTopNewsId(10);
console.clear();
await getTopNews(7);
console.log(topTenNews);
setImageFromTitle(OPENAI_API_KEY,"Tree",1,"256x256");