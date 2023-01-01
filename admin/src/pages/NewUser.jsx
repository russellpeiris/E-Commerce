import { Female, Male, Upload } from "@mui/icons-material"
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
const InputSide = styled.div`
    padding: 20px;
`
const Title = styled.h2``

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
`
const FormItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    padding: 10px 0;
`
const Label = styled.label`
    
`
const Input = styled.input`
    outline: none;
    border: none;
    background-color: #f6f6f6;
    padding: 0 10px;
    height: 40px;

    &:hover{
        background-color: #f2f2f2;
    }
`
const RadioInput = styled.input`
    margin: 10px;
`
const Gender = styled.div`
    display: flex;
    align-items: center;
`
const Select = styled.select`
    outline: none;
    border: none;
    padding: 10px 8px;
    height: 40px;
    background-color: #f6f6f6;
    &:hover{
        background-color: #f2f2f2;
    }
`
const PhotoSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
`
const PhotoNButton = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const UploadButton = styled.div`
    margin: 8px 0;
    background-color: #f6f6f6;
    padding: 2px 3px;
    border-radius: 30%;

    &:hover{
        background-color: #f2f2f2;
        cursor: pointer;
    }
`
const Photo = styled.img`
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;

`
const SubmitButton = styled.button`
    margin-top: 10px;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 10px 13px;
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
const Option = styled.option``
export default function NewUser() {
    return (
        <Container>
            <Title>Add User</Title>
            <FormContainer>
                <Form id="newUserform">
                    <InputSide>
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
                            <Label>Active?</Label>
                            <Select name="active" id="active">
                                <Option disabled selected>Yes / No</Option>
                                <Option>Yes</Option>
                                <Option>No</Option>
                            </Select>
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
                    </InputSide>
                    <PhotoSide>
                        <PhotoNButton>
                            <Photo img src = "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/>
                            <UploadButton>
                                <Label htmlFor="file"><Upload style={{cursor: 'pointer'}}/></Label>
                                <Input type="file" id="file" style={{display:'none'}}/>
                            </UploadButton>
                            <SubmitButton type="submit">Add User</SubmitButton>
                        </PhotoNButton>
                    </PhotoSide>
                </Form>  
            </FormContainer>
        </Container>
    )
}
