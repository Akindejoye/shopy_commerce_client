import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 7rem;
    margin-bottom: 2rem;
`
const Desc = styled.div`
    font-size: 2.4rem;
    font-weight: 300;
    margin-bottom: 2rem;
`
const InputContainer = styled.div`
    width: 50%;
    height: 4rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 2rem;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #fff;
`

const Newsletter = () => {
    return ( 
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>

        </Container>
     );
}
 
export default Newsletter;