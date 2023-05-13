import React, { useState } from 'react';
import ReactDom from 'react-dom/client';

function Bai4() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");
        

  
    return (
        <div>
            <h1>My {brand}</h1>
            <p>It is a {color} {model} from {year}</p>
        </div >
    )
}

export default Bai4;