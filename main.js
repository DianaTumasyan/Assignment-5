
const prompt = require('readline-sync');

const input = prompt.question("Write here your sentence: ");

const countWords = require("./utils.js")

console.log (countWords.countWords (input));