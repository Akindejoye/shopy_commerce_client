import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 6rem;
    ${mobile({ height: '5rem'})}
`;

const Wrapper = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: '1rem 0rem'})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 1.4rem;
    cursor: pointer;
    ${mobile({ display: 'none'})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: '5rem'})}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: '2.4rem'})}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: 'center'})}
`;

const MenuItem = styled.div`
    font-size: 1.4rem;
    cursor: pointer;
    margin-left: 2.5rem;
    ${mobile({ fontSize: '1.2rem', marginLeft:'1rem'})}
`;

const Navbar = () => {
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' /> 
                        <Search style={{color:"gray", fontSize:'1.6rem'}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TAYE.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartOutlined style={{fontSize:'2rem'}} />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper> 
        </Container>
     );
}
 
export default Navbar;