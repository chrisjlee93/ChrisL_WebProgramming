import {useState} from "react";

const App = () => {
    const [days, setDays] = useState(303)

    const handleClick = () => {
        return setDays(days-1)
    }

    return (
        <div className="App">
            <h1>Countdown App</h1>
            <div className="card">
                <button onClick={handleClick}>
                    Days remaining until the Birthday are {days}
                </button>
            </div>
        </div>
    )
}

export default App;