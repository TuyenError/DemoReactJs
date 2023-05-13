import React, { Component } from 'react';
import { getData } from '../data';

class State1 extends Component {
    constructor(props) {
        var arr = getData();
        super(props);
        this.state = { arr };
    }
    render() {
        return (
            <div>
                {
                    this.state.arr.map(Key => 
                        <div>
                        <h2>{Key.name}</h2>
                        <h2>{Key.loai} </h2>
                        <img src={Key.image}></img>
                        
                            
                        </div>
                        )
                
                }
                
            </div>
        );
    }
}

export default State1;