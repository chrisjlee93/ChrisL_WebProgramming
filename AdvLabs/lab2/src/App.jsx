import {useEffect, useState} from 'react'
import './App.css'
import {randomRoll} from "./Utils/helper.js";
import Dice from "./components/Dice.jsx";

function App() {
    const [roll1, setRoll1] = useState(2)
    const [roll2, setRoll2] = useState(2)
    const [result, setResult] = useState(6)


    useEffect(()=>{
        handleClick()
    }, [])

    const handleClick = () => {
        let r1 = randomRoll();
        let r2 = randomRoll();
        setRoll1(r1);
        setRoll2(r2);
        setResult(r1+r2+2)
    }

    return (
        <div id="main">
            <i className={`fas fa-dice-${Dice({number: roll1})}`}></i>
            <i className={`fas fa-dice-${Dice({number: roll2})}`}></i>
            {/*<h2 className="rolls">{roll1 + 1}  {roll2 + 1}</h2>*/}
            <h2 className="sum">Your result is {result}!</h2>
            <button id="butt" onClick={handleClick}>Roll Here!</button>

        </div>

  )
}

export default App
