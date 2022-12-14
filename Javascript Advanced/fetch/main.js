
/*ERRORI CORS
https://www.youtube.com/watch?v=PNtFSVU-YTI
*/

//Fetch API fornisce un'interfaccia per ottenere risorse attraverso la rete
function caricaFile (){
    let URL='https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    return fetch(URL);
}

async function convertiJson(){
    const fileDaVedere = await caricaFile();
    console.log(fileDaVedere);
    let data= await fileDaVedere.json();
    console.log(data);
}

convertiJson();

