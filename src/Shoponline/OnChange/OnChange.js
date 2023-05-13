import React, { Component } from 'react';

class OnChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Your name"
        };
    }
    onChange=(e)=> {
        this.setState({ name: e.target.value })
    }
    render() {
        return (
            <div>
                <input type='text' onChange={this.onChange.bind(this)}></input>
                <h4>Hello {this.state.name }</h4>
            </div>
        );
    }
}

export default OnChange;
