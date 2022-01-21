import styled from 'styled-components';
import { Search } from "@material-ui/icons";

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
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;

const Navbar = () => {
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        input 
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>center</Center>
                <Right>right</Right>
            </Wrapper> 
        </Container>
     );
}
 
export default Navbar;