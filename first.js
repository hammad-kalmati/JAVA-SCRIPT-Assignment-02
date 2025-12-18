// QUESTION NO : 01
var city = prompt("Enter your city name :");

if (city === "karachi") {
    alert("Welcome to the city of lights");
};

// QUESTION NO : 02
var gender = prompt("Enter your gender :");

if (gender === "male") {
    alert("Good Morning Sir");
}
else if (gender === "female") {
    alert("Good Morning Ma'am");
}
else {
    alert("Please enter valid gender");
}

// QUESTION NO : 03
var signalColor = prompt("Enter signal color :");

if (signalColor === "red") {
    alert("Must Stop");
}
else if (signalColor === "yellow") {
    alert("Ready to move");
}
else if (signalColor === "green") {
    alert("Move Now");
}
else {
    alert("Please enter valid signal color");
}

// QUESTION NO : 04
var fuel = prompt("Enter your car fuel level :");

if (fuel <= 0.25) {
    alert("Please refill your fuel");
}
else {
    alert("You have enough fuel");
}

// QUESTION NO : 05
var a = 4;  

if (++a === 5) {  // TRUE
    alert("given condition for variable a is true");
}

var b = 82;  

if (b++ === 83) {  // FALSE
    alert("given condition for variable b is true");
}

var c = 12;

if (c++ === 13) {  // FALSE
    alert("condition 1 is true");
}

if (c === 13) {  // TRUE
    alert("condition 2 is true");
}

if (++c < 14) {  // FALSE
    alert("condition 3 is true");
}

if (c === 14) {  // TRUE
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// QUESTION NO : 06
var sub1 = +prompt("Phele subject ke marks enter krein :");
var sub2 = +prompt("Doosre subject ke marks enter krein :");
var sub3 = +prompt("Teesre subject ke marks enter krein :");
var totalMarks = +prompt("Total marks kitne hain ?");

var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade;

if (percentage >= 80) {
    grade = "A-one";
}
else if (percentage >= 70) {
    grade = "A";
}
else if (percentage >= 60) {
    grade = "B";
}
else {
    grade = "Fail";
}

var remarks;

if (grade === "A-one") {
    remarks = "Excellent";
}
else if (grade === "A") {
    remarks = "Good";
}
else if (grade === "B") {
    remarks = "You need to improve";
}
else {
    remarks = "Sorry";
}

document.write("<h2> Marks Sheet </h2>");
document.write("Total Marks : " + totalMarks);
document.write("<br> Marks Obtained : " + obtainedMarks);
document.write("<br> Percentage : " + percentage + "%");
document.write("<br> Grade : " + grade);
document.write("<br> Remarks : " + remarks);

// QUESTION NO : 07
var num1 = 4;
var secretNum = prompt("Enter a secret number between 1 and 10");

if (secretNum == num1) {
    alert("Bingo! Correct answer");
}
else if (secretNum == num1 + 1) {
    alert("Close enough to the correct answer");
}
else {
    alert("Try again");
}

// QUESTION NO : 08
var num2 = prompt("Enter a number :");

if (num2 % 3 === 0) {
    alert("Number is divisible by 3");
}
else {
    alert("Number is not divisible by 3");
}

// QUESTION NO : 09
var num3 = prompt("Enter a number:");

if (num3 % 2 === 0) {
    alert("Number is Even");
}
else {
    alert("Number is Odd");
}

// QUESTION NO : 10
var temprature = prompt("Enter the temprature :");

if (temprature > 40) {
    alert("It is too hot outside.")
}
else if (temprature > 30) {
    alert("The Weather today is Normal.")
}
else if (temprature > 20) {
    alert("Today’s Weather is cool.")
}
else if (temprature > 10) {
    alert("Temperature is cool.")
}
else {
    alert("It is too cold outside.")
}

// QUESTION NO : 11
var num4 = Number(prompt("Enter first number"));
var num5 = Number(prompt("Enter second number"));
var operator = prompt("Enter operation (+, -, *, /, %)");

var result;

if (operator === "+") {
    result = num4 + num5;
}
else if (operator === "-") {
    result = num4 - num5;
}
else if (operator === "*") {
    result = num4 * num5;
}
else if (operator === "/") {
    result = num4 / num5;
}
else if (operator === "%") {
    result = num4 % num5;
}
else {
    alert("Invalid Operator");
}
alert("Result is: " + result);
