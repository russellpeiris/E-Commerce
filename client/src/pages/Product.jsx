import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { Announcements } from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { addProduct } from "../redux/cartRedux"
import { publicRequest } from "../requestMethod"
import {mobile} from "../responsive"
import { useDispatch } from "react-redux" 

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    height: 50%;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 300;
`
const Desc = styled.div`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 32px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 18px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin:0 5px ;
    cursor: pointer;
`
const FilterSize = styled.select`
    font-size: 16px;
    margin-left: 10px;
    padding: 5px;
    outline: none;
`
const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid  #6ECCAF;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid #6ECCAF;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: #6ECCAF;
    }
`


const Product = () => {
    const location = useLocation(); 
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();


    useEffect(()=>{
        const getProduct = async () =>{
            try{
                const res = await publicRequest.get("/products/find/" + id);//anyone can do get request on products
                setProduct(res.data);  
            }catch(err){}
        };
        getProduct();
    },[id])

    const handleQuantity = (type) => {
        if(type == "dec"){
            quantity > 1 && setQuantity(quantity - 1)
        }else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = ()=>{
        //updating the card
        dispatch(
            addProduct({...product, quantity, color, size})
        )
    }

  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>${product.price}</Price>
                <FilterContainer>
                    <Filter>
                    {product.color?.map((c) => (
                        <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                    ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size :</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                        {product.size?.map((s) => (
                            <FilterSizeOption key={s}>{s}</FilterSizeOption>
                        ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product