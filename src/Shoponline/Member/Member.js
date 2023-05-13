import React, { Component } from 'react';

class Member extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            name: "Cao Tuyến",
            age: 70
        };
    };

    render() {
        let nxet = this.state.age;
        if (nxet > 50) {


            return (
                <div>
                    <h2>{this.state.name}</h2>
                    <p>Tuổi: {this.state.age}</p>
                    <p>Bạn đã già rồi</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>{this.state.name}</h2>
                    <p>Tuổi: {this.state.age}</p>
                    <p>Bạn còn trẻ</p>
                </div>
            )
        }

          
        
    }
}

export default Member;