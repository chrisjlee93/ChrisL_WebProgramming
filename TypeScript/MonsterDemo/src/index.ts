import {Monster, MonsterTuple, MonsterTypes, SuperMonster} from "./models/monsterTypes";


const monster1: Monster = {
    firstName: "Zorg",
    age: 500,
    type: MonsterTypes.Undead,
    moreInfo: "Terrifies entire galaxies"

}

const monster2: Monster = {
    firstName: "Blobbo",
    age: 3,
    type: MonsterTypes.Blob,
    moreInfo: "can absorb everything in sight"
}

const monster3: Monster = {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    type: MonsterTypes.Human,
    moreInfo: "loves monster research"
}

const monster4: SuperMonster = {
    firstName: "Vlad",
    age: 1000,
    type: MonsterTypes.Undead,
    moreInfo: "Shape shifter: bats, rats, and cats",
    powerLevel: 100
}

const monsters: Monster[] = [monster1,monster2,monster3,monster4]
console.log(monsters)

const monsterData: MonsterTuple = ["Vlad", 1000, "Undead"];
console.log(monsterData)



