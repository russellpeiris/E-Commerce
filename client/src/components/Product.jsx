import styled from "styled-components"
import {Search, FavoriteBorder, ShoppingCartOutlined} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { color } from "@mui/system";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 350px;
    min-width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    border-radius: 50%;
    height: 200px;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 50%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.1);
        background-color: #e9f5f5;
    }
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img} key={item.id}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`} style={{textDecoration: "none", color : "black"}}>
                    <Search/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorder/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
