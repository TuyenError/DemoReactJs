import logo from './logo.svg';
import './App.css';
// import routes from './routes';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';x

import Edit from './Final/Edit';

import ProductList from './Final/ProductList';
import { Route, Routes, Link } from "react-router-dom";

import Delete from './Final/Delete';
import ShowProduct from './Laravel-API/ShowProduct';
import ShowTiki from './Tiki/ShowTiki';
function App() {
    return (
        <div>
            <ShowTiki></ShowTiki>
        </div >
    );
}

export default App;
