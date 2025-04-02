import React from "react";
import MonsterCard from "./components/MonsterCard.jsx";
import {monsters} from "./Util/database.js";

const App = () => {

        const displayMonsters = monsters.map((monster, i) => {
            return (<MonsterCard{...monster} key = {i}/>)
        })

            return (
        <>
            <h1>Monster Database</h1>
            {displayMonsters}


            {/*{*/}
            {/*    monsters.map(monster => */}
            {/*            <MonsterCard {...monster}/>*/}
            {/*    )*/}
            {/*}*/}


            {/*<MonsterCard*/}
            {/*    firstName="Zorg"*/}
            {/*    lastName="the Destroyer"*/}
            {/*    age={500}*/}
            {/*    type="undead"*/}
            {/*    moreInfo="Terrifies galaxies"*/}
            {/*/>*/}

        </>
    )
}

export default App;

