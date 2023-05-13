import React, { useState } from 'react';
import ReactDom from 'react-dom/client';

function Car () {
    const[car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        color: 'Black',
        year: 1964

    })
    return(
        <div>
            <h1>My {car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year}</p>
        </div >
    )
}

export default Car;