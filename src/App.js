import logo from './logo.svg';
import './App.css';
// import App from './components/App/App';
// import JustAnother from './Hooks/JustAnother';
// import Counter from './Hooks/Counter';
// import reportWebVitals from './reportWebVitals';
// // import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import Content from './components/Content/Content';
import Menu from './Menu/Menu';
import Lifecycle from './Lifrcycle/Lifrcycle';
import {Route,Router, Routes,Link } from 'react-router-dom';
import Home from './Componets/Home';
import About from './Componets/About';
import Contact from './Componets/Contact';
import Tuyen from './Componets/Tuyen';
function App() {
    return (
        <div>
            <Tuyen></Tuyen>
        <Routes>
               
                <Route  path='/home' element={<Home></Home>} />
                    <Route  path='/contact' element={<Contact></Contact>} />
                    <Route  path='/about' element={<About></About>} />
              
          
            </Routes>
        </div>
        // <body>
        //     <div>
        //         <Lifecycle></Lifecycle>
        //         {/* <Menu></Menu> */}
        //     </div>
        // </body>
    );
}

export default App;