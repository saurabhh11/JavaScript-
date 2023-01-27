//1

function printNames(names) {
    names.forEach(name => {
        console.log(name);
    });
}

let namesList = ["John", "Rohn", "Danny", "James"];
printNames(namesList);

//2

function printChars(word) {
    let chars = word.split('');
    for (let i = 0; i < chars.length; i++) {
        console.log(chars[i]);
    }
}

let word = "iNeuron";
printChars(word);

//4

let arr1 = ["a", "b", "c", "d"];
let arr2 = ["e", "f", "g", "h", "a", "i", "j"];
for (let item1 of arr1) {
    for (let item2 of arr2) {
        if (item1 === item2) {
            console.log(`Matched element: ${item1}`);
        }
    }
}





