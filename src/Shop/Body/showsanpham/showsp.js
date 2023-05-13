import React, { Component } from 'react';

class Showcard extends Component {
    render() {
        return (
            <div className="product">
                <div className="text">
                  <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
                </div>
                <div className="p-img">
                <img src={this.props.image} width={200} height={200} />				
                </div>
                <div className="text">
                  <div className="p-cat">{this.props.name} </div>
                  <div className="p-cat">{this.props.type} </div>
                  <div className="p-price">{this.props.gia}</div>
                  <input type="button" className="button" name="add" defaultValue="Add to cart" />
                </div>
                <div className="clear" />
              </div>
        );
    }
}

export default Showcard;