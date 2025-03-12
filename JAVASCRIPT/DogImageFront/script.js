// consume an API
// we will always consume or serve an API, this is just using one that is already built or one that we are making ourselves


// 4 main things to consider when using APIs
//free or credentials/permissions
// need to know endpoints - base url + a route
// How is the data being sent back - JSON or XML - in this case we get JSON back
// How much data is coming back and what does it look like - one thing in this case that looks like an object


const BASEURL = 'https://dog.ceo/api'
let route = 'breeds/image/random'
let endpoint = `${BASEURL}/${route}`

let butt= document.getElementsByTagName("button")[0]
butt.addEventListener("click",()=> {

//fetch skeleton
//utilize endpoint
    fetch(endpoint)
        .then(data => {
            // get data, if okay parse it, else error handling
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
        }) // deal with parsed data
        .catch(error => {
            console.log(error)
        }) // error handling

})