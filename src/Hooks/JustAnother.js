import React, { Component } from 'react';

class JustAnother extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count Up To The Moon</button>
            </div>
        );
    }
}

export default JustAnother;
