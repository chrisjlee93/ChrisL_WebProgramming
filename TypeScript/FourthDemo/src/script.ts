import {Person} from "./helper"



let person1: Person = {
    fname: "Jane",
    lname: "of the Jungle",
    isMarried: false,
    getFullName: function () {
        return `${this.fname} ${this.lname}`
    },
    getAge: function(doggy, horse){
        return doggy*10
    }
}


// second person with 2 children and getName is optional
let child1: Person = {
    fname: "Josh",
    lname: "of the Jungle",
    isMarried: false,
    getFullName: function () {
        return `${this.fname} ${this.lname}`
    }
}

let child2: Person = {
    fname: "Jake",
    lname: "of the Jungle",
    isMarried: false,
    getFullName: function () {
        return `${this.fname} ${this.lname}`
    }
}

let person2: Person = {
    fname: "George",
    lname: "of the Jungle",
    isMarried: true,
    children: [child1.getFullName(), child2.getFullName()],
    getFullName: function () {
        return `${this.fname} ${this.lname}`
    }
}




console.log(person1)
console.log(person1.getFullName())

console.log(person2)
console.log(person2.getFullName)