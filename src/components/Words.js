import wordleBank from "../wordle-bank.txt";
export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];


export const generateWordSet = async() => {
    let wordSet;

    let todaysword="";

    await fetch(wordleBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n")
            todaysword=wordArr[Math.floor(Math.random() * wordArr.length)];
            wordSet = new Set(wordArr);
        });

    return {wordSet,todaysword};

};