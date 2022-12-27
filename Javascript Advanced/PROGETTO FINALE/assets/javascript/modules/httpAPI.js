const urlOfData = "https://hacker-news.firebaseio.com/v0/newstories.json" // URL dalla quale estrapolare i dati

//----------------Variabili globali----------------
let dataOfTopTen;
let datas = new Array;
let dataOfElementInCache;
let counterOfNews=0; //usato in TopNews perchè cosi non ricarica stesse informazioni


export async function getNewFromID(itemNumber){
    const URL='https://hacker-news.firebaseio.com/v0/item/'+itemNumber+'.json?print=pretty';
    let newsElement = await axios.get(URL)
    .then(function (response) {
        // handle success
        console.log(response.data);
        dataOfElementInCache=response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
}

export async function getNews(){
    let newsElement = await axios.get(urlOfData)
    .then(function (response) {
        // handle success
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
}

export async function getTopNews(numberOfNews){
  if(counterOfNews==0){
    for(let i=0;i<numberOfNews;i++){
      await getNewFromID(dataOfTopTen[i]);
      //console.log(dataOfElementInCache);
      datas.push(dataOfElementInCache);//id of the News
  }
  console.log(datas);
  }else{
    for(let i=counterOfNews;i<numberOfNews;i++){
      await getNewFromID(dataOfTopTen[i]);
      //console.log(dataOfElementInCache);
      datas.push(dataOfElementInCache);//id of the News
    }
  }
  counterOfNews=numberOfNews;
  console.log(datas);
    
}

export async function getTopNewsId(){
    await getTopNewsFromApi(); //attendi che si setti l'array con le informazioni
    return dataOfTopTen;
}

async function getTopNewsFromApi(){
    //----------------Prendi tutti i 500 dati----------------
    await axios.get(urlOfData) 
    .then(function (response) {
        //handle success
        console.log(response.data);
        let array=new Array;
        for(let i=0;i<500;i++) {
            array.push(response.data[i]);//id of the News
        }
        dataOfTopTen=array;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
}   

export async function setImageFromTitle(OPENAI_API_KEY,description,numberOfImages,size){
// axios POST request
const options = {
  url: 'https://api.openai.com/v1/images/generations',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': `Bearer ${OPENAI_API_KEY}`
  },
  responseType: 'json', // default
  data: {
    prompt: description,
    n:numberOfImages,
    size: size
  }
};

axios(options)
  .then(response => {
    console.log(response.status);
    /*----------------If you want all'information of your request-response----------------
    console.log(response);*/

    console.log(response.data.data[0]);
    return response.data.data[0];
  });
}
