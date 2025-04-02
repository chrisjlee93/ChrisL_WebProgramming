//foundation
import React from "react";

//build component
const MonsterCard = ({firstName, lastName, age, type, moreInfo}) => {

    // let {firstName, lastName} = props





    return (
        <div className="monster-card">
            {/* Heading inside the monster card */}
            <h1>{firstName} {lastName}</h1>
            <p>Age: {age}</p>
            <p>Type: {type}</p>
            <p>More Info: {moreInfo}</p>

        </div>
    )
}


// export so it can be used in other files
export default MonsterCard