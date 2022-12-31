import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import {Search, ShoppingCart} from '@mui/icons-material';
import {mobile} from "../responsive"
import { Announcements } from './Announcements';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    ${mobile({padding: "10px 0"})}
`
// LEFT
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;  
`
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    
`

const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({width: "0px"})}
`
// CENTER
const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h2`
    font-weight: 500;
    ${mobile({fontSize: "20px"})}
`
// RIGHT
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex:3})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <h2>STORE.</h2>
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
