const target = document.getElementById("targetOne");

const fruits = ["apple","banana","orange","pear"];

const index = fruits.indexOf("orange");

//now we put indexof orange inside target/ what position in array
// *****target.innerHTML = index

//or use console.log instead inner HTML

console.log("My target",index)

// second topic - slice

const myString = "Hello World of Soccor";//string like array count from 0- it count 5 at the space after hello

const extractString = myString.slice(0,7);// it will print less than 7 which mean 6

console.log("My slice",extractString);
target.innerHTML = extractString;  
//inner.html show on screen



// third topic push method

const targetSecond = document.getElementById("target2")
// targetSecond.innerHTML = "hello 2"

const myArray = [1,2,3,4];
//if we add number 5
myArray.push(5)
// targetSecond.innerHTML = myArray;
console.log("My number are ",myArray);



// fourth topic map method -- so it print all the name.

const studentsAll = ["kate", "helen", "henry", "ariana"];
const result = studentsAll.map((student)=>{
    return student
})
targetSecond.innerHTML = result











