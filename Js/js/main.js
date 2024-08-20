//Strings
const myVariable = "Mathematics"

//methods
console.log(myVariable.length);
console.log(myVariable.charAt(10));
console.log(myVariable.indexOf("at"));
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.slice(5,8));
console.log(myVariable.toUpperCase());
console.log(myVariable.includes("mat"));
console.log(myVariable.split(""));

//Numbers
const myNumber = 30;
const myFloat = 30.01;
const myString = "30.123abx";

//Methods
console.log(myNumber === myString);
console.log(myString + 3);
console.log(Number(myString) === myNumber);
console.log(Number("Fatih"));
console.log(Number(false))
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myString));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString).toFixed(2)); //returns string not number
console.log(Number.parseInt(myString));
console.log(myFloat.toString());
console.log(Number.isNaN(myString));
console.log(isNaN(myString));