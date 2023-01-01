import styled from "styled-components"
import { AlternateEmail, CakeOutlined, LocalPhoneOutlined, PersonOutline, Place, Upload } from "@mui/icons-material"
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
    justify-content: space-between;
`
const NameJob = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.span``
const Job = styled.span`
    font-weight: 300;
    font-size: 14px;
`
const Avatar = styled.img`
    border-radius: 50%;
    height: 70px;
    width: 70px;
    object-fit: cover;
`
const UserBio = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    
`
const BioItem = styled.div`
    display: flex;
    margin: 5px 0;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
`
// form section
const ContainerRight = styled.div`
    flex: 2;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);

    border-radius: 10px;
    padding: 30px;
`
const FormTitle = styled.div`

`
const Form = styled.form`
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    margin: 10px 0;
`
const InputSide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const FormItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0;
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
    flex: 1;
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
                            <Place/>
                            <Info>Sri Lanka</Info>
                        </BioItem>
                    </UserBio>
                </LeftContainer>
                <ContainerRight>
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
                </ContainerRight>
            </LeftRightContainer>
        </Container>
    )
}
