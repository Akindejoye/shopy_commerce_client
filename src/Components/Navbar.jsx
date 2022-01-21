import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height: 6rem;
`;

const Wrapper = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 1.4rem;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 1.4rem;
    cursor: pointer;
    margin-left: 2.5rem;
`;

const Navbar = () => {
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input /> 
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