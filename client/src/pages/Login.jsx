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
    padding: 40px;
    width: 25%;
    border: 5px solid #6ECCAF;
    text-align: center;
    ${mobile({width: "65%"})}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300px;
    text-align: center;
    margin-bottom: 20px;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    width: 60%;
    margin: 10px auto;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #edecec;
    &:hover{
        background-color: #f2f2f2;
    }
`

const Button = styled.button`
    width: 40%;
    padding: 10px;
    border: none;
    background-color: #6ECCAF;
    cursor: pointer;
    margin-top: 10px;

    &:hover{
        background-color: #65ba9f;
    }
`

const Link = styled.a`
    font-size: 12px;
    margin: 5px 0;
    cursor: pointer;
    text-decoration: underline;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Login to your account</Title>
                <Form>
                    <Input placeholder= "Username"/>
                    <Input placeholder= "Password" type="password"/>
                    <Link>Forgot Password?</Link>
                    <Link>Create an Account</Link>
                </Form>
                <Button>Login</Button>
            </Wrapper>
        </Container>
    )
}

export default Login