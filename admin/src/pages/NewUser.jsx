import { Female, Male } from "@mui/icons-material"
import { color } from "@mui/system"
import styled from "styled-components"

const Container = styled.div`
    flex: 6;
    padding: 40px 20px;
`
const FormContainer = styled.div`
    margin: 20px 0;
    padding: 30px;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);
    border-radius: 10px;
`
const Title = styled.h2``

const Form = styled.form`
    display: grid;
    grid-template-columns: auto auto;
`
const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
`
const Label = styled.label`
    margin: 5px 0;
`
const Input = styled.input`
    padding: 10px;
    outline: none;
    border: none;
    background-color: #f6f6f6;
    &:hover{
        background-color: #f2f2f2;
    }
`
const RadioInput = styled.input`

`
const Gender = styled.div`
    display: flex;
    align-items: center;
`
const Select = styled.select`
    outline: none;
    border: none;
    padding: 10px 8px;
    background-color: #f6f6f6;
    &:hover{
        background-color: #f2f2f2;
    }
`
const Button = styled.button`
    padding: 8px 13px;
    border: none;
    border-radius: 5px;
    background-color: #6ECCAF;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover{
        background-color: #75BBA7;
    }
    &:active{
        background-color: #6ECCAF;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
`
const Option = styled.option``
export default function NewUser() {
    return (
        <Container>
            <Title>New User</Title>
            <FormContainer>
                <Form id="newUserform">
                    <FormItem>
                        <Label>Username</Label>
                        <Input placeholder='Username'/>
                    </FormItem>
                    <FormItem>
                        <Label>Full Name</Label>
                        <Input placeholder='Full Name'/>
                    </FormItem>
                    <FormItem>
                        <Label>Email</Label>
                        <Input placeholder='example@email.com'/>
                    </FormItem>
                    <FormItem>
                        <Label>Phone</Label>
                        <Input placeholder='07X-XXX-XXXX'/>
                    </FormItem>
                    <FormItem>
                        <Label>Country</Label>
                        <Input placeholder='Sri Lanka'/>
                    </FormItem>
                    <FormItem>
                            <Label>Gender</Label>
                        <Gender>
                            <RadioInput type='radio' name="gender" id="male" value="male" style={{cursor: 'pointer'}}/>
                            <Label htmlFor="male">
                                <Male/>
                            </Label>
                            <RadioInput type='radio' name="gender" id="female" value="male"  style={{cursor: 'pointer'}}/>
                            <Label htmlFor="female">
                                <Female/>
                            </Label>
                        </Gender>
                    </FormItem>
                    <FormItem>
                        <Label>Active?</Label>
                        <Select name="active" id="active">
                            <Option disabled selected>Yes / No</Option>
                            <Option>Yes</Option>
                            <Option>No</Option>
                        </Select>
                    </FormItem>
                </Form>  
                <ButtonContainer>
                    <Button type="submit" form="newUserform">Add User</Button>
                </ButtonContainer>
            </FormContainer>
        </Container>
    )
}
