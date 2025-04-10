import { useState } from 'react'
import './App.css'

const App = () => {
    const initialState = {
        fname: "",
        age: 0
    }

    const [formData, setFormData] = useState(initialState)
    const {fname, age} = formData

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        //send to database
        //axios call
    }

    const handleChange = (event) => {
        setFormData(
            {...formData, //spread operator so we dont lose current values
                [event.target.name]: event.target.value} //integrates current values into prev values
        )
        console.log(formData)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">First Name:
                    <input
                        type="text"
                        name="fname"
                        value={fname}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="">Age:
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={handleChange}
                    />
                </label>
            <button type={"submit"}>Submit</button>
        </form>
    </>
    )
}

export default App
