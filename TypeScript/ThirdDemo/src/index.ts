// basic datatypes - primitives
let cat = "meow"
// let num: number;
let age = 28;
let isMarried: boolean;

// "objects" aka arrays specifically
let dogNames: string[];
let dogNames2 = ['Atlas','Ranger','Tony']
let numArray: number[];
numArray = [1]

// explicitly a JS object
let people: object[];

// functions
const add = () => {
    console.log("Hello")
    return 1;
}
add()

const getAge = (num:number,fname:string = "JM")=> {
    console.log(fname)
    return num*4
}
console.log(getAge(5))