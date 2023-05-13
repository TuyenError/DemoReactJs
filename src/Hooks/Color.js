import React, { useState } from 'react';

function Color() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favorite color is {color} !</h1>
            <img src={`images/${color}`} alt="Color" />
            <button type="button" onClick={() => setColor('mayanh2.jpg')} >
                Blue
            </button>
            <button type="button" onClick={() => setColor('mayanh1.jpg')} >
                Red
            </button>
            <button type="button" onClick={() => setColor('mayanh3.jpg')} >
                Pink
            </button>
            <button type="button" onClick={() => setColor('mayanh3.jpg')} >
                Green
            </button>
        </>
    );
}

export default Color;


