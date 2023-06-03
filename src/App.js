import logo from './logo.svg';
import './App.css';
// import routes from './routes';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Add from './Final/Add';
import Edit from './Final/Edit';

import ProductList from './Final/ProductList';
import { Route, Routes, Link } from "react-router-dom";

import Delete from './Final/Delete';

function App() {



    return (


        <div>

            <Routes>
                <Route path="/Add" element={<Add></Add>} />

                <Route path="/Show" element={<ProductList></ProductList>} />

                <Route path="/Delete/:id" element={<Delete></Delete>} />
                <Route path="/Edit/:id" element={<Edit></Edit>} />
            </Routes>
        </div >
    );
}

export default App;
