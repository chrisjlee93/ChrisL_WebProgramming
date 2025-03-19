"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person1 = {
    fname: "Jane",
    lname: "of the Jungle",
    isMarried: false,
    getFullName: function () {
        return `${this.fname} ${this.lname}`;
    },
    getAge: function (doggy, horse) {
        return doggy * 10;
    }
};
let child1 = {
    fname: "Josh",
    lname: "of the Jungle",
    isMarried: false,
    getFullName: function () {
        return `${this.fname} ${this.lname}`;
    }
};
let child2 = {
    fname: "Jake",
    lname: "of the Jungle",
    isMarried: false,
    getFullName: function () {
        return `${this.fname} ${this.lname}`;
    }
};
let person2 = {
    fname: "George",
    lname: "of the Jungle",
    isMarried: true,
    children: [child1.getFullName(), child2.getFullName()],
    getFullName: function () {
        return `${this.fname} ${this.lname}`;
    }
};
console.log(person1);
console.log(person1.getFullName());
console.log(person2);
console.log(person2.getFullName);
