const toSend ={
    name:"Gio",
    age:24,
    occupation: "QA Tester"
}

const jsonString = JSON.stringify(toSend);
const xhr = new XMLHttpRequest();
xhr.open("POST", "receive.php",true);
xhr.setRequestHeader("Content-Type", "applicatio/json");
console.log(xhr.send(jsonString));
console.log(jsonString);