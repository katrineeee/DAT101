"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

const WakeUpTime = 7;
const time = 7;
if (WakeUpTime === time) {
    printOut("You can take the bus to school.");
} else if (time === 8) {
    printOut("You can take the train to school.");
} else {
    printOut("You can take the car to school.");
}


printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

const part4Number = 3;
if (part4Number > 0) {
    printOut("The number is positive.");
} else if (part4Number < 0) {
    printOut("The number is negative.");
} else {
    printOut("The number is zero.");
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");

const imageMinSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;

printOut(`Image size uploaded = ${imageUserSize} MB`);
if (imageUserSize >= imageMinSize) {
    if (imageUserSize <= imageMaxSize) {
        printOut("The image is the right size. Thank you!");
    } else {
        printOut("The image is too large.");
    }
} else {
    printOut("The image is too small.");
}

printOut(newLine);

printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
const monthList = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("The month is " + monthName);
if (monthName.includes("r")) {
    printOut("You have to take vitamin D.");
} else {
    printOut("You don't have to take vitamin D.");
}

switch (monthName) {
    case "January":
    case "March":
    case "May":
    case "June":
    case "August":
    case "October":
    case "December":
printOut("31 days in this month.");
        break;
    case "February":
        printOut("28 days in this month.");
        break;
default:
        printOut("30 days in this month.");
        break;
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const monthList2 = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth2 = monthList2.length;
const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth2)];

printOut("The month is " + monthName2);
if (monthName2 === "March" || monthName2 === "May") {
    printOut("The art gallery is closed this month.");
} else if (monthName2 === "April") {
    printOut("The art gallery is open on the premises next door. Welcome!");
} else {
    printOut("The art gallery is open this month. Welcome!");
}

printOut(newLine);