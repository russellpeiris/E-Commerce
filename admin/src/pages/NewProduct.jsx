import { Female, Male, Upload } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    flex: 6;
    padding: 40px 20px;
`
const Title = styled.h2``

const FormContainer = styled.div`
    margin: 20px 0;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);
    padding: 30px;
    border-radius: 10px;
`
const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 15px;
    margin: 10px 0;
    gap: 100px;
`
const InputSide = styled.div`
    padding: 20px;
`
const FormItem = styled.div`
    padding: 10px 0;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Label = styled.label``
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
const Photo = styled.img`
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
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
    height: 40px;

    &:hover{
        background-color: #75BBA7;
    }
    &:active{
        background-color: #6ECCAF;
    }
`
const Select = styled.select`
    outline: none;
    border: none;
    background-color: #f6f6f6;
    padding: 0 10px;
    height: 40px;
    
`
const Option = styled.option``
export default function NewProduct() {
    return (
        <Container>
            <Title>Add Product</Title>
            <FormContainer>
            <Form>
                <InputSide>
                    <FormItem>
                        <Label>Product Name</Label>
                        <Input placeholder='Santa Hat'/>
                    </FormItem>
                    <FormItem>
                        <Label>InStock</Label>
                        <Select name="inStock" id="idStock">
                            <Option>Yes</Option>
                            <Option>No</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Label>Active</Label>
                        <Select name="active" id="active">
                            <Option>Yes</Option>
                            <Option>No</Option>
                        </Select>
                    </FormItem>
                </InputSide>
                <PhotoSide>
                    <PhotoNButton>
                        <Photo img src = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Zo47w4+3L._AC_UL1100_.jpg"/>
                        <UploadButton>
                            <Label htmlFor="file"><Upload style={{cursor: 'pointer'}}/></Label>
                            <Input type="file" id="file" style={{display:'none'}}/>
                        </UploadButton>
                        <SubmitButton type="submit">UPDATE</SubmitButton>
                    </PhotoNButton>
                </PhotoSide>
            </Form>
            </FormContainer>
        </Container>
    )
}
