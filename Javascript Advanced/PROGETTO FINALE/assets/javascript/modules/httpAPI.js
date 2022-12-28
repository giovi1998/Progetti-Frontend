const urlOfData = "https://hacker-news.firebaseio.com/v0/newstories.json" // URL dalla quale estrapolare i dati

//----------------Variabili globali----------------
let dataOfTopTen;
export let datas = new Array;
let dataOfElementInCache;
export let counterOfNews=0; //usato in TopNews perchè cosi non ricarica stesse informazioni


export async function getNewFromID(itemNumber){
    const URL='https://hacker-news.firebaseio.com/v0/item/'+itemNumber+'.json?print=pretty';
    let newsElement = await axios.get(URL)
    .then(function (response) {
        // handle success
        //console.log(response.data + ' dati in cache');
        console.log(response.data);
        let timeConvert = timeConverter(response.data.time);
        dataOfElementInCache=response.data;
        dataOfElementInCache.time=timeConvert;
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
      datas.push(dataOfElementInCache);//id of the News    
  }
  console.log(datas);
  }else{
    for(let i=counterOfNews;i<numberOfNews;i++){
      await getNewFromID(dataOfTopTen[i]);
      datas.push(dataOfElementInCache);//id of the News
    }
  }
  counterOfNews=numberOfNews;
  console.log('Nel counter sono stati aggiunti: '+ counterOfNews);
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

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = ('0'+a.getHours()).slice(-2);
  var min = ('0'+a.getMinutes()).slice(-2);
  var sec = ('0'+a.getSeconds()).slice(-2);
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
