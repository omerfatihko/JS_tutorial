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
console.log(result)