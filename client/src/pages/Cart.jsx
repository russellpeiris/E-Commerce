import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import { Announcements } from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {mobile} from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 10px;
    cursor: pointer;                        // then none
    /* border: ${props => props.type === "filled" && "none"}; */
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};

`
const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
    ${mobile({display: "none"})}
`
const TopTexts = styled.div`

`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    ${mobile({flexDirection: "column"})}

`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;


`
const Details = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;

`
const ProductName = styled.span`
        margin-bottom: 10px;
`
const ProductId = styled.span`
        margin-bottom: 10px;
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-bottom: 10px;
`
const ProductSize = styled.span``
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`
const ProductAmount = styled.div`
    font-size: 20px;
    ${mobile({margin: "12px"})}
`
const ProductPrice = styled.div`
    font-size: 24px;
    font-weight: 300;
    ${mobile({marginBottom: "20px"})}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 3px 0;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid #6ECCAF;
    padding: 20px;
    height: 40vh;
    ${mobile({margin: "20px 0"})}
`
const SummaryTitle = styled.h2`
    font-weight: 300;
`
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500" };
    font-size: ${props=>props.type === "total" && "24px" };
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 500;
`

export const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcements/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Cart(2)</TopText>
                        <TopText>Wishlist(21)</TopText>
                    </TopTexts>
                    <TopButton type = "filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61SMiXuhEaL._AC_UL1500_.jpg"/>
                                <Details>
                                    <ProductName>Product :SHADES</ProductName>
                                    <ProductId>ID :982342123</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>Size :16.6</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>LKR 5000</ProductPrice>
                            </PriceDetails>
                        </Product>

                        <Hr/>
                        
                        <Product>
                            <ProductDetails>
                                <Image src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Pntn8GI2L._AC_UL1500_.jpg"/>
                                <Details>
                                    <ProductName>Product :SUMMER DRESS</ProductName>
                                    <ProductId>ID :982342123</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>Size :16.6</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>LKR 5000</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>LKR 10000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>LKR 300</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>LKR -120</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>LKR 10180</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECK OUT</SummaryButton>
                    </Summary>
                </Bottom> 
            </Wrapper>
            <Footer/>
        </Container>
    )
}
