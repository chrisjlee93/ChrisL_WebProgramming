import axios from "axios"
import {useState, useEffect} from "react"

const App = () => {
    const baseURL = "https://dog.ceo/api"
    const [imagePath, setImagePath] = useState("")

    useEffect( ()=>{
        let route = "breeds/image/random"
        let endpoint = `${baseURL}/${route}`
        axios.get(endpoint)
            .catch(err => {
                console.error("Error: ", err)
            })
            .then(response => {
                setImagePath(response.data.message)
                console.log("Response: ", response.data.message)
            })
        }, []
    )

    const handleClick = () => {
        // console.log("Clicked")
        let route = "breeds/image/random"
        let endpoint = `${baseURL}/${route}`
        axios.get(endpoint)
            .catch(err => {
                console.error("Error: ", err)
            })
            .then(response => {
                setImagePath(response.data.message)
                console.log("Response: ", response.data.message)
            })
    }

    return (
        <>
            <h1>Dog Image Generator</h1>
            <div>
            <button onClick={handleClick}>Click Me</button>
            </div>
            <img src={imagePath} alt=""/>
        </>
        
        
    )
}

export default App;