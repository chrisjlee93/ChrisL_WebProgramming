import {useEffect, useState} from 'react'
import './App.css'
import Table from "./components/Table.jsx";
import axios from "axios";

function App() {

    const endpoint = "https://swapi.dev/api/people"
    const [visible, setVisible] = useState(false)
    const [data,setData] = useState([])

    useEffect(() => {
        axios.get(endpoint)
            .catch(err => {
                console.error("Error: ", err)
            })
            .then(response => {
                setData(response.data.results)
                console.log("Response: ", response.data)
            })
    }, []);

    const handleReset = () => {
        setVisible(false)
    }

    const handleSubmit = () => {
        setVisible(true)
    }

    return (
        <>
            <div className="background">
            <h1>
                SWAPI
            </h1>
            <h2>The Star Wars API</h2>

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>

                <div className="tableDiv" style={{ display: visible ? 'block' : 'none'}}>
                    <Table data = {data}/>
                </div>
        </div>
        </>
    )
}

export default App
