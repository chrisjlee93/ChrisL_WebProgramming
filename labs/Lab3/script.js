// consume an API
// we will always consume or serve an API, this is just using one that is already built or one that we are making ourselves


// 4 main things to consider when using APIs
//free or credentials/permissions
// need to know endpoints - base url + a route
// How is the data being sent back - JSON or XML - in this case we get JSON back
// How much data is coming back and what does it look like - one thing in this case that looks like an object


const BASEURL = 'https://dog.ceo/api'
let route = 'breeds/image/random'
let endpoint1 = `${BASEURL}/${route}`
let dogGallery = [];
let gIndex = 0;



document.addEventListener("DOMContentLoaded", function () {
    console.log("Page HTML has fully loaded!");
    fetch(endpoint1)
        .then(data => {
            console.log(data)
            if (data.ok) {
                let result = data.json()
                return result
            } else {
                throw Error("brokeded :<")
            }
        })
        .then(parsedData => {
            let img = document.querySelector("img")
            console.log(parsedData)
            img.setAttribute("src",parsedData.message)
        })
})

let img = document.getElementById("dogImg")
let imgSearch = document.getElementById("search")

// let endpoint = `${BASEURL}/breed/${choice}/images/random`

imgSearch.addEventListener("click",()=> {
    let choice = document.getElementById("bSelect").value
    let endpoint = `${BASEURL}/breed/${choice}/images/random`
    dogGallery=[]
    for (let i = 0; i < 10; i++)

    {
        fetch(endpoint)
            .then(data => {
                console.log(data)
                if (data.ok) {
                    let result = data.json()
                    return result
                } else {
                    throw Error("brokeded :<")
                }
            })
            .then(parsedData => {
                dogGallery.push(parsedData.message)
                img.setAttribute("src", dogGallery[0])
            })
    }
    console.log(dogGallery)
})

let back = document.getElementById("back")
let next = document.getElementById("next")



back.addEventListener("click", () =>
{
    if (gIndex === 0) {
        gIndex = 9
        img.setAttribute("src", dogGallery[gIndex])
    } else {
        img.setAttribute("src", dogGallery[--gIndex])
    }
})

next.addEventListener("click", () =>
{
    if (gIndex === 9) {
        gIndex = 0
        img.setAttribute("src", dogGallery[gIndex])
    } else {
        img.setAttribute("src", dogGallery[++gIndex])
    }
})
