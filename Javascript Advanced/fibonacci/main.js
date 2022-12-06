function fibonacci (number){ //Fn = Fn-1 + Fn-2, where n > 1 F0=1, F1=1, F2=F1+F0=1 , F3=1+1=2, F4=2+1
    if(number==0||number==1){
        return 1;
    }else{
        return fibonacci(number-1)+fibonacci(number-2);
    }
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));