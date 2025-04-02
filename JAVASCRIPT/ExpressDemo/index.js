// foundation
// giving us access to express AND everything it has to offer
const express = require("express")
//creates an instance of server BUT we are calling it "app"
const app = express()
//depending on what port the host is using
const port = process.env.port||3000
// console.log(process.env)


// front end - event listeners
// route handler
// root route
// What is the verb? GET POST PUT DELETE
// What is the route
app.get("/",(req,res) => {
    res.json("My first server")
})

// pulling data from the url
app.get("/fruit/:doggy/cat", (req, res) =>{
    res.send(req.params.doggy)
})

//  as long as your methods are different you can use the same route
// app.post("/", () =>{})
//
// app.put("/", () =>{})
//
// app.delete("/", () =>{})


// listener
app.listen(port, () =>{
    console.log(`Express Demo is running on port ${port}`)
})
