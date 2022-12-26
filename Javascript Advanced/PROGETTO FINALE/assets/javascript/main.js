//-------import Funtions from httpAPI.js-------
import {getNews,getTopNewsId,getTopNews} from "./modules/httpAPI.js";
import {getNewFromID} from "./modules/httpAPI.js";
//-------import Funtions from utilities.js-------


//getNewFromID(8863);

let topTenNews =  await getTopNewsId(10);
console.clear();
await getTopNews(7);
console.log(topTenNews);
