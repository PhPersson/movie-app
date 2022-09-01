// Philip Persson al4570

"use strict"

//Uppgift 1
function max(a, b) {
    if (a < b) {
        console.log(b);
    } else {
        console.log(a);
    }
}

function min(a, b) {
    if (a > b) {
        console.log(b);
    } else {
        console.log(a);
    }
}





//Uppgift 2
function range(n) {
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push(i);
    }
    return array;
}



//Uppgift 3
var numbers = [5, 10, 15, 20, 25];
var sumOfNumbers = sum(numbers);
console.log(sumOfNumbers);

function sum(arrayOfNumbers) {
    var sum = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum = sum + arrayOfNumbers[i];
    }
    return sum;
}


//Uppgift 4
function countCharacter(string, charToFind) {
    var numOfMatch = 0;

    for (var i = 0; i <string.length; i++) {
        if(string.charAt(i) == charToFind) {
            numOfMatch++;
        }
    }
    return numOfMatch;
}

//Uppgift 5