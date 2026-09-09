"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const MatExp = "2 + 3 * 2 - 4 * 6"
const MatExpModified = "2 + (3 * (2 - 4)) * 6";
const MatExpAnswer = 2 + (3 * (2 - 4)) * 6

printOut(MatExp);
printOut(MatExpModified + " = " + MatExpAnswer);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const millimeters = (25*1000) + (34*10);
const millPrInch = 25.4;
const sumPart2 = millimeters / millPrInch;

printOut(sumPart2);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const part3Days = 3;
const part3Hours = 12;
const part3Minutes = 14;
const part3Seconds = 45;
const part3Answer = (part3Days*24*60) + (part3Hours*60) + part3Minutes + (part3Seconds/60);

printOut(part3Answer);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const part4TotalDays = 6322.52 / (24*60);
const part4wholeDays = Math.floor(part4TotalDays);

let remainder = part4TotalDays - part4wholeDays;

const part4TotalHours = remainder * 24;
const part4WholeHours = Math.floor(part4TotalHours);

remainder = part4TotalHours - part4WholeHours;

const part4TotalMinutes = remainder * 60;
const part4WholeMinutes = Math.floor(part4TotalMinutes);

remainder = part4TotalMinutes - part4WholeMinutes;

const part4TotalSeconds = remainder * 60;
const part4WholeSeconds = Math.floor(part4TotalSeconds);


printOut(part4wholeDays + " days");
printOut(part4WholeHours + " hours");
printOut(part4WholeMinutes + " minutes");
printOut(part4WholeSeconds + " seconds");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const p5USD = 8.6;
const p5NOK = 76;
const p5NOKrate = p5NOK / p5USD;
const p5USDrate = p5USD / p5NOK;

const p5answerNOK = Math.round(54 * p5NOKrate);
const p5answerUSD = Math.round(477 * p5USDrate);

printOut("54 USD = " + p5answerNOK + " NOK");
printOut("477 NOK = " + p5answerUSD + " USD");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const p6Line = "There is much between heaven and earth that we do not understand.";
const p6LineLength = p6Line.length;
const p6char = p6Line.charAt(19);
const p6text = p6Line.substring(35, 43);
const p6word = p6Line.indexOf("earth");

printOut(p6Line);
printOut("The line has " + p6LineLength + " characters");
printOut("The character at index 19 is " + p6char);
printOut("The substring from 35 to 43 is " + p6text);
printOut("The word 'earth' starts at position " + p6word);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
5 > 3 ? printOut("5 > 3 is true") : printOut("5 > 3 is false");
7 >= 7 ? printOut("7 >= 7 is true") : printOut("7 >= 7 is false");
"a" > "b" ? printOut("'a' > 'b' is true") : printOut("'a' > 'b' is false");
"1" < "a" ? printOut("'1' < 'a' is true") : printOut("'1' < 'a' is false");
"2500" < "abcd" ? printOut("'2500' < 'abcd' is true") : printOut("'2500' < 'abcd' is false");
"arne" === "thomas" ? printOut("'arne' === 'thomas' is true") : printOut("'arne' === 'thomas' is false");
(2 === 5) ? printOut("2 === 5 is true") : printOut("2 === 5 is false");
("abcd" > "bcd") ? printOut("'abcd' > 'bcd' is true") : printOut("'abcd' > 'bcd' is false");

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const p8text1 = "254";
const p8text2 = "57.23";
const p8text3 = "25 kroner";

Number(p8text1);
Number(p8text2);
Number(p8text3);

parseInt(p8text1);
parseInt(p8text2);
parseInt(p8text3);

parseFloat(p8text1);
parseFloat(p8text2);
parseFloat(p8text3);

printOut("Number printOut:");
printOut(Number(p8text1));
printOut(Number(p8text2));
printOut(Number(p8text3));
printOut("parseInt printOut:");
printOut(parseInt(p8text1));
printOut(parseInt(p8text2));
printOut(parseInt(p8text3));
printOut("parseFloat printOut:");
printOut(parseFloat(p8text1));
printOut(parseFloat(p8text2));
printOut(parseFloat(p8text3));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
const r = Math.ceil(Math.random() * 360);

printOut("Random number between 1 and 360: " + r);

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
131 / 7;
Math.floor(131 / 7);
131 % 7;

printOut("131 days is " + Math.floor(131 / 7) + " weeks and " + (131 % 7) + " days");

printOut(newLine);