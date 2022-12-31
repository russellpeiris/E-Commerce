import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    background-color: #fcf5f5;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center", fontSize: "1.3rem"})}
`
const InputContainer = styled.div`
    background-color: #fff;
    width: 40%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`
const Input = styled.input`
    border: none;
    padding-left: 20px;
    flex: 4;
    outline: none;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #6ECCAF;
    color: white;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: rgb(110,220, 175);
    }
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get updates about our offers and promotions!</Description>
            <InputContainer>
                <Input placeholder='Your Email'/>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
