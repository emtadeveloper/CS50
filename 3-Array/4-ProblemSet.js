// 1

// coleman - Liau Index ::::::::::::::::::::::::::::::::::

// index = 0.0588 * L - 0.296 * S - 15.8 ;

// L  ::  is average number of letter per 100 words .

// S  ::  is average number of sentences per 100 words .

// Letter ?  //  Words ?  //  sentence ?

const Readability = (text) => {
    let countLetter = 0;
    let counterWord = 1;
    let countsentence = 0;
    for (let i = 0; i < text.length; i++) {
        text[i] !== " " && text[i] !== "!" && text[i] !== "." && text[i] !== "?" && text[i] !== "'" && countLetter++;
        text[i] == " " && counterWord++;
        (text[i] == "!" || text[i] == "." || text[i] == "?") && countsentence++;
    }
    const answer = Math.round(0.0588 * 100 * (countLetter / counterWord) - 0.296 * 100 * (countsentence / counterWord) - 15.8);

    if (answer < 1) {
        return "Grade < 1";
    } else if (answer > 16) {
        return "Grade 16+";
    } else {
        return "Grade " + answer;
    }
};

console.log(Readability("Congratulations! Today is your day. You're off to Great Places! You're off and away!"));

console.log(Readability("As years went by, there"));

// 2

const vote = ["emad", "ali", "emad", "emad", "ali", "reza"];

const numberVote = (num) => {
    const obj = { emad: 0, ali: 0, reza: 0 };
    num.map((item) => {
        console.log(Object.keys(obj)[item]);
    });
};

console.log(numberVote(vote));

// 3

const key_1 = [..."JTREKYAVOGDXPSNCUIZLFBMWHQ"];

const key_2 = [..."YTNSHKVEFXRBAUQZCLWDMIPGJO"];

const key_3 = [..."VCHPRZGJNTLSKFBDQWAXEUYMOI"];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ciphertext = (name, key) => {
    const array = [...name.toUpperCase()];
    for (let i = 0; i < name.length; i++) {
        let index = alphabet.indexOf(array[i]) + key > 26 ? alphabet.indexOf(array[i]) + key - 26 : alphabet.indexOf(array[i]) + key;
        if (array[i] !== " " || array[i] == ",") {
            array[i] = alphabet[index];
        }
    }
    return array.join("");
};

console.log(ciphertext("hello, world", 13));
