class Train{
    #isRunning= false;
    constructor (value){
        this.nameOfTheTrain=value;
    }
    depart() {
        this.#isRunning=true;
    }
    stop() {
        this.#isRunning=false;
    }
}

let train1=new Train("Gio train");
console.log(train1);
train1.depart();
console.log(train1);
train1.stop();
console.log(train1);