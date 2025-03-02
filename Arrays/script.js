// let num = [1, 2, 3]
// // setting up an new array var to make it so we don't change the initial array
// let data = num.slice()
// num.push(4)
// console.log(num)
// let poppedElem = num.pop()
// console.log(num)
// console.log(poppedElem)
//
// // if we want o deal with the front of the array or pre-pending
//
// num.unshift(100)
// console.log(num)
// let shiftElem = num.shift()
// console.log(shiftElem)
//
// // once values are changed you can set the changed array back to the original
//
// data = num
//
// // more of a string function
// // .trim()
// let message = "                Whatever"
// console.log(message.trim())
//
// let students = ["Alice", "Bob", "Charlie"];
// let stu = students.slice()
// stu.push("Diana")
// console.log(stu)
// stu.pop()
// console.log(stu)
// stu.unshift("Eve")
// console.log(stu)
// stu.shift()
// console.log(stu)
//
// //  foreach()
// let num = [4, 6, 8]
// num.forEach(function (element){
//     console.log(element);
// })
//
// let names = ["Chris", "Conner", "Adam", "Jack", "Ahbi", "Dan"]
// names.forEach(el => { //example of a fat arrow function
//     console.log(`${el}'s`)
// })
//
// //.filter()
// let newNum = [2, 3, 4]
// let newArray = newNum.filter(function(kittycat) {
//     return kittycat % 2 === 0 // should be even
// })
// console.log(newArray)

// //.sort() - strings only
// let fruits = ["Durian", "Apple", "Pineapple", "avacado"]
// //fruits.sort()
// let newFruits = fruits.map(el => {
//     return el.toLocaleLowerCase()
// })
// console.log(newFruits.sort())
//
// // You need to use a compare function if you want to sort numbers
// let numbers = [10, 1, 100, 3, 34, 11]
// numbers.sort(function(a,b) {
//     // return a - b //ascending
//     return b - a  //descending
// })
// console.log(numbers)

let arr = ['eggs','butter','flour']

const addToShoppingList = (arr, item) => {
    arr.push(item)
    console.log("Updated shopping list: ", arr)

}

let newItem = 'milk'

addToShoppingList(arr, newItem)
