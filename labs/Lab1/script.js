// 1. Dynamic Age Calculator
// Use a traditional function to calculate the user’s age.
//     Prompt the user to enter their birth year using prompt() and store it in a variable.
//     Based on their input, determine how many years old they are.
//     Log the calculated age to the console: “Your age is:”

// let bYear = prompt("Please enter your birth year: ")
//
// let ageCalc = function (year) {
//     age = 2025 - year
//     console.log("Your age is: " + age)
// }
//
// ageCalc(bYear)


// 2. Simple Interest Calculator
// Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
//     Simple Interest = (Principal × Rate × Time)/100
// Prompt the user for the principal amount, rate of interest, and time in years using prompt().
//     Store each of these in a separate variable
// Log the result to the console: “Your simple interest is:”

// let principal = prompt("Please enter your principal amount")
// let rate = prompt("Please enter your interest rate")
// let time = prompt("Please enter the time in years")
//
// function calculateSimpleInterest(p,r,t) {
//     let simpleInterest = (p * r * t)/100
//     console.log(simpleInterest)
// }
//
// calculateSimpleInterest(principal,rate,time)



// 3. Favorite Color Selector
// Create an array with three colors.
//     Use a traditional function named addColor to add a new color to an array.
//     Takes one argument - the array of colors
// Prompt the user to input a color name to add to the array.
//     Prepend the users color to the existing array
// Log the updated array to the console using: “Updated colors: “

// let colors = ["Blue", "Orange", "Goldenrod"]
//
// function addColor(arr) {
//     arr.unshift(prompt("Please add a color name"))
//     console.log("Updated colors: " + arr)
//
// }
//
// addColor(colors)


// 4. Event Countdown with Date Object
// Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
//     Takes one argument - users event date
// Prompt the user to input the event date in the format YYYY-MM-DD.
//     If not in this format - make the user enter in correct format
// Use the Date object to calculate the difference in days between today and the event.
//     Log the result to the console using: “Days until the event: “.

// let date = prompt("Please enter a date (format YYYY-MM-DD: ")
// const d = new Date()
//
//
// function validDate(dateStr) {
//     const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
//     if (!dateRegex.test(dateStr)) {
//         return false;
//     }
// }
//
// while (validDate(date) === false) {
//     date = prompt("Please enter a valid date (format YYYY-MM-DD: ")
// }
//
// date = new Date(date)
//
// function calculateDaysUntil(date) {
//     console.log(d.getTime() > date.getTime() ? "Days since your date: " + ((d.getTime()-date.getTime())/86400000) : "Days until your date: " + ((date.getTime()-d.getTime())/86400000))
// }
// calculateDaysUntil(date)



// /*
//
// Doesn't Work but want to revisit at a later date T^T
//
// while (!date) {
//     date = prompt("Please enter a date (format YYYY-MM-DD: ")
// }
//
// let h1 = date.indexOf(4).toString()
// let h2 = date.indexOf(7).toString()
// let year = date.slice(0,4)
// let month = date.slice(5,7)
// let day = date.slice(8,10)
//
// while (date) {
//     (h1.charCodeAt(0) !== 45 || h2.charCodeAt(0) !== 45)
//          ? date = prompt("Please enter in correct format (YYYY-MM-DD): ")
//          : (year === NaN || month === NaN || day === NaN)
//              ?  date = prompt("Please enter a valid date (YYYY-MM-DD): ")
//              : year < 1970
//                  ? date = prompt("Date must be after 1970-01-01 (YYYY-MM-DD): ")
//                  : date = new Date(date)
// }
// */



// 5. Temperature Classifier
// Use a traditional function named classifyTemperature to classify a temperature.
//     Takes one argument - user input for temperature
//     Prompt the user to input the temperature in Celsius.
//     Convert into Farenheit using this formula
// Fahrenheit = (C x (9/5)) + 32
// Use conditionals to classify the temperature as:
//     "Hot," if over 100
// "Warm," if over 80
// "Cold” if under 40
// “Chilly” for everything else
// Error message if number not entered
// Log the classification to the console using: “The temperature is: “

// function classifyTemperature(temp) {
//     let f = (temp * (9/5)) + 32
//     console.log("The temperature is: ",
//         f > 100
//             ? "HOT!!!!"
//             : f > 80
//                 ? "Warm!"
//                 : f < 40
//                     ? "It's Cold..."
//                     : "Chilly")
// }
//
// let temp = parseInt(prompt("Please enter the temperature in C: "))
// while (Number.isInteger(temp) === false) {
//     temp = parseInt(prompt("Please enter a valid temp(C)!!!"))
// }
// classifyTemperature(temp)



