import React, {useState} from "react";
import Greeting from "../components/Greeting.jsx";
import UserCard from "../components/UserCard.jsx";
import CardContainer from "../components/CardContainer.jsx";


const App = () => {

    const name = 'Chris'
    const people = [
        {name: 'Bob',
            age: 30},
        {name: 'Charlie',
            age: 35},
        {name: 'Alice',
            age: 25}
        ]

    const sortedP =
        [...people].sort((a,b) => a.age -b.age)

    return (
        <div>
            <Greeting name={name}/>

            {sortedP.map((person, i) => (
                <CardContainer
                    children = {<UserCard {...person} key={i}/>}
                />

                ))}

        </div>
    )

}


export default App