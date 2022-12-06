const companies = [
{name: "HPE", category: "techonology", start:1928, end:2003},
{name: "HP", category: "techonology", start:1925, end:2013},
{name: "BMW", category: "Auto", start:1925, end:2023},
{name: "Fiat", category: "Auto", start:1999, end:2023},
{name: "Intesa San Paolo", category: "Finance", start:2000, end:2023},
{name: "Banco di sardegna", category: "Finance", start:2000, end:2023}
];

const ages = [33,22,11,23,45,23,78,56,98];

//forEach no returns, runs the function
companies.forEach(function(Company){//like i element
console.log(Company.name);
});

//filter return all the elements that filter
const canDrink = ages.filter(function(age){
    if(age >=18){
        console.log("age is Equal: " + age);
        return true;
    }
});

const financeCompanies= companies.filter(function(Company){
    if(Company.category=='Finance'){
        return true;
    }
});

console.log(financeCompanies);

//map return new array

const companyNames = companies.map(function(Company){
    return Company.name;
});

//18-> (18*2)^1/2=8,124
const agesSquareMultiTwo = ages.map(age =>age*2)
.map(age =>Math.sqrt(age));

console.log(agesSquareMultiTwo);
console.log(companyNames);

// Sort array

const agesSorted = ages.sort(function(age1,age2){
    if(age1>age2){
        return 1;
    }else{
        return -1;
    }
});

console.log(agesSorted);

//reduce takes two parameters funtions executed and total initial value=0

const ageSum = ages.reduce(function(total,age){
    return total+age;
},0); 