const prev = document.getElementById("prevMenu");
const next = document.getElementById("nextMenu");
let imgL = document.getElementById("menuInGame")
let imgR = document.getElementById("menuReal")
let description = document.getElementById("menuDescription")
let price = document.getElementById("price")
let mName = document.getElementById("menuName")



const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

const menuItems = [
    {
        imgG: "./assets/FriedDrumstick.png",
        imgR: "./assets/FriedDrumstickReal.png",
        alt: "Fried Drumsticks",
        desc: "Drumsticks seasoned liberally with our house seasoning and then fried in a high-quality oil. Served with fresh herbs a delicious dipping sauce",
        price: formatter.format(15)
    },
    {
        imgG: "./assets/Hylianpizza.png",
        imgR: "./assets/PizzaReal.png",
        alt: "Hylian Pizza",
        desc: "Pizza, freshly made to order! Need I say more?",
        price: formatter.format(20)
    },
    {
        imgG: "./assets/MeatStuffedPumpkin.png",
        imgR: "./assets/MPumpkinReal.png",
        alt: "Meat Stuffed Pumpkin",
        desc: "Delicious and creamy vegetables, mixed savory and tender cuts of meat. Whats not to love!",
        price: formatter.format(18)
    },
    {
        imgG: "./assets/GCheesyMeatBowl.png",
        imgR: "./assets/CheesyRiceBowlReal.png",
        alt: "Gourmet Cheesy Meat Bowl",
        desc: "Our ridiculously large meat and cheese bowl. Made using the best cuts of beef and highest quality cheese straight out of Lon Lon Ranch. Paired with some fresh herbs and spices, the taste is truly to die for!",
        price: formatter.format(35)
    },
    {
        imgG: "./assets/MonsterCake.png",
        imgR: "./assets/MonsterCakeReal.png",
        alt: "Monster Cake",
        desc: "Uh, we're not sure what went into this cake. Monsters seem to love it though. Eat at your own risk!",
        price: formatter.format(8)
    },
    {
        imgG: "./assets/FruitCake.png",
        imgR: "./assets/FruitCakeReal.png",
        alt: "Fruit Cake",
        desc: "Deliciously baked cake layered with frosting and topped with delicious fruits sourced from many different parts of the kingdom.",
        price: formatter.format(12)
    },
    {
        imgG: "./assets/DubiousFood.png",
        imgR: "./assets/redacted1.jpg",
        alt: "Dubious Food...",
        desc: "Trust me, you don't want to know. Why is this even on the menu?",
        price: formatter.format(0)
    }
];


let currentIndex = 0;

console.log(currentIndex)
console.log(menuItems[1])


function nextImage() {
    currentIndex = (currentIndex + 1) % menuItems.length;
    console.log(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    console.log(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    // Your navigation logic here
    imgL.setAttribute("src",menuItems[currentIndex].imgG)
    imgL.setAttribute("alt",menuItems[currentIndex].alt)
    imgR.setAttribute("src",menuItems[currentIndex].imgR)
    imgR.setAttribute("alt",menuItems[currentIndex].alt)
    description.textContent = menuItems[currentIndex].desc
    price.textContent = menuItems[currentIndex].price
    mName.textContent = menuItems[currentIndex].alt
})
prev.addEventListener("click",()=> {
    currentIndex = (--currentIndex + menuItems.length) % menuItems.length
    imgL.setAttribute("src",menuItems[currentIndex].imgG)
    imgL.setAttribute("alt",menuItems[currentIndex].alt)
    imgR.setAttribute("src",menuItems[currentIndex].imgR)
    imgR.setAttribute("alt",menuItems[currentIndex].alt)
    description.textContent = menuItems[currentIndex].desc
    price.textContent = menuItems[currentIndex].price
    mName.textContent = menuItems[currentIndex].alt
})

next.addEventListener("click", () => {
    currentIndex = (++currentIndex + menuItems.length) % menuItems.length
    imgL.setAttribute("src",menuItems[currentIndex].imgG)
    imgL.setAttribute("alt",menuItems[currentIndex].alt)
    imgR.setAttribute("src",menuItems[currentIndex].imgR)
    imgR.setAttribute("alt",menuItems[currentIndex].alt)
    description.textContent = menuItems[currentIndex].desc
    mName.textContent = menuItems[currentIndex].alt
    price.textContent = menuItems[currentIndex].price
})