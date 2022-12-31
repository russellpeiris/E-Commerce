import styled from 'styled-components';
import React, { useState } from 'react'
import {ArrowLeft, ArrowRight} from '@mui/icons-material';
import { sliderItems } from '../data';
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute; //parent should have position relative if using absolute in child
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: 1.5s ease;
`
const Slide = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    text-align: center;
    padding: 50px 0;

`
const Title = styled.h2`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Image = styled.img`
    height: 80%;
    margin: 50px auto;
    display: block;
`

export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)

        }else if(direction === "right"){
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0) 
        }
    };

    return (
        <Container>
            <Arrow direction = "left" onClick={()=>handleClick("left")}>
                <ArrowLeft style={{fontSize:42}}/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src = {item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction = "right" onClick={()=>handleClick("right")}>
                <ArrowRight style={{fontSize:42}}/>
            </Arrow>
        </Container>
    )
}
