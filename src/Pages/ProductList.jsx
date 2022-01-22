import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Product from "../Components/Product";
import { mobile } from './../responsive';

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 2rem;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 2rem;
    ${mobile({ width: '0px 2rem', display:'flex', flexDirection:'column'})};
`;

const FilterText = styled.span`
    font-size: 2rem;
    font-weight: 600;
    margin-right: 2rem;
    ${mobile({ marginRight: "0px"})};
`;

const Select = styled.select`
    padding: 1rem;
    margin-right: 2rem;
    ${mobile({ margin: "1rem 0rem"})};
`;
const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter >
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                        Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter >
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Product />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList;