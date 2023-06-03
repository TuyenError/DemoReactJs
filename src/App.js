import logo from './logo.svg';
import './App.css';
// import routes from './routes';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Add from './Final/Add';
import ProductList from './Final/ProductList';
import { Route, Routes, Link } from "react-router-dom";

function App() {
    // const showContentMenus = (routes) => {
    //     var result = null;
    //     if (routes.length > 0) {
    //         result = routes.map((route, index) => {
    //             return (
    //                 <Route
    //                     key={index}
    //                     path={route.path}
    //                     exact={route.exact}
    //                     component={route.main}
    //                 />
    //             );
    //         });
    //     }
    //     return <Switch>{result}</Switch>;
    // };

    return (
        <div>
            {/* <Router> */}
                <Routes>
                    {/* <React.Fragment> */}
                        <Route exact path="/" element={<ProductList />} />
                        <Route path="/add-product" element={< Add />} />
                    {/* </React.Fragment> */}
                </Routes>
            {/* </Router> */}
        </div>
    );
}

export default App;
