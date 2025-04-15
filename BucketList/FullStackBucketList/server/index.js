// SERVER
// 3 Parts to a server
// Foundation
const express = require("express")
// create an instance of our application
const app = express()
const cors = require("cors")

// logging tool
// this will help with routing and params
const logger = require("morgan")
app.use(logger("dev"))

// allows all sites to access our API, e.g. localhost:3000
// can access this API
app.use(cors())

// what "station" (port) are we listening on?
const port = process.env.PORT || 3000;

// importing our fake data
const {bucketlist} = require("./mockData");
const {urlencoded} = require("express");

// add body parser
app.use(express.json())
app.use(urlencoded({extended: false}))

// Handlers
// verb (route, cb())
// app.get("/", (req, res) => {
//     res.redirect('/home')
// })
//
// app.get("/home", (req,res) => {
//     res.send('I am the home page')
// })
//
// // parameters
// app.get("/api/bucket/:doggy", (req,res) =>  {
//     console.log(req)
//     res.send(`Doggy route with parameter: ${req.params.doggy}`)
// })

// Read route
app.get("/api/bucket", (req,res) => {
    res.json(bucketlist)
})

// Create Data
// How is data sent from the client
let newId = 4;

app.post("/api/bucket", (req,res) => {
    // what is our goal??
    // add something to the db
    // new bucket list items
    let newData = {
        id: newId++,
        description: req.body.description,
        isComplete: false
    }

    bucketlist.push(newData)
    let receipt = newData
    res.json(receipt)

})


// Delete route
app.delete("/api/bucket/:id", (req, res) => {
    // what do we need to think about
    // cast the string into a number

    let requestId = Number(req.params.id)

    if (isNaN(requestId)) {
        res.status(469).json({message: 'Not a valid Id'})
    }

    let bucketIndex = bucketlist.findIndex((element) => {
        return element.id === requestId;
    })

    if (bucketIndex != -1) {


        let removedObj = bucketlist.splice(bucketIndex, 1)
        // pretending the following is coming from the db
        let receipt = removedObj
        res.json(receipt)
    } else {
        res.status(404).json({message: 'not a valid Id'})
    }
})


// Update
app.put("/api/bucket/:id", (req, res) => {
    // we need the id
    // cast the string into a number
    let requestId = Number(req.params.id)
    if (isNaN(requestId)) {
        res.status(404).json({message: 'Not a valid Id'})
    }
    if (!requestId) {
        res.status(404).json({message: 'Not Id supplied'})
    }

    let item = bucketlist.find((el) => {
        return el.id === requestId
    })
    // returning an element that looks like our bucket list items
    if (item) {
        item.isComplete = !item.isComplete
        let receipt = item
        res.json(receipt)
    } else {
        res.status(404).json({error:"Unable to find requested ID"})
    }
})


// Listeners
app.listen(port, () =>{
    console.log(`Bucketlist server running on port ${port}`)

})

