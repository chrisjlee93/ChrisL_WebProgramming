import React from "react";

const Table = ({data}) => {
    const Headers = ["Name", "Height", "Hair Color", "Gender"]
    const {name,height,hair_color,gender} = data

    return (
        <table id="character">
            <thead>
                <tr>
                    {Headers.map((column) => (
                        <th key={column}> {column}</th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td >{row.name}</td>
                        <td >{row.height}</td>
                        <td >{row.hair_color}</td>
                        <td >{row.gender}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    )
}



export default Table