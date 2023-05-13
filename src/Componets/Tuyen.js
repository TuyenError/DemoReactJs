import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Tuyen extends Component {
    render() {
        return (
            <div>
                <h2>Xin chào các bạn</h2>
                <nav className='navbar navbar-expand-lg navbar-light'>
                    <ul className='navbar-nav mr-auto'>
                        <li><Link to={'/home'} className="nav-link">Home</Link></li>
                        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                        <li><Link to={'/about'} className="nav-link">About</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Tuyen;