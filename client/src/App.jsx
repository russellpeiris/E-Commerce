import { Home } from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Cart } from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Announcements } from "./components/Announcements";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navigate } from 'react-router-dom';

const App = () => {

    const user = true


    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="/products/:category" element={<ProductList/>}/>
            </Routes>
            <Routes>
                <Route path="/product/:id" element={<Product/>}/>
            </Routes>
            <Routes>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Routes >   
                <Route path="/login" element={user? <Navigate replace to="/" /> : <Login/>}/>
            </Routes>
            <Routes>
                <Route path="/register" element={user? <Navigate replace to="/" /> : <Login/>}/>
            </Routes>

        </Router>
    )
};
export default App;