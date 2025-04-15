import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css"


const App = () => {

    // read our data
    // http request (GET) /api/bucket
    // axios for call
    // if data is good display it
    // list elements
    // set/useState

    const [bucketList, setBucketList] = useState([])
    const [newItem, setNewItem] = useState('')
    const baseUrl = "http://localhost:3000"

    useEffect(() => {
        // communicate with the server
        let route = "api/bucket"
        let endpoint = `${baseUrl}/${route}`
        axios.get(endpoint)
            .then(result => {
                setBucketList([...result.data])
            })
            .catch(err => console.log(err))
    }, []);

    let myList = bucketList.map((el) => {
        return (
        <li key={el.id} className={el.isComplete ? "completed": ""}>
            {el.description}</li>
        )
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        let item = {
            description: newItem,
            isComplete: false
        }

        let route = "api/bucket"
        let endpoint = `${baseUrl}/${route}`
        let options = {
            method: "post",
            url: endpoint,
            data: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        }
        axios(options)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        setNewItem(e.target.value)
    }

    return (
        <>
            <h1>Bucket List</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    What do you want to do before you kick the bucket?
                    <br/>
                    <input type="text" name="newItem" onChange={handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
            <ul>
                {myList}
            </ul>
        </>
    )
}

export default App