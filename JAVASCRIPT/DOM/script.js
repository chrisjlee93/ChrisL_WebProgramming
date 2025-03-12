let food = document.getElementById("fruit")
console.log(food)


let food2 = document.getElementsByClassName("breakfast")
console.log(food2)

let food3 = document.getElementsByTagName("li")
console.log(food3[0])

let food4 = document.querySelector(".breakfast")
console.log(food4)

let food5 = document.querySelectorAll("h1")
console.log(food5[food5.length-1])

food.style.backgroundColor = "green"

let firstLi= document.querySelector("li");
firstLi.textContent
firstLi.textContent = "RIP"
firstLi.innerHTML = "Chocolate <b>BOLD</b> Chunk Brownie"

let link = document.querySelector("a")
link.getAttribute("href")
console.log(link)

link.setAttribute("href","https://www.amazon.com")

let butt = document.getElementsByTagName("button")[0]
butt.addEventListener("click",()=> {
    alert("Ouch!")
})


