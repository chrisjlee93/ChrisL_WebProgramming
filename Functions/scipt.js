function square(num) {
    console.log(num*num)
    return num*num;
};

square(5)

let sq = function(a) {
    console.log(a*a);
    return a*a;
}

sq(6)

// // IIFE
// (function(){
//     console.log("Hello")
// })()

// convert to fat arrow
const sqa = (a) => {
    console.log(a*a);
    return a*a;
};
sqa(7)

// convert to fat arrow remove ()
const sqa2 = a => {
    console.log(a*a);
    return a*a;
};
sqa2(7)

// convert to fat arrow with implied return
const sqa3 = a => a*a;
console.log(sqa3(8))

// multiple parameters
const area = (a=6,b=4) => a*b;
console.log("Area: ", area(undefined,8))






