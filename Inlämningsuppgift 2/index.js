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
function plaindrome(string) {
    var reversedString = string.split("").reverse().join("");
    if (string != reversedString) {
        return false
    } else {
        return true
    }
}


//Uppgift 6
var person = {
    firstname: "Philip",
    lastname: "Persson",
    age: 25,
    family: ["Lars"]
};


//Uppgift 7
function printPerson(person) {
    console.log("Fullname:", person.firstname, person.lastname, "Age:", person.age);
    for(var i = 0; i < person.family.length; i++) {
        console.log(person.family[i])
    }
}
printPerson(person)


//Uppgift 8
function createBox(height, width) {
    var box = {
        height : height,
        width : width
    }
    return box;
}
var box = createBox(15, 20);

console.log(box.height); 
console.log(box.width);


//Uppgift 9
function Triangle(height, width) {
    var triangle = {
        height : height,
        width : width,
        area: function(){
            return this.height * this.width / 2;
        }
    }
    return triangle;
}
var tri = Triangle(12, 14);
console.log(tri.height);
console.log(tri.width); 

console.log(tri.area());

//Uppgift 10
function attributes(object) {
    var attributesArray = []
    for (var attribute in object) {
        attributesArray.push(attribute)
    }
    return attributesArray;
}

var testObject2 = {
    a: 1,
    b: 2,
    c: 3
}
 
 var attributesObj = attributes(testObject2)
 console.log(attributesObj)