import { useState } from "react"
import { useLocation } from "react-router-dom"
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

    const location = useLocation(); 
    const cat = location.pathname.split("/")[2];

    const [sort, setSort] = useState("newest")
    const [filters, setFilters] = useState({})


    const handleFilters = (e) => {
        const value =e.target.value;
        setFilters({
            ...filters, //spread operator  used to pass the properties of an object or the elements of an array
            [e.target.name]: value,
        });
    }
    console.log(filters);

    return (
        <Container>
            <Navbar/>
            <Announcements/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products :</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Brown</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>Sort Products :</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="low">Price Lowest</Option>
                        <Option value="high">Price Highest</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
