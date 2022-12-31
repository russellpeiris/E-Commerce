import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    border: 5px solid #6ECCAF;
    text-align: center;
    ${mobile({width: "65%"})}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300px;
    text-align: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px  0;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #edecec;
    ${mobile({margin: "20px 10px 0"})}
    &:hover{
        background-color: #f2f2f2;
    }
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 40%;
    padding: 10px;
    border: none;
    background-color: #6ECCAF;
    cursor: pointer;
    ${mobile({width: "65%"})}

    &:hover{
        background-color: #65ba9f;
    }
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder= "First Name"/>
                    <Input placeholder= "Last name"/>
                    <Input placeholder= "Email"/>
                    <Input placeholder= "Username"/>
                    <Input placeholder= "Password" type="password"/>
                    <Input placeholder= "Confirm Password" type="password"/>
                    <Agreement>
                        By creating this account, I consent to 
                        the processing of my personal data in accordance with the <b>Privacy Policy</b>.
                    </Agreement>
                </Form>
                <Button>Create Account</Button>
            </Wrapper>
        </Container>
    )
}

export default Register