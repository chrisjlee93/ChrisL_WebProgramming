import { useState } from 'react'
import './App.css'


const App = () => {
    const [todos, setTodos] = useState([])
    const[newTodo, setNewTodo] = useState('')

    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
        setNewTodo('')
    }

    return (
        <div className="App">

            <form onSubmit={handleSubmit}>
                <input
                    className="todo-input"
                    autoComplete="off"
                    type="text"
                    name="newTodo"
                    placeholder="what needs to be done"
                    onChange={handleChange}
                    value={newTodo}
                    />
                <input
                    type="submit"
                    className="save-button"
                    />
            </form>

            <div className="todo-content">
                <ol>
                    {todos.map((el,i) => {
                        return (
                            <li>{el}</li>
                        )
                    })}
                </ol>
            </div>


        </div>
    )
}

export default App
