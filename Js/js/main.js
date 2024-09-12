//objects
const myObj = {name: "Fatih"};
console.log(myObj.name)

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "coffee",
        afternoon: "tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
};
console.log(anotherObj.action())

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrooom!";
    }
};
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck.engine())
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() { return "Whooosh!"};
console.log(car.engine());
const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function() { return "Vınnnn"};
console.log(tesla.engine());
console.log(Object.keys(vehicle));
console.log(Object.values(vehicle));
for (let key in vehicle) {
    console.log(vehicle[key]);
}

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "Johb Bonham"
};

//destructuring objects
const {vocals, guitar, bass, drums} = band;
console.log(vocals);

function sings({vocals}) {
    return `${vocals} sings!`
}
console.log(sings(band));

//Arrays
/* const myArray = ["A","B","C","D","E","F"];
const newArray = myArray.slice(2, 5);
console.log(newArray);
myArray.reverse();
console.log(myArray);
const newString = myArray.join();
console.log(newString);
const newerArray = newString.split(",");
console.log(newerArray);
const myArrayA = ["A","B","C"];
const myArrayB = ["D","E","F"];
const concatArray = myArrayB.concat(myArrayA);
console.log(concatArray)
const spreadArray = [...myArrayA, ...myArrayB];
console.log(spreadArray); */

//add elements
/* myArray[0] = "Fatih";
myArray[1] = 1994;
myArray[2] = true;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length-1]);
console.log(myArray[1]);
myArray.push("Buğra");
console.log(myArray);
const last = myArray.pop();
console.log(myArray);
console.log(last);
const newLength = myArray.unshift(1997);
console.log(myArray);
console.log(newLength);
const first = myArray.shift();
console.log(myArray);
console.log(first);
console.log(myArray[5]);
delete myArray[1];
console.log(myArray);
console.log(myArray[1]);
myArray[1] = 1994;
console.log(myArray);
myArray.splice(1,0, 42);
console.log(myArray) */

/* //functions
function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}
console.log(sum(2,3));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("omerfatihk@gmail.com"))

//anonymous function
const getUserNameFromEmail2 = function (email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail2("omerfatihk@gmail.com"))

//arrow function
const getUserNameFromEmail3 = (email) => {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail3("omerfatihk@gmail.com"))

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("fATİH")); */

/* //loops
let counter = 0;
let myLetter;
let name = "Fatih";
while(counter <=4) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter == 1) {
        counter += 2;
        continue;
    }
    if (myLetter == "t") break;
    counter++;
}

for (let i = 0; i<name.length; i++) {
    console.log(name.charAt(i));
}
let myNumber = 0;
do {
    console.log(myNumber);
    myNumber++;
} while (myNumber < 50); */


/* //user input
//alert("w r u ghei");
//let myBoolean = confirm("Ok === True\nCancel === False");
//console.log(myBoolean)
let name = prompt("Please enter your name.");
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log("You didn't enter your name.");
}

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

//math methods
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.pow(2,4));
console.log(Math.min(2,5,9));
console.log(Math.max(2,5,9));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

//code to return a random letter from my name
const myName = "Omer Fatih Konar";
len = myName.length;
rnd = Math.floor(Math.random()*len);
console.log(myName.charAt(rnd));

//if statements
let customerIsBanned = false;
let soup = "mercimek çorbası";
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = "No soup for you!"
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}.`;
} else {
    reply = "Sorry we are out of soup.";
}
console.log(reply);

let testScore = 59;
let grade;
let collegeStudent = true;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >=80) {
    grade = "B";
} else if (testScore >=70) {
    grade = "C";
} else if (testScore >=600) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F"
    }
}
console.log(grade)

//switch statements
switch (Math.floor(Math.random()*4 + 1)) {
    case 1:
        console.log(1);
        break;
    
    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;
    
    default:
        console.log("No match");
}

let playerOne = "scissors";
let computer = "rock";

switch (playerOne) {
    case computer:
        console.log("Tie!");
        break;
    case "rock":
        if (computer == "paper") {
            console.log("computer wins!");
        } else {
            console.log("player wins!");
        }
        break;
    case "paper":
        if (computer == "scissors") {
            console.log("computer wins!");
        } else {
            console.log("player wins!");
        }
        break;
    default:
        if (computer == "rock") {
            console.log("computer wins!");
        } else {
            console.log("player wins!");
        }
        break;
}

//ternary operator

soup = "Mercimek"
response = soup ? "Yes we have soup." : "Sorry no soup today.";
console.log(response)
customerIsBanned = false;
let soupAccess = customerIsBanned 
? "No soup for you." 
: soup 
? `Yes we have ${soup} today` 
: "Sorry no soup today.";
console.log(soupAccess);

testScore = 79;
grade = 
testScore >= 90 ? "A": 
testScore >= 80 ? "B": 
testScore >= 70 ? "C": 
testScore >= 60 ? "D":
"F";
console.log(grade);

playerOne = "rock";
computer = "scissors";
let result = 
playerOne === computer ? "Tie!":
playerOne === "rock" && computer === "paper" ? "Computer wins.":
playerOne === "paper" && computer === "scissors" ? "Computer wins.":
playerOne === "scissors" && computer === "rock" ? "Computer wins.":
"Player wins.";
console.log(result) */