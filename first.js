// QUESTION NO : 01
// var city = prompt("Enter your city name :");

// if (city === "karachi") {
//    alert("Welcome to the city of lights");
// };

// QUESTION NO : 02
// var gender = prompt("Enter your gender :");

// if (gender === "male") {
//    alert("Good Morning Sir");
// }
// else if (gender === "female") {
//    alert("Good Morning Ma'am");
// }
// else {
//    alert("Please enter valid gender");
// }

// QUESTION NO : 03
// var signalColor = prompt("Enter signal color :");

// if (signalColor === "red") {
//     alert("Must Stop");
// }
// else if (signalColor === "yellow") {
//     alert("Ready to move");
//}
// else if (signalColor === "green") {
//     alert("Move Now");
// }
// else {
//    alert("Please enter valid signal color");
// }

// QUESTION NO : 04
// var fuel = prompt("Enter your car fuel level :");

// if (fuel <= 0.25) {
//    alert("Please refill your fuel");
// }
// else {
//    alert("You have enough fuel");
// }

// QUESTION NO : 05
// var a = 4;  // TRUE

// if (++a === 5) {
//    alert("given condition for variable a is true");
// }

// var b = 82;  // FALSE

// if (b++ === 83) {
//    alert("given condition for variable b is true");
// }

// var c = 12;

// if (c++ === 13) {  // FALSE 
//    alert("condition 1 is true");
// }

// if (c === 13) {  // TRUE
//    alert("condition 2 is true");
// }

// if (++c < 14) {  // FALSE
//     alert("condition 3 is true");
// }

// if (c === 14) {  // TRUE
//    alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//    alert("The cost equals");
// }
// if (true) {
//    alert("True");
// }

// if ("car" < "cat") {
//    alert("car is smaller than cat");
// }

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

