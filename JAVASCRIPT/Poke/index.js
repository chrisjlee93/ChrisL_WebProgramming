const poke = require("pokemon")


// need a container to hold pokemon - this is because different languages has different ways of creating array like objects
let dex =[]
for (let i = 0; i < 5 ; i++) {
// pokemon = {name:value, attack: value}
    let p = {name:poke.random(), attack: Math.ceil(Math.random()*90)+10};
    dex[i] = p;
}
console.log(dex)

// const pokeDex = [poke.random(),poke.random(),poke.random(),poke.random(),poke.random()]

// console.log()

// for each pokemon in the array create an attack number from 1-10


// for each pokemon - name and attack

// we need to update each pokemon with new attack

//attacks need to be random  - research Math methods

