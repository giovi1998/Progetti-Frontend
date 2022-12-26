const urlOfData='https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty';

export async function getNewFromID(itemNumber){
    const URL='https://hacker-news.firebaseio.com/v0/item/'+itemNumber+'.json?print=pretty';
    let dataOfTheNew;
    fetch(URL)
    .then(res => res.json())
    .then(function(json){
        dataOfTheNew=json;
        console.log('Job done with item: ' + itemNumber );
        console.log(dataOfTheNew);
        return dataOfTheNew;
    });
}


async function setNewsInMap(newsAsObject,numberOfNews){
    let myMapWithNews = new Map();
    
    for(let i=0;i<numberOfNews;i++) {
        let idOfTheNew=newsAsObject[i];//id of the News
        myMapWithNews.set(i,getNewFromID(idOfTheNew));
    }
    console.log('La mappa degli oggetti è : '+ myMapWithNews);
    console.log(myMapWithNews.values());
    return myMapWithNews;
}

export async function getNews(numberOfNews){
    let news;
    let mapOfNews;
        fetch(urlOfData)
        .then(res => res.json())
        .then(function(json){
            news=json;
            mapOfNews = setNewsInMap(news,numberOfNews);
            return mapOfNews;
        })
        .catch(e=>{
            console.log('Error type: '+e);
        })
}

export async function getAllNews(){
    let news;
    fetch(urlOfData)
     .then(res => res.json())
     .then(function(json){
        news=json;
        console.log(news);
        console.log(typeof news)
       return news;
     });
}

