import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import { Home } from './pages/Home'

const Container = styled.div`
    display: flex;
    margin-top: 10px;
`

const App = () => {
    return (
        <div>
            <Topbar/>
            <Container>
                <Sidebar/>
                <Home/>
            </Container>          
        </div>
    )
}

export default App
