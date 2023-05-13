import React, { Component } from 'react';

class Change extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: "2016",
        };

    };

    changColor = () => {
        this.setState({ color: "green" });
    }

    render() {
        const squareStyle = {
            width: '100px',
            height: '100px',
            backgroundColor: this.state.color,
        };

        return (
            <div>
                <div style={squareStyle}></div>
                <h1>My {this.state.name}</h1>
                <p>
                    It's a {this.state.color} {this.state.age} from {this.state.year}
                </p>

                <button type='button' onClick={this.changColor}>
                    Change color
                </button>
            </div>
        )
    }
}


export default Change;


// #e.target.value () 