import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import { Home } from './pages/Home'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import UserList from './pages/UserList'
import User from './pages/User'
import NewUser from './pages/NewUser'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import NewProduct from './pages/NewProduct'

const Container = styled.div`
    display: flex;
    margin-top: 10px;
`

const App = () => {
    return (
        <div>
            <Router>
                <Topbar/>
                <Container>
                    <Sidebar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/users' element={<UserList/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/user/:userid' element={<User/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/new-user' element={<NewUser/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/products-list' element={<ProductList/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/product/:productid' element={<Product/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/new-product' element={<NewProduct/>}/>
                    </Routes>
                </Container>  
            </Router>
        </div>
    )
}

export default App
