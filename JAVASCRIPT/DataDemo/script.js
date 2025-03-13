// alert("Goodbye")

// User completes the form

// retrieve the data from the names
let form = document.getElementsByTagName("form")[0]

// on the event listener we are using an anon (callback) function
form.addEventListener("submit",(event) => {
    event.preventDefault()
    // let username = event.target[0].value
    let username = document.getElementById("uName").value
    let password = document.getElementById("pw").value
    let areMarried = document.querySelector("input[name='isMarried']:checked").value
    let person = {
        username,
        password,
        areMarried
    }
    let str = JSON.stringify(person)




    console.log(str)
    username.value = ""
})


// build an object using this data

// do something - like send to a database



