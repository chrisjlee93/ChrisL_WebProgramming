"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monsterTypes_1 = require("./models/monsterTypes");
const monster1 = {
    firstName: "Zorg",
    age: 500,
    type: monsterTypes_1.MonsterTypes.Undead,
    moreInfo: "Terrifies entire galaxies"
};
const monster2 = {
    firstName: "Blobbo",
    age: 3,
    type: monsterTypes_1.MonsterTypes.Blob,
    moreInfo: "can absorb everything in sight"
};
const monster3 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    type: monsterTypes_1.MonsterTypes.Human,
    moreInfo: "loves monster research"
};
const monster4 = {
    firstName: "Vlad",
    age: 1000,
    type: monsterTypes_1.MonsterTypes.Undead,
    moreInfo: "Shape shifter: bats, rats, and cats",
    powerLevel: 100
};
const monsters = [monster1, monster2, monster3, monster4];
console.log(monsters);
const monsterData = ["Vlad", 1000, "Undead"];
console.log(monsterData);
