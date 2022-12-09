//array oggetto particolare di JS

/* versione con stringhe -> array
let citta ="Cagliari,Milano,Torino,Roma";
let data = citta.split(',');
*/
//array -> stringa
let citta =["Cagliari","Milano","Torino","Roma"];
let data = citta.join(',');
console.log(citta);
console.log(data);

//mettere alla fine citta
citta.push("Firenze");
console.log(citta);

//eliminare ultimo elemento
citta.pop();
console.log(citta);

//mettere all'inzio citta
citta.unshift("Firenze");
console.log(citta);

//eliminare primo elemento
citta.shift();
console.log(citta);