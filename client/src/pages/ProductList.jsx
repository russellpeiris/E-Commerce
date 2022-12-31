import styled from "styled-components"
import { Announcements } from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import {mobile} from "../responsive"
const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
    
const Filter = styled.div`
    margin: 20px;
    
`
const FilterText = styled.span`
    font-weight: 500;
`

const Select = styled.select`
    outline: none;
    height: 30px;
    width: 100px;
    margin-left: 10px;
    padding-left: 8px;
    ${mobile({margin: "5px"})}
`
const Option = styled.option`
    
`

function ProductList() {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products :</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter><FilterText>Sort Products :</FilterText>
            <Select>
                    <Option disabled selected>Newest</Option>
                    <Option>Price Lowest</Option>
                    <Option>Price Highest</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
