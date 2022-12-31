import styled from "styled-components"
import {AlternateEmail, Facebook, Instagram, Phone, Pinterest, Place, Twitter} from '@mui/icons-material';
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    padding: 20px;
    flex-direction: column;

`
const Logo = styled.h2``

const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}

`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#f8f0f0"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 65%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>STORE.</Logo>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis qui dolore odit voluptas consequatur provident obcaecati laboriosam. Itaque dolorem illo tenetur blanditiis quam modi placeat numquam at deleniti nesciunt.
                    </Desc>
                    <SocialContainer>
                        <SocialIcon color="3B5999">
                            <Facebook/>
                        </SocialIcon>
                        <SocialIcon color="E4405F">
                            <Instagram/>
                        </SocialIcon>
                        <SocialIcon color="55ACEE">
                            <Twitter/>
                        </SocialIcon>
                        <SocialIcon color="E60023">
                            <Pinterest/>
                        </SocialIcon>
                    </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +94777562621
                </ContactItem>
                <ContactItem>
                    <Place style={{marginRight:"10px"}}/> 134, Work Camp Road, Dalupotha, Negombo 11500
                </ContactItem>
                <ContactItem>
                    <AlternateEmail style={{marginRight:"10px"}}/> ardpeiris@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer