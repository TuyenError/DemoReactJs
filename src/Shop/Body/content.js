import React, { Component } from 'react';
import { getData } from './data';
import Showsp from './showsanpham/showsp';

class content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  Canon = () => {
    let data = getData();
    const filteredData = data.filter(item => item.type === 'Canon');
    const newData = filteredData.map(key => {
      return (
        <Showsp
          image={key.image}
          name={key.name}
          type={key.type}
          gia={key.gia}
        />
      );
    });
    this.setState({ data: newData });
  };

  Sony = () => {
    let data = getData();
    const filteredData = data.filter(item => item.type === 'Sony');
    const newData = filteredData.map(key => {
      return (
        <Showsp
          image={key.image}
          name={key.name}
          type={key.type}
          gia={key.gia}
        />
      );
    });
    this.setState({ data: newData });
  };

  Nikon = () => {
    let data = getData();
    const filteredData = data.filter(item => item.type === 'Nikon');
    const newData = filteredData.map(key => {
      return (
        <Showsp
          image={key.image}
          name={key.name}
          type={key.type}
          gia={key.gia}
        />
      );
    });
    this.setState({ data: newData });
  };

  Fujifilm = () => {
    let data = getData();
    const filteredData = data.filter(item => item.type === 'Fujifilm');
    const newData = filteredData.map(key => {
      return (
        <Showsp
          image={key.image}
          name={key.name}
          type={key.type}
          gia={key.gia}
        />
      );
    });
    this.setState({ data: newData });
  };

  render() {
    return (
      <div>
        <div className="button">
          <button onClick={() => this.setState({ data: [] })}>Home</button>
          <button onClick={this.Canon}>Máy ảnh Canon</button>
          <button onClick={this.Sony}>Máy ảnh Sony</button>
          <button onClick={this.Nikon}>Máy ảnh Nikon</button>
          <button onClick={this.Fujifilm}>Máy ảnh Fujifilm</button>
        </div>
        <div style={{ clear: 'both' }} />
        <div className="product-list">{this.state.data}</div>
      </div>
    );
  }
}

export default content;
