import { Upload } from "@mui/icons-material"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Chart from "../components/Chart"
import { productData } from "../DummayData"

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Container = styled.div`
    flex: 6;
    padding: 40px 20px;
`

const Title = styled.h2``

const NewProduct = styled.button`
    border: none;
    padding: 8px 16px;
    background-color: white;
    transition: all 0.2s ease;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.4);

    &:hover{
        background-color: white;
        transform: scale(1.05);
        box-shadow: 0px 0px 11px 0px rgba(166,166,166,1);
    }
    &:active{
        background-color: #6ECCAF;
    }
`
const LeftnRightContainers = styled.div`
    display: flex;
    margin: 20px 0;
    gap: 15px;
`
// not needed becase we use Chart as parent left container
// const Left = styled.div`
//     flex: 1;
//     box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);
//     padding: 30px;
//     border-radius: 10px;
// `
const Right = styled.div`
    flex: 1;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);
    padding: 30px;
    border-radius: 10px;
`
const RightTitle = styled.h2`
    font-size: 21px;
`
const ProductTitle = styled.div`
    display: flex;
    justify-content: center;
    
`
const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 150px;
    gap: 15px;
    font-size: 15px;
`
const Image = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
`
const ProductBody = styled.div``

const InfoIten = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`

const Info = styled.div`

`
//if you need to add style you can override it like this
const OverridenChart = styled(Chart)` 

`
const EditSection = styled.div`
    margin: 20px 0;
    padding: 30px;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);

`
const FormTitle = styled.div`
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
export default function Product() {
    return (
        <Container>
            <TitleContainer>
                <Title>Product Info</Title>
                <Link to={'/new-product'}>
                    <NewProduct>NEW PRODUCT +</NewProduct>
                </Link>
            </TitleContainer>
            <LeftnRightContainers>
                {/* we will use the create Chart in component folder
                as the parent LEFT side because if we add a div called Left
                the style will not come as needed */}
                <OverridenChart data={productData} title="Product Performance"  dataKey="Sales"/>
                <Right>
                    <RightTitle>Santa Hat</RightTitle>
                    <ProductContainer>
                    <ProductTitle>
                        <Image img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Zo47w4+3L._AC_UL1100_.jpg"/>
                    </ProductTitle>
                        <ProductBody>
                            <InfoIten>
                                Product ID
                                <Info>123</Info>
                            </InfoIten>
                            <InfoIten>
                                Price
                                <Info>LKR 800</Info>
                            </InfoIten>
                            <InfoIten>
                                InStock
                                <Info>Yes</Info>
                            </InfoIten>
                            <InfoIten>
                                Active
                                <Info>Yes</Info>
                            </InfoIten>
                        </ProductBody>
                    </ProductContainer>
                </Right>
            </LeftnRightContainers>
            <EditSection>
            <FormTitle>Update product information</FormTitle>
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
            </EditSection>
        </Container>
    )
}
