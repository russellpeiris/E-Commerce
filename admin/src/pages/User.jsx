import styled from "styled-components"
import { AlternateEmail, CakeOutlined, LocalPhoneOutlined, PersonOutline, Place, PlaceOutlined, Upload } from "@mui/icons-material"
import {Link} from 'react-router-dom'
const Container = styled.div`
    flex: 6;
    /* margin: 40px 20px 20px 20px; */
    padding: 40px 20px;
`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h2`

`
const NewUser = styled.button`
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
const LeftRightContainer = styled.div`
    display: flex;
    margin: 20px 0;
    gap: 15px;
`
const LeftContainer = styled.div`
    flex: 1;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);
    padding: 30px;
    border-radius: 10px;
`
const UserTitle = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`
const NameJob = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`
const Name = styled.span`
    font-size: 18px;
`
const Job = styled.span`
    font-weight: 300;
    font-size: 14px;
`
const Avatar = styled.img`
    border-radius: 50%;
    height: 110px;
    width: 110px;
    object-fit: cover;
`
const UserBio = styled.div`
    display: flex;
    flex-direction: column;
    
`
const BioItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: end;
    margin: 10px 0;
    
`
// form section
const ContainerRight = styled.div`
    flex: 3;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);
    border-radius: 10px;
    padding: 30px;

`
const FormTitle = styled.div`

`
const FormContainer = styled.div`
`
const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 15px;
    margin: 10px 0;
`
const InputSide = styled.div`

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
    /* width: 80px;
    height: 40px; */

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
    padding: 10px 8px;
    height: 40px;
    background-color: #f6f6f6;
    &:hover{
        background-color: #f2f2f2;
    }
`
const Option = styled.option``
const Info = styled.span``
export default function User() {
    return (
        <Container>
            <TitleContainer>
                <Title>User Account</Title>
                <Link to={'/new-user'}>
                    <NewUser>NEW USER +</NewUser>
                </Link>
            </TitleContainer>
            <LeftRightContainer>
                <LeftContainer>
                    <UserTitle>
                        <NameJob>
                            <Name>Jon Snow</Name>
                            <Job>Web Developer</Job>
                        </NameJob>
                        <Avatar img src = "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/>
                    </UserTitle>
                    <UserBio>
                        <BioItem>
                            <PersonOutline/>
                            <Info>jonsnow</Info>
                        </BioItem>
                        <BioItem>
                            <LocalPhoneOutlined/>
                            <Info>07712312312</Info>
                        </BioItem>
                        <BioItem>
                            <CakeOutlined/>
                            <Info>01-01-2000</Info>
                        </BioItem>
                        <BioItem>
                            <AlternateEmail/>
                            <Info>email@email.com</Info>
                        </BioItem>
                        <BioItem>
                            <PlaceOutlined/>
                            <Info>Sri Lanka</Info>
                        </BioItem>
                    </UserBio>
                </LeftContainer>
                <ContainerRight>
                    <FormContainer>
                    <FormTitle>Update user information</FormTitle>
                    <Form>
                        <InputSide>
                            <FormItem>
                                <Label>Username</Label>
                                <Input placeholder='jonsnow'/>
                            </FormItem>
                            <FormItem>
                                <Label>Full Name</Label>
                                <Input placeholder='Jon Snow'/>
                            </FormItem>
                            <FormItem>
                                <Label>Email</Label>
                                <Input placeholder='email@email.com'/>
                            </FormItem>
                            <FormItem>
                                <Label>Phone</Label>
                                <Input placeholder='07712312312'/>
                            </FormItem>
                            <FormItem>
                                <Label>Country</Label>
                                <Input placeholder='Sri Lanka'/>
                            </FormItem>
                            <FormItem>
                                <Label>Active</Label>
                                <Select>
                                    <Option>Yes</Option>
                                    <Option>No</Option>
                                </Select>
                            </FormItem>
                        </InputSide>
                        <PhotoSide>
                            <PhotoNButton>
                                <Photo img src = "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/>
                                <UploadButton>
                                    <Label htmlFor="file"><Upload style={{cursor: 'pointer'}}/></Label>
                                    <Input type="file" id="file" style={{display:'none'}}/>
                                </UploadButton>
                                <SubmitButton type="submit">UPDATE</SubmitButton>
                            </PhotoNButton>
                        </PhotoSide>
                    </Form>
                    </FormContainer>
                </ContainerRight>
            </LeftRightContainer>
        </Container>
    )
}
