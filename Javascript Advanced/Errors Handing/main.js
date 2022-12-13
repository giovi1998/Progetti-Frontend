function changeBgColor (element,color){
    element.style.backgroundColor=color;
}

const box= document.getElementById("myBox");
const box1= document.getElementById("myBox1");
//fai try prima e se non riesci manda a schermo l'errore con catch
try{
    //changeBgColor(box,"green");
    changeBgColor(box1,"green");
}catch(e){
    console.log(e);
} finally{ // fai questo sempre
    changeBgColor(box,"green");
}
