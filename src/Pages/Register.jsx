import styled from "styled-components";
import { mobile } from './../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 2rem;
    background-color: #fff;
    ${mobile({ width: '75%'})};
`;

const Title = styled.h1`
    font-size: 2.4rem;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 2rem 1rem 0rem 0rem;
    padding: 1rem;
`;

const Agreement = styled.span`
    font-size: 1.2rem;
    margin: 2rem 0rem;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 1.5rem 2rem;
    background-color: teal;
    color: #fff;
    cursor: pointer;
`;

const Register = () => {
    return ( 
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='name' />
                    <Input placeholder='last name' />
                    <Input placeholder='username' />
                    <Input placeholder='email' />
                    <Input placeholder='password' />
                    <Input placeholder='confirm password' />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
     );
}
 
export default Register;