// 6. Student Array Operations
// Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
// Use a fat arrow function to modify a student's age in an array of student objects.
// Prompt the user to input the name of the student to modify
// If student does not exist, log an error message
// Prompt the user to input a new age.
// If not a number, log an error message
// Update the student’s age in the array of objects.
//     Log the updated array to the console: “Updated students: ”

// let students = [
//     {
//         name: 'Alice',
//         age: 20
//     },
//     {
//         name: 'Bob',
//         age: 22
//     },
//     {
//         name: 'Charles',
//         age: 18
//     },
// ]
//
//
// let name = prompt("Please enter students name to change")
// let check1 = 0
// while (check1 == 0) {
//     for ( i = 0; i < students.length; i++) {
//         name == students[i].name ? check1 = 1 : ""
//     }
//     !check1 ? name = prompt("Please enter a valid name!") : ""
// }
//
// let newAge = parseInt(prompt("Please enter a new age for the student: "))
// while (Number.isInteger(newAge) === false) {
//     newAge = parseInt(prompt("Please enter a valid age"))
// }
//
// const changeAge = (name, newAge) => {
//     for (i = 0; i < students.length; i++) {
//         students[i].name == name ? students[i].age = newAge : ""
//     }
// };
//
//
// changeAge(name,newAge)
//
// console.log(students)



// 7. Grade Classification
// Use a fat arrow function named classifyGrade to classify grades.
//     Prompt the user to input a grade as a number.
//     Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
// ONLY use ternaries!!!!
//     Log the result to the console using: “The grade classification is: “

// const classifyGrade = a => {
//     a >= 110
//         ? console.log("You got above a 110, are you cheating??")
//         : a >= 90
//             ? console.log("The grade classification is: A")
//             : a >= 80
//                 ? console.log("The grade classification is: B")
//                 : a >= 70
//                     ? console.log("The grade classification is: C")
//                     : a >= 60
//                         ? console.log("The grade classification is: D")
//                         : console.log("The grade classification is: F")
// };
//
// let numGrade = parseInt(prompt("Please enter your number Grade above 0"))
// while (numGrade <= 0 || isNaN(numGrade)) {
//     numGrade = parseInt(prompt("Please enter a valid Grade"))
// }
//
// classifyGrade(numGrade)


// 8. Shopping List Operations
// Hardcode an array representing a shopping list of eggs, butter, and flour.
//     Use a fat arrow function named modifyItem to modify items in an array.
//     Takes two arguments - the shopping list array and the prompted new item form user.
//     Log the updated array to the console using: “Updated shopping list: “.

// let arr = ['eggs','butter','flour']
//
// const addToShoppingList = (arr, item) => {
//     arr.push(item)
//     console.log("Updated shopping list: ", arr)
// }
//
// let newItem = prompt("Please enter new item to add to the shopping list")
//
// addToShoppingList(arr, newItem)



// 9. Weekday Detector
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “

// let d = new Date()
//
// const dayOfWeek = d => {
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let day = days[d.getDay()]
//     console.log("Today is:", day)
// }
//
// dayOfWeek(d)


// 10. How Long Until Graduation
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “
// Display in this format: “2025, January 21st”
// NOTE: use -st, -nd, -rd, -th based on the numerical date
// 22nd, 5th, 9th, 23rd, etc….
// Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
// Last day is 5/17/25
// Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.


// let d = new Date()
// let gradDate = new Date('2025-05-17')
// let daysUntilGrad = (gradDate.getTime()-d.getTime())/86400000
//
//
// const dayOfWeek = d => {
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let day = days[d.getDay()]
//     console.log("Today is:", day)
//
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//
//     d.getDate()%10 === 1
//         ? suf = "st"
//         : d.getDate()%10 === 2
//             ? suf = "nd"
//             : d.getDate()%10 === 3
//                 ? suf = "rd"
//                 : suf = "th"
//
//     console.log(d.getFullYear() + ", " + months[d.getMonth()] + " " + d.getDate() + suf)
//
//     console.log("And you have", daysUntilGrad, "days left in this web design program until graduation!")
//
// }
//
// dayOfWeek(d)